import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer({ 
    
    alpha: true,
    antialias: true,
    autoSize: true

});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement )


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(0, -1.9, 0)
scene.add( cube );



const loader = new FBXLoader()
loader.load('./Switch.fbx', function (FBX)  {
    FBX.scale.set(0.01, 0.01, 0.01)
    FBX.position.set(0, -3, 0)
    FBX.rotation.set(0, -1.5, 0)
    FBX.side = THREE.DoubleSide
    scene.add(FBX)
    var animate = function () {
        requestAnimationFrame( animate );
    
        FBX.position.y = lerp (FBX.position.y, 0, 0.05)
    
        renderer.render( scene, camera );
    };
    
    animate()
    function lerp (start, end, amt){
        return (1-amt)*start+amt*end
      }
})



const pointLight = new THREE.PointLight( 'lightblue', 2, 100 );
pointLight.position.set( 10, 10, 0 );
scene.add( pointLight );
const pointLight2 = new THREE.PointLight( 'lightblue', 2, 100 );
pointLight2.position.set( 0, 10, 10 );
scene.add( pointLight2 );
const pointLight3 = new THREE.PointLight( 'lightblue', 2, 100 );
pointLight3.position.set( 0, 10, -10 );
scene.add( pointLight3 );
const pointLight4 = new THREE.PointLight( 'lightblue', 2, 100 );
pointLight4.position.set( -10, 10, 0 );
scene.add( pointLight4 );


camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate()
