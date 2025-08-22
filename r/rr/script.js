var camera,
  scene,
  renderer,
  mesh,
  material,
  group,
  lastMoveTimeStamp,
  rotateStartPoint = new THREE.Vector3(0, 0, 1),
  rotateEndPoint = new THREE.Vector3(0, 0, 1),
  curQuaternion,
  rotationSpeed = 2,
  moveReleaseTimeDelta = 50,
  deltaX = 0,
  deltaY = 0,
  mouseDown = false,
  x, y, dx, dy, angleBetween,
  radius = 90,
  degreesPerStep = 24,
  radians = degreesPerStep * Math.PI / 180;

var startPoint = {
  x: 0,
  y: 0
};

var EventTypes = {
  START: {
    handler: onDocumentMouseDown,
    events: ['mousedown', 'touchstart']
  },
  MOVE: {
    handler: onDocumentMouseMove,
    events: ['mousemove', 'touchmove']
  },
  END: {
    handler: onDocumentMouseUp,
    events: ['mouseup', 'touchend', 'touchcancel', 'touchleave']
  }
};

function addListeners(context, eventType) {
  eventType.events.forEach(function(evt) {
    context.addEventListener(evt, eventType.handler, false);
  });
};

function removeListeners(context, eventType) {
  eventType.events.forEach(function(evt) {
    context.removeEventListener(evt, eventType.handler, false);
  });
};

function onDocumentMouseDown(event) {
  event.preventDefault();

  addListeners(document, EventTypes.MOVE);
  addListeners(document, EventTypes.END);

  mouseDown = true;

  startPoint = {
    x: event.clientX || event.touches[0].clientX,
    y: event.clientY || event.touches[0].clientY
  };

  rotateStartPoint = rotateEndPoint = projectOnTrackball(0, 0);
}

function onDocumentMouseMove(event) {
  deltaX = (event.x || event.touches[0].clientX) - startPoint.x;

  handleRotation();

  startPoint.x = (event.x || event.touches[0].clientX);

  lastMoveTimestamp = new Date();
}

function onDocumentMouseUp(event) {
  if (new Date().getTime() - lastMoveTimestamp.getTime() > moveReleaseTimeDelta) {
    deltaX = event.x - startPoint.x;
    deltaY = event.y - startPoint.y;
  }

  mouseDown = false;

  removeListeners(document, EventTypes.MOVE);
  removeListeners(document, EventTypes.END);
}

function projectOnTrackball(touchX, touchY) {
  var mouseOnBall = new THREE.Vector3();
  var windowHalfX = 400,
    windowHalfY = 400;

  mouseOnBall.set(
    clamp(touchX / windowHalfX, -1, 1), clamp(-touchY / windowHalfY, -1, 1),
    0.0
  );

  var length = mouseOnBall.length();

  if (length > 1.0) {
    mouseOnBall.normalize();
  } else {
    mouseOnBall.z = Math.sqrt(1.0 - length * length);
  }

  return mouseOnBall;
}

function rotateMatrix(rotateStart, rotateEnd) {
  var axis = new THREE.Vector3(),
    quaternion = new THREE.Quaternion();

  var angle = Math.acos(rotateStart.dot(rotateEnd) / rotateStart.length() / rotateEnd.length());

  if (angle) {
    axis.crossVectors(rotateStart, rotateEnd).normalize();
    angle *= rotationSpeed;
    quaternion.setFromAxisAngle(axis, angle);
  }
  return quaternion;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var handleRotation = function() {
  rotateEndPoint = projectOnTrackball(deltaX, deltaY);

  var rotateQuaternion = rotateMatrix(rotateStartPoint, rotateEndPoint);
  curQuaternion = group.quaternion;
  curQuaternion.multiplyQuaternions(rotateQuaternion, curQuaternion);
  curQuaternion.normalize();
  group.setRotationFromQuaternion(curQuaternion);

  rotateEndPoint = rotateStartPoint;
};

function init() {
  // Renderer.
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha:true });

  //renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add renderer to page
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 60;
  camera.position.y = 20;
  camera.rotation.x = 25;

  scene = new THREE.Scene();

  // LIGHTS
  ambientLight = new THREE.AmbientLight(0xFAEACD);
  scene.add(ambientLight);

  pointLight = new THREE.PointLight(0xffffff, 1.25, 1000);
  pointLight.position.set(camera.position.x, camera.position.y, camera.position.z);
  //scene.add(pointLight);

  directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(camera.position.x, camera.position.y, camera.position.z);
  scene.add(directionalLight);

 // addGround();
  loadObj();

  window.addEventListener('resize', onWindowResize, false);
  addListeners(document, EventTypes.START);
  
  animate();
}

function loadObj() {
  THREE.ImageUtils.crossOrigin = 'Anonymous';

  group = new THREE.Object3D();
  group.position.y = 20;
  group.rotation.x = 30;
  scene.add(group);

  var manager = new THREE.LoadingManager();
  manager.onProgress = function(item, loaded, total) {};

  var texture = new THREE.Texture();
  var normal = new THREE.Texture();

  var onProgress = function(xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      //console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
  };

  var onError = function(xhr) {};
  var chipMapPath = "https://www.dropbox.com/s/gmvitn23ow9moiz/chip_C_2k.jpg?dl=1";
  var chipNormalMapPath = "https://www.dropbox.com/s/r9ge66ddotjgzbg/chip_N_2k.jpg?dl=1";
  
	var chipMap = THREE.ImageUtils.loadTexture(chipMapPath);
  var chipNormalMap = THREE.ImageUtils.loadTexture(chipNormalMapPath);
  
  var material = new THREE.MeshPhongMaterial({
    color: 0xdddddd,
    map: chipMap,
    normalMap: chipNormalMap
  });
  var hotmaterial = new THREE.MeshPhongMaterial({
    color: 0xE4A54D,
    map: chipMap,
    normalMap: chipNormalMap
  });

  // model
  var loader = new THREE.OBJLoader(manager);
  loader.load('https://www.dropbox.com/s/y3xz5srnvvo949t/dorito_3.7k_faces.obj?dl=1', function(object) {

    object.traverse(function(child) {

      if (child instanceof THREE.Mesh) {
        child.material = material;
        mesh = child;
      }
    });

    // step through each square
    for (var i = 0, len = 360 / degreesPerStep; i < len; i++) {

      // calculate the given point on a circle diameter
      x = radius * Math.cos(radians * i);
      y = radius * Math.sin(radians * i);

      // calculate angle between point on diameter and center point
      dx = x; // - center.x;
      dy = y; // - center.y;
      angleBetween = Math.atan2(dy, dx);
      var clone = mesh.clone();
      clone.rotation.x = 90;
      clone.rotation.y = angleBetween;
      clone.rotation.z = i * 10;
      clone.position.x = x / 2;
      clone.position.y = y / 2;
      if (Math.random() > .8) {
        clone.material = hotmaterial;
      }
      group.add(clone);

    }
  }, onProgress, onError);
}

function addGround() {
  var groundMat = new THREE.MeshLambertMaterial({
    color: 0x111111,
    opacity: 1.0,
    transparent: false
  });
  var groundGeo = new THREE.PlaneGeometry(400, 400);
  var ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
}

function animate() {
  requestAnimationFrame(animate);
  if (group) {
    group.rotation.z += 0.005;

    for (var i = 0; i < group.children.length; i++) {
      group.children[i].rotation.z += .02;
    }    
  }
  
 // camera.rotation.x += .001;
  
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// let's go!
init();