class Scene2 extends Phaser.Scene {
    constructor() {
      super("Spaceships");
    }
  
    create() {
      this.background = this.add.image(0, 0, "background");
      this.background.setOrigin(0, 0);
      this.background.setScale(1);
  
      this.add.text(config.width/2 - 70, 20, "Storm - Facer", {
        font: "35px Brush Script MT",
        fill: "yellow"
      });
      this.ship1 = this.add.image(50, 50, "ship");
      this.ship1.setScale(6);
      this.ship1.setOrigin(0);
      this.ship1.flipY = true;
      //this.ship1.background("Black");
      this.ship1.angle = 0;
      //this.input.keyboard.once('keydown_SPACE', this.createSprite, this);
      //this.input.once('pointerdown', this.start, this);
      
    }
    
    moveShip(ship,speed){
        ship.y += speed;
    }
   
    
    
    //createSprite(){}

    
    update(){
        this.moveShip(this.ship1, 0.1);
    }
  }
