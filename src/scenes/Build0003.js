import Phaser from "phaser";
import BuildInfo from "../middleware/BuildInfo";
import Player from "../characters/Player";


export default class Build0003 extends Phaser.Scene{
    
    constructor() {
		super("Build0003");
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
// Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
camera.setBounds(0, 0, demo_overworld.widthInPixels, demo_overworld.heightInPixels);
this.player = new Player(this, 96, 96, "female01")

// build info
const buildInfo = new BuildInfo(this);

}
	
  
update(time, delta) {
	// Apply the controls to the camera each update tick of the game
	this.controls.update(delta);
  }


}