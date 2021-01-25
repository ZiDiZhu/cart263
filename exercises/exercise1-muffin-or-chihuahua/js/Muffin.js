//Chihuahuaclass extends for this superclass
//probably should change this class name
class Muffin {
  constructor(x,y,image){
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = 0;
  }

  update(){
    this.display();
  }

  display(){
    push();
    imageMode(CENTER);
    translate(this.x,this.y);
    rotate(this.angle);
    image(this.image,0,0);
    pop();
  }

}
