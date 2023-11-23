import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import Build0002 from './scenes/Build0002';
import SettingsScreenResolution from './middleware/settings/ScreenResolution';

let appSettingsResolution = new SettingsScreenResolution();








const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: appSettingsResolution.windowWidth,
	height: appSettingsResolution.windowHeight,
	zoom: appSettingsResolution.zoom,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
		
	},
	scene: [BootScene, Build0002],
}

export default new Phaser.Game(config)
