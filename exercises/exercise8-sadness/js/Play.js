class Play extends Phaser.Scene{
  constructor() {
    super({
      key: `play`
    });
  }

    create(){
      //create avatar
      this.avatar = this.physics.add.sprite(100,100,`avatar`);
      this.avatar.setCollideWorldBounds(true);

      this.cursors = this.input.keyboard.createCursorKeys();

      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      this.berry = this.physics.add.sprite(x,y,`berry`);

      this.spike = this.physics.add.group({
        key: `spike`,
        quantity:80,
        bounceX: 1,
        bounceY:1,
        collideWorldBounds: true,
        dragX: 50,
        dragY: 50
      });
      Phaser.Actions.RandomRectangle(this.spike.getChildren(), this.physics.world.bounds);

      this.physics.add.overlap(this.avatar, this.berry,this.getFed, null, this);
      this.physics.add.collider(this.avatar, this.spike);
      this.physics.add.collider(this.spike, this.spike);
    }

    getFed(avatar,berry){
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      this.berry.setPosition(x,y);
    }

    update(){
      this.movement();
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
          this.physics.velocityFromRotation(this.avatar.rotation, 600, this.avatar.body.acceleration);
      }
      else
      {
          this.avatar.setAcceleration(0);
      }
    }

  }
