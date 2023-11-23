import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import Build0002 from './scenes/Build0002';

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
// @ts-ignore
var screenResolution = document.getElementById("screenResolution").value;
console.log(screenResolution);
var zoom = 1; //default.
const zoomLargeScreenMultiplyer = 1.5;

switch(screenResolution){

	case "720" || 720:
		zoom = zoom * zoomLargeScreenMultiplyer;
		windowHeight = 720 / zoom;
		windowWidth = 1080 / zoom;
		windowWidth = windowWidth * 0.95;
		windowHeight = windowHeight * 0.9;
		break;

	case "360" || 360:
		windowHeight = 360;
		windowWidth = 480;
		break;

	default:
		zoom = zoom * zoomLargeScreenMultiplyer;
			windowHeight = windowHeight / zoom;
			windowWidth = windowWidth / zoom;
			windowWidth = windowWidth * 0.95;
			windowHeight = windowHeight * 0.9;
		break;
}

console.log(windowHeight);
console.log(windowWidth);
//DEBUG:
//console.log(windowWidth + " width.");
//console.log(windowHeight + " height.");

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: windowWidth,
	height: windowHeight,
	zoom: zoom,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
		
	},
	scene: [BootScene, Build0002],
}

export default new Phaser.Game(config)
