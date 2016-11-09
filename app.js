"use strict;"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer()

var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshBasicMaterial({color: 0x3a79e0, wireframe: true});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 9;

function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
};

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

render();