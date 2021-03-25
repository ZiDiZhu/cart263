class Play extends Phaser.Scene{
  constructor() {
    super({
      key: `play`
    });
  }

    create(){
      //create avatar
      this.avatar = this.physics.add.sprite(50,50,`avatar`);
      this.avatar.setCollideWorldBounds(true);

      scoretxt = this.add.text(0, 0, `score:` + score);
      deathtxt = this.add.text(200, 0, `times fallen:` + timesDied);

      this.sfx_fall = this.sound.add('SFX_fall');
      this.sfx_score = this.sound.add('SFX_score');
      this.sfx_win = this.sound.add('SFX_win');

      this.setPits();

      this.cursors = this.input.keyboard.createCursorKeys();

      this.ball = this.physics.add.group({
        key: `ball`,
        quantity:8,
        bounceX: 1,
        bounceY:1,
        collideWorldBounds: true,
        dragX: 50,
        dragY: 50
      });
      Phaser.Actions.RandomRectangle(this.ball.getChildren(), this.physics.world.bounds);

      this.physics.add.overlap(this.avatar, this.pit,this.gotFallen, null, this);
      this.physics.add.overlap(this.ball, this.pit,this.ballFallInPit, null, this);
      this.physics.add.collider(this.avatar, this.ball);
      this.physics.add.collider(this.ball, this.ball);
    }

    gotFallen(){
      console.log(`you fell`);
      this.avatar.setPosition(50,50);
      this.avatar.setVelocity(0,0);
      this.sfx_fall.play();
      timesDied++;
      // deathtxt.destroy(); this crashes the game
      deathtxt = this.add.text(200, 10*timesDied, `times fallen:` + timesDied);
    }

    ballFallInPit(ball,pit){
      ball.disableBody(true, true);
      score++;
      scoretxt = this.add.text(0, 10*score, `score:` + score);
      this.sfx_score.play();
      if(score >=10){
        let winText = this.add.text(0, 300, `WOW YOU FCKIN WON \n WHAT A MAD LAD`,{ fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
        this.sfx_win.play();
      }
    }

    update(){
      this.movement();
    }

    setPits(){

      this.pit = this.physics.add.group({
        key: "pit",
        repeat: 2,
        setXY: { x: 150, y: 550, stepX: 250}
      });

    }

    movement() {
        if (this.cursors.left.isDown)
      {
          this.avatar.setAngularVelocity(-150);
      }
      else if (this.cursors.right.isDown)
      {
          this.avatar.setAngularVelocity(150);
      }
      else
      {
          this.avatar.setAngularVelocity(0);
      }

      if (this.cursors.up.isDown)
      {
          this.physics.velocityFromRotation(this.avatar.rotation, 400, this.avatar.body.acceleration);
      }
      else
      {
          this.avatar.setAcceleration(0);
      }
    }

  }
