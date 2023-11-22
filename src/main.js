import Phaser from 'phaser'
import { v4 as uuidv4 } from 'uuid';
import BootScene from './scenes/BootScene'
import Build0002 from './scenes/Build0002';

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var zoom = 1; //default.

if(windowWidth > 720){
	zoom = 2
	windowHeight = windowHeight / zoom;
	windowWidth = windowWidth / zoom;
}
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
