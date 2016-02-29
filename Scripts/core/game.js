/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
var Clock = THREE.Clock;
var FirstPersonControls = THREE.FirstPersonControls;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    var scene = new Scene();
    var renderer;
    var camera;
    var axes;
    var plane;
    var sphere;
    var sphereGeometry;
    var sphereMaterial;
    var ambientLight;
    var spotLight;
    var pointLight;
    var control;
    var gui;
    var tower;
    var towerGeometry;
    var towerMaterial;
    var ground;
    var groundGeometry;
    var groundMaterial;
    var stats;
    var step = 0;
    var clock;
    var firstPersonControls;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        // setup a THREE.JS Clock object
        clock = new Clock();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        //Spotlight
        pointLight = new PointLight(0xFFFFFF);
        pointLight.position.set(-4, 6, -4);
        scene.add(pointLight);
        console.log("Added PointLight to my scene ...");
        //Tower
        towerGeometry = new CubeGeometry(2, 10, 2);
        towerMaterial = new LambertMaterial(0xc9c9c9);
        tower = new Mesh(towerGeometry, towerMaterial);
        tower.position.setY(5);
        scene.add(tower);
        console.log("Added tower to the scene... ");
        //Plane
        groundGeometry = new PlaneGeometry(16, 20);
        groundMaterial = new LambertMaterial({ color: 0xe75d14 });
        ground = new Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -0.5 * Math.PI;
        scene.add(ground);
        console.log("Added burnt ground...");
        //axes helper
        axes = new AxisHelper(20);
        ground.add(axes);
        console.log("Added Axis Helper to scene...");
        // add controls
        gui = new GUI();
        control = new Control(0.05);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        // gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        var delta = clock.getDelta();
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 1000);
        //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.x = 15.;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();

//# sourceMappingURL=game.js.map
