class Boot extends Phaser.Scene{
  constructor() {
    super({
      key: `boot`
    });
  }

  preload(){
    //load assets

    this.load.image(`avatar`,`assets/images/avatar.png`);
    this.load.image(`berry`,`assets/images/berry.png`);
    this.load.image(`spike`,`assets/images/spike.png`);

    this.load.on(`complete`, () =>{
      this.scene.start(`play`);
    });
  }

    create() {

    }

    update() {

    }
  }
