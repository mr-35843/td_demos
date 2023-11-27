import Entity from "./Entity";

export default class Player extends Entity{
    constructor(scene, x , y, textureKey){
        super(scene, x, y , textureKey, 'Player')
        
        this.textureKey = textureKey;
        this.playerDirection = 'down';       
        const frameRate = 16;
        const anims = scene.anims;

        anims.create({
            key: this.textureKey + "-walk-down-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "walk-down/",
                suffix: ".png",
                start: 3,
                end: 9,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })

          anims.create({
            key: this.textureKey + "-walk-left-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "walk-left/",
                suffix: ".png",
                start: 1,
                end: 9,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })

          anims.create({
            key: textureKey + "-walk-up-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "walk-up/",
                suffix: ".png",
                start: 3,
                end: 9,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })

          anims.create({
            key: textureKey + "-walk-right-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "walk-right/",
                suffix: ".png",
                start: 1,
                end: 9,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })

          anims.create({
            key: textureKey + "-hammer-up-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "hammer-up/",
                suffix: ".png",
                start: 1,
                end: 6,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })

          anims.create({
            key: textureKey + "-hammer-left-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "hammer-left/",
                suffix: ".png",
                start: 1,
                end: 6,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            
            repeat: -1
          })

          anims.create({
            key: textureKey + "-hammer-down-animation",
            frames: anims.generateFrameNames(textureKey, {
                prefix: "hammer-down/",
                suffix: ".png",
                start: 1,
                end: 6,
                zeroPad: 2,
            }),
            frameRate: frameRate,
            repeat: -1
          })
          
      anims.create({
        key: textureKey + "-hammer-right-animation",
        frames: anims.generateFrameNames(textureKey, {
            prefix: "hammer-right/",
            suffix: ".png",
            start: 1,
            end: 6,
            zeroPad: 2,
        }),
        frameRate: frameRate,
        
        repeat: -1
      })

        ////////////////
        //inputs
        const {W, A, S , D, F, SPACE, SHIFT} = Phaser.Input.Keyboard.KeyCodes
        this.keys = scene.input.keyboard.addKeys({
          w: W,
          a: A,
          s: S,
          d: D,
          f: F,
          SPACE: SPACE,
          SHIFT: SHIFT
        })


    }

    update(){
    const {keys}  = this
    const speed =200 
    this.interactive = false;

    // @ts-ignore
    this.body.setVelocity(0, 0);

    if(keys.f.isDown && this.interact === 0 && this.interactive === false){
      this.interact =1
      this.reads = true;
  
     } else {
      this.reads = false;
     }
  
    
    if(keys.a.isDown){
    // @ts-ignore
      this.body.setVelocityX(-speed);
      this.playerDirection = 'left'
    }  
    else if(keys.d.isDown){ // @ts-ignore
      this.body.setVelocityX(speed);
      this.playerDirection = 'right';
    }
    if(keys.w.isDown){ // @ts-ignore
      this.body.setVelocityY(-speed);
      this.playerDirection = 'up';
    }
    else if(keys.s.isDown){ // @ts-ignore
      this.body.setVelocityY(speed);
      this.playerDirection = 'down';
    }
   

    
  
      
    /////////////////////
    //anims
    
    if(keys.SPACE.isDown && this.interact === 0){
      this.interactive = true;
      this.interact = 1;
      

      switch(this.playerDirection){
        case 'up':
        this.anims.play(this.textureKey + '-hammer-up-animation', true);
          break;
        case "left":
          this.anims.play(this.textureKey + '-hammer-left-animation', true);
          break;
        case "down":
          this.anims.play(this.textureKey + '-hammer-down-animation', true);
          break;
        case 'right':
          this.anims.play(this.textureKey + '-hammer-right-animation', true)
          break;

      }
      
    }
    else if(keys.a.isDown){
      this.anims.play(this.textureKey + '-walk-left-animation', true)

    } 
    else if(keys.d.isDown){
      this.anims.play(this.textureKey + '-walk-right-animation', true)
    }
    else if(keys.w.isDown){
      this.anims.play(this.textureKey + '-walk-up-animation', true);
    }
    else if(keys.s.isDown){
      this.anims.play(this.textureKey + '-walk-down-animation', true)
    }
    else {
      this.anims.stopAfterRepeat(0)
     
     
    }
   }

   
}

