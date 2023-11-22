import Phaser from 'phaser'

import BootScene from './scenes/BootScene'

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var zoom = 1; //default.

if(windowHeight > 400){
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
	scene: [BootScene],
}

export default new Phaser.Game(config)
