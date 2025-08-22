// Authentication service for Sticker Shuttle
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, googleProvider } from './firebase-config.js';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.authStateListeners = [];
    this.init();
  }

  init() {
    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      this.notifyAuthStateListeners(user);
      
      if (user) {
        console.log('User signed in:', user.email);
        this.updateUIForAuthenticatedUser(user);
      } else {
        console.log('User signed out');
        this.updateUIForUnauthenticatedUser();
      }
    });
  }

  // Email/Password Authentication
  async signUpWithEmail(email, password, firstName, lastName, companyName, isWholesale = false) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update user profile with additional information
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: null
      });

      // Store additional user data in localStorage (in a real app, you'd use Firestore)
      const userData = {
        uid: user.uid,
        email: user.email,
        firstName,
        lastName,
        companyName,
        isWholesale,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('userData', JSON.stringify(userData));
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  }

  async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update last login
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      userData.lastLogin = new Date().toISOString();
      localStorage.setItem('userData', JSON.stringify(userData));
      
      return { success: true, user };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  }

  // Google Authentication
  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if this is a new user
      if (result._tokenResponse?.isNewUser) {
        // For new Google users, we'll need to collect additional info
        this.showAdditionalInfoModal(user);
      }
      
      return { success: true, user };
    } catch (error) {
      console.error('Google sign in error:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  }

  // Password Reset
  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: 'Password reset email sent!' };
    } catch (error) {
      console.error('Password reset error:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  }

  // Sign Out
  async signOut() {
    try {
      await signOut(auth);
      localStorage.removeItem('userData');
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Get user data from localStorage
  getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.currentUser;
  }

  // Check if user is wholesale
  isWholesaleUser() {
    const userData = this.getUserData();
    return userData?.isWholesale || false;
  }

  // Add auth state listener
  onAuthStateChanged(callback) {
    this.authStateListeners.push(callback);
  }

  // Notify all auth state listeners
  notifyAuthStateListeners(user) {
    this.authStateListeners.forEach(callback => {
      try {
        callback(user);
      } catch (error) {
        console.error('Auth state listener error:', error);
      }
    });
  }

  // Update UI for authenticated user
  updateUIForAuthenticatedUser(user) {
    // Update header buttons
    const loginBtn = document.querySelector('a[href*="login"]');
    const signupBtn = document.querySelector('a[href*="signup"]');
    
    if (loginBtn) {
      loginBtn.style.display = 'none';
    }
    if (signupBtn) {
      signupBtn.style.display = 'none';
    }

    // Add user menu or account button
    this.addUserMenu();
  }

  // Update UI for unauthenticated user
  updateUIForUnauthenticatedUser() {
    // Show login/signup buttons
    const loginBtn = document.querySelector('a[href*="login"]');
    const signupBtn = document.querySelector('a[href*="signup"]');
    
    if (loginBtn) {
      loginBtn.style.display = 'inline-block';
    }
    if (signupBtn) {
      signupBtn.style.display = 'inline-block';
    }

    // Remove user menu
    this.removeUserMenu();
  }

  // Add user menu to header
  addUserMenu() {
    // Remove existing user menu if it exists
    this.removeUserMenu();

    const header = document.querySelector('header nav');
    if (!header) return;

    const userData = this.getUserData();
    const displayName = userData?.firstName || this.currentUser?.displayName || this.currentUser?.email;

    const userMenu = document.createElement('div');
    userMenu.className = 'user-menu relative';
    userMenu.innerHTML = `
      <button class="user-menu-btn px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2" 
              style="background:rgba(255, 255, 255, 0.05);border:1px solid rgba(255, 255, 255, 0.1);box-shadow:0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);backdrop-filter:blur(12px)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        ${displayName}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="user-dropdown absolute right-0 mt-2 w-48 rounded-lg shadow-xl opacity-0 invisible transition-all duration-200 transform scale-95 origin-top-right" 
           style="background:rgba(255, 255, 255, 0.08);backdrop-filter:blur(20px);border:1px solid rgba(255, 255, 255, 0.15)">
        <div class="py-2">
          <a href="account/dashboard" class="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200">
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Dashboard
          </a>
          <a href="account/orders" class="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200">
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            My Orders
          </a>
          <a href="account/profile" class="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200">
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Profile
          </a>
          <hr class="my-2 border-white/20">
          <button class="signout-btn w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10 transition-colors duration-200">
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    `;

    header.appendChild(userMenu);

    // Add event listeners
    const userMenuBtn = userMenu.querySelector('.user-menu-btn');
    const userDropdown = userMenu.querySelector('.user-dropdown');
    const signoutBtn = userMenu.querySelector('.signout-btn');

    userMenuBtn.addEventListener('click', () => {
      userDropdown.classList.toggle('opacity-0');
      userDropdown.classList.toggle('invisible');
      userDropdown.classList.toggle('scale-95');
    });

    signoutBtn.addEventListener('click', () => {
      this.signOut();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target)) {
        userDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
      }
    });
  }

  // Remove user menu
  removeUserMenu() {
    const existingMenu = document.querySelector('.user-menu');
    if (existingMenu) {
      existingMenu.remove();
    }
  }

  // Show additional info modal for Google users
  showAdditionalInfoModal(user) {
    // This would show a modal to collect additional user information
    // For now, we'll just redirect to a profile completion page
    if (window.location.pathname !== '/account/profile') {
      window.location.href = '/account/profile';
    }
  }

  // Get user-friendly error messages
  getErrorMessage(errorCode) {
    const errorMessages = {
      'auth/user-not-found': 'No account found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
      'auth/popup-closed-by-user': 'Sign-in was cancelled.',
      'auth/cancelled-popup-request': 'Sign-in was cancelled.',
      'auth/popup-blocked': 'Pop-up was blocked by your browser. Please allow pop-ups for this site.'
    };
    
    return errorMessages[errorCode] || 'An error occurred. Please try again.';
  }
}

// Create and export singleton instance
const authService = new AuthService();
export default authService;



