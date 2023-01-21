// Get class references
import {Application, Sprite, Container, lights} from 'pixi.js';
import {Layer, Stage} from '@pixi/layers';
import {diffuseGroup, normalGroup, lightGroup, PointLight} from '@pixi/lights';

// Create new application
const app = new Application({
    backgroundColor: 0x000000, // Black is required!
    width: 800,
    height: 600
});
document.body.appendChild(app.view);

// Use the pixi-layers Stage instead of default Container
app.stage = new Stage();

// Add the background diffuse color
const diffuse = Sprite.fromImage('images/BGTextureTest.jpg');
diffuse.parentGroup = diffuseGroup;

// Add the background normal map
const normals = Sprite.fromImage('images/BGTextureNORM.jpg');
normals.parentGroup = normalGroup;

// Create the point light
const light = new PointLight(0xffffff, 1);
light.x = app.screen.width / 2;
light.y = app.screen.height / 2;

// Create a background container 
const background = new Container();
background.addChild(
    normals,
    diffuse,
    light
);

app.stage.addChild(
    // put all layers for deferred rendering of normals
    new Layer(diffuseGroup),
    new Layer(normalGroup),
    new Layer(lightGroup),
    // Add the lights and images
    background
);