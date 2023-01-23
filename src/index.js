import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 0.2;
camera.position.x -= 0.5;
camera.position.y -= 0.3;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

var verticesOfCube = [
  // -0.25343865156173706 , -0.17440146207809448 , -0.41030678153038025 ,
  -0.2229917049407959,
  -0.3397234380245209,
  -0.4543880224227905,
  -0.3330308198928833,
  -0.0587635412812233,
  -0.4677548408508301,
  -0.16214537620544434,
  -0.26975566148757935,
  -0.41128385066986084,
  -0.27218449115753174,
  0.011204227805137634,
  -0.4246506690979004,
  -0.23469281196594238,
  -0.3600071370601654,
  -0.3959629535675049,
  -0.3447319269180298,
  -0.07904727011919022,
  -0.40932971239089966,
  -0.17384648323059082,
  -0.29003939032554626,
  -0.3528587222099304,
  -0.2838855981826782,
  -0.009079501032829285,
  -0.36622554063796997
];

var indicesOfFaces = [
  2,
  1,
  0,
  0,
  3,
  2,
  0,
  4,
  7,
  7,
  3,
  0,
  0,
  1,
  5,
  5,
  4,
  0,
  1,
  2,
  6,
  6,
  5,
  1,
  2,
  3,
  7,
  7,
  6,
  2,
  4,
  5,
  6,
  6,
  7,
  4
];

var geometry = new THREE.PolyhedronGeometry(
  verticesOfCube,
  indicesOfFaces,
  1,
  0
);
var mesh = new THREE.Mesh(
  geometry,
  new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, wireframe: true })
);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
