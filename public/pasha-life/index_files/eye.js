const gltfLoader = new THREE.GLTFLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')
const _hh = document.location.host;
// Scene
const scene = new THREE.Scene()
const environmentMap = cubeTextureLoader.load([
    'https://'+_hh+'/site/templates/images/px.png',
    'https://'+_hh+'/site/templates/images/nx.png',
    'https://'+_hh+'/site/templates/images/py.png',
    'https://'+_hh+'/site/templates/images/ny.png',
    'https://'+_hh+'/site/templates/images/pz.png',
    'https://'+_hh+'/site/templates/images/nz.png'
])

environmentMap.encoding = THREE.sRGBEncoding
scene.environment = environmentMap

const group = new THREE.Group();
const textureLoader = new THREE.TextureLoader()
const geometry = new THREE.SphereGeometry( 1, 100, 100 );
const material = new THREE.MeshPhysicalMaterial({
  color: "#5D5DFF",
  roughness: 0,
  reflectivity: 0.8
});
const sphere = new THREE.Mesh( geometry, material );
group.add(sphere);

gltfLoader.load(
    'https://'+_hh+'/site/templates/models/logo.gltf',
    (gltf) =>
    {
        gltf.scene.scale.set(0.13, 0.13, 0.13)
        gltf.scene.position.z = 1.05
        gltf.scene.rotation.z = -Math.PI * 0.5
        gltf.scene.rotation.y = -Math.PI * 0.5
        group.add(gltf.scene);
        scene.add(group);
    }
)


const ambientLight = new THREE.AmbientLight( "white", 1 ); // soft white light
scene.add(ambientLight);


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 7);
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -3.5);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var pointOfIntersection = new THREE.Vector3();
document.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event){
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  // scene.rotation.y = -mouse.y/2
  // scene.rotation.x = -mouse.x/2
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  group.lookAt(pointOfIntersection);
}

const tick = () =>
{
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
