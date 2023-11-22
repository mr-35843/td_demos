import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
	constructor() {
		super('BootScene')
		var controls;
	}

	preload()
	{
		//load/cache tileset images
		this.load.image('build_atlas', 'assets/tilesets/build_atlas.png');
		this.load.image('lpc_forest_tiles','assets/tilesets/lpc_forest_tiles.png');
		this.load.image('terrain_01','assets/tilesets/terrain.png');
		this.load.image('terrain_atlas','assets/tilesets/terrain_atlas.png');
		// load/cache maps
		this.load.tilemapTiledJSON('overworld','maps/demo_nesdorn.json');
		// load/cache sprites
	}	

	create(){
		this.scene.start("Build0002");
	}
}
