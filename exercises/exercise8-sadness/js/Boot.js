class Boot extends Phaser.Scene{
  constructor() {
    super({
      key: `boot`
    });
  }

  preload(){
    //load assets

    this.load.image(`avatar`,`assets/images/avatar.png`);
    this.load.image(`spike`,`assets/images/spike.png`);
    this.load.image(`pit`,`assets/images/pit.png`);
    this.load.image(`ball`,`assets/images/ball.png`);
    this.load.audio(`SFX_fall`,`assets/sounds/death.wav`);
    this.load.audio(`SFX_score`,`assets/sounds/score.wav`);
    this.load.audio(`SFX_win`,`assets/sounds/win.wav`);

    this.load.on(`complete`, () =>{
      this.scene.start(`play`);
    });
  }

    create() {

    }

    update() {

    }
  }
