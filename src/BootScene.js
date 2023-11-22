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
		this.load.image('extra_props_01', 'assets/tilesets/extra_props_01.png');
		this.load.image('house_inside_01', 'assets/tilesets/house_inside.png');
		this.load.image('lpc_forest_tiles','assets/tilesets/lpc_forest_tiles.png');
		this.load.image('room_builder','assets/tilesets/room_builder.png');
		this.load.image('terrain_01','assets/tilesets/terrain.png');
		this.load.image('terrain_atlas','assets/tilesets/terrain_atlas.png');

		// load/cache maps
		this.load.tilemapTiledJSON('overworld','maps/demo_nesdorn.json');
		// load/cache sprites
	}

	create() {
		const demo_overworld = this.make.tilemap({"key": "overworld"});
		const build_atlas =  demo_overworld.addTilesetImage("build_atlas", "build_atlas")
		const lpc_forest_tiles = demo_overworld.addTilesetImage("lpc_forest_tiles","lpc_forest_tiles");
		const terrain_01 = demo_overworld.addTilesetImage("terrain","terrain_01");
		const terrain_atlas = demo_overworld.addTilesetImage("terrain_atlas","terrain_atlas");
		
		const demo_overworld_tileset = 
			[
				build_atlas,
				lpc_forest_tiles,
				terrain_01,
				terrain_atlas
			];
			
			const floor = demo_overworld.createLayer("floor", demo_overworld_tileset, 0, 0);
			const floorTop = demo_overworld.createLayer("floorTop", demo_overworld_tileset, 0 , 0);
			const floorDecoration = demo_overworld.createLayer("floorDecoration", demo_overworld_tileset, 0, 0);
			const world = demo_overworld.createLayer("world", demo_overworld_tileset, 0, 0);
			const worldTop = demo_overworld.createLayer("worldTop", demo_overworld_tileset, 0, 0);

// Phaser supports multiple cameras, but you can access the default camera like this:
const camera = this.cameras.main;

// Set up the arrows to control the camera
const cursors = this.input.keyboard.createCursorKeys();
this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
  camera: camera,
  left: cursors.left,
  right: cursors.right,
  up: cursors.up,
  down: cursors.down,
  speed: 0.5
});

// Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
camera.setBounds(0, 0, demo_overworld.widthInPixels, demo_overworld.heightInPixels);

// Help text that has a "fixed" position on the screen
this.add
  .text(16, 16, "Arrow keys to scroll", {
	font: "18px monospace",
	// @ts-ignore
	fill: "#ffffff",
	padding: { x: 20, y: 10 },
	backgroundColor: "#000000"
  })
  .setScrollFactor(0);
}
	
  
update(time, delta) {
	// Apply the controls to the camera each update tick of the game
	this.controls.update(delta);
  }
}
