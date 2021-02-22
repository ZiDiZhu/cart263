"use strict";

let currentScene; //opening; scene1 - scene10, ending
let currentState; //inspection; cutscene; title


function setup() {

  createCanvas(800,600);
  currentScene = `opening`;
  currentState = `title`;
  displayOpeningScene();
  //displayScene2();
}

function displayOpeningScene(){
  //blue background
  background(30,120,250);
  //game title
  push();
  textSize(32);
  fill(220);
  text(`SUMMER TIME MACHINE BLUES`, 100,100);
  textSize(22);
  text(`Click to Start`,300,550);
  pop();
  //title image
  image(titleImg,200,200);
}

//display the sprites
function displayScene1(){
  //console.log(`scene1`);
  currentState = `cutscene`;
  background(30,120,250);
  //room background
  image(sce_club_warm,100,100);
  //characters
  image(chr_niimi,260,300);
  image(chr_ishi,360,280);
  image(chr_haru,360,330);
  image(chr_soga,200,180);

  //interactable items
  push();
  imageMode(CENTER);
  image(item_ac.img,item_ac.x,item_ac.y);
  image(item_penpen.img,item_penpen.x,item_penpen.y);
  image(item_pictureBoard.img,item_pictureBoard.x,item_pictureBoard.y);
  if(currentScene ===`scene1Transition_2`){
    //remote breaking sfx
    sfx_crack.play();
    image(item_remote_broken.img,item_remote.x,item_remote.y);
  }else{
    image(item_remote.img,item_remote.x,item_remote.y);
  }

  pop();

  push();
  textSize(22);
  text(`Click to continue dialogues`,500,490);
  pop();

  //quick delay fix
  if(currentScene === `scene1`){
    generateDialogue(cutsceneDialogues.scene1Dialogues);
    currentdialogueNbr ++;
  }

}

//scene 2 which takes place inn the yard
function displayScene2(){
  console.log(`scene2`);
  background(30,120,250);

  image(sce_yard,50,20);

  image(chr_niimi,260,400);
  image(chr_ishi,460,170);
  image(chr_haru,310,230);
  image(chr_soga,460,250);

  image(item_dump.img,item_dump.x,item_dump.y);
  image(item_kecha.img,item_kecha.x,item_kecha.y);
  image(item_messageBoard.img,item_messageBoard.x,item_messageBoard.y);
}
