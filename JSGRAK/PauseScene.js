class PauseScene extends Phaser.Scene {
    constructor() {
      super("Pause");
    }
  
    preload(){
      this.load.image("background", "/assets/back.webp");
      //this.load.image("","");
      this.load.image("colors","/assets/images/colors.png");
      //this.load.image("back","/assets/image");
      //this.load.image("woodenback","/assets/images/");
      //this.load.image("ship3","/assets/images/");
      //this.load.image("ship2","/assets/images/");
      this.load.image("ship", "/assets/images/ship.png");
    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      //this.scene.start("Spaceships");
      this.input.keyboard.once('keydown_SPACE', this.start, this);
      this.input.once('pointerdown', this.start, this);
    }
    start(){
      
    }
  }