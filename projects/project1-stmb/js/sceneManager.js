"use strict";

let currentScene; //opening; scene1 - scene10, ending
let currentState; //inspection; cutscene; title


function setup() {

  createCanvas(800,600);
  currentScene = `opening`;
  currentState = `title`;
  displayOpeningScene();
  bgm_mystery.loop();

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
    image(item_remote_broken.img,item_remote.x,item_remote.y);
  }else{
    image(item_remote.img,item_remote.x,item_remote.y);
  }

  pop();

  //quick delay fix
  if(currentScene === `scene1`){
    generateDialogue(cutsceneDialogues.scene1Dialogues);
    currentdialogueNbr ++;
  }

}
