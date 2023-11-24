import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import Build0002 from './scenes/Build0002';
import SettingsScreenResolution from './middleware/settings/ScreenResolution';

const appName = "app"
const physicsEngine = 'arcade';
const gameWindow = document.getElementById(appName);
var scenes = [BootScene, Build0002];

let restartTriggerSelector = document.getElementById("screenResolution");
restartTriggerSelector.addEventListener("change", ()=>{
	gameWindow.innerHTML = "";
	startGame(appName, physicsEngine, scenes);
})

startGame(appName, physicsEngine, scenes);

function startGame(appName, physicsEngine, scenes){
	let appSettingsResolution = new SettingsScreenResolution();
	const config = {
		type: Phaser.AUTO,
		parent: appName,
		width: appSettingsResolution.windowWidth,
		height: appSettingsResolution.windowHeight,
		zoom: appSettingsResolution.zoom,
		physics: {
			default: physicsEngine,
			arcade: {
				gravity: { y: 0 },
			},
			
		},
		scene: scenes,
	}

	return new Phaser.Game(config);
}

