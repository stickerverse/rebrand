// Firebase configuration for Sticker Shuttle
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqSXLM7xznpNvBJbAmd1sVhoGKS8xQpX0",
  authDomain: "stickerverse-f7eec.firebaseapp.com",
  projectId: "stickerverse-f7eec",
  storageBucket: "stickerverse-f7eec.firebasestorage.app",
  messagingSenderId: "702441083517",
  appId: "1:702441083517:web:eb7cf6db88e4ea88279714",
  measurementId: "G-1P787V90LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { app, auth, analytics, googleProvider };



