import Phaser from "phaser";
import { v4 as uuidv4 } from 'uuid';

export default class Entity extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, textureKey, type){
        super(scene, x, y, textureKey);
        
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0)

        this.textureKey = textureKey;
        this.type = type;
        this.isDead = false;
        this.uuid = uuidv4();

        console.log("entity: " + this.uuid + " created");
    }

    explode(){
        if(!this.isDead){
            this.isDead = true;
            this.destroy();
            console.log("entity: " + this.uuid + " destroyed");
        }
    }
}