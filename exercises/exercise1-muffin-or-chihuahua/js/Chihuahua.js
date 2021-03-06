class Chihuahua extends Muffin {
  constructor(x,y,image){
    super(x,y,image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update(){
    super.update();

    if(this.found){
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed(){
    if (mouseX > this.x - this.image.width/2 &&
        mouseX < this.x + this.image.width/2 &&
        mouseY > this.y - this.image.height/2 &&
        mouseY < this.y + this.image.height/2){
          if(!this.found){
            num_chihuahuasLeft -=1;
          }
          this.found = true;
          barkSFX.play();
          clickedDog = true;
        }else{
          console.log(`notDOG`);
        }
  }

}
