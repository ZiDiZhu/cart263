"use strict";

let currentScene; //opening; scene1 - scene10, ending
let currentState; //inspection; cutscene; title

function setup() {

  createCanvas(800,600);
  currentScene = `opening`;
  currentState = `title`;
  displayOpeningScene();

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

function displayScene1(){
  console.log(`scene1`);
  currentScene = `scene1`;
  currentState = `cutscene`;
  background(30,120,250);
  //room background
  image(sce_club_warm,100,100);
  //characters
  image(_chr_niimi,260,300);
  image(_chr_ishi,360,280);
  image(_chr_haru,360,330);
  image(_chr_soga,200,180);

  //interactable items
  push();
  imageMode(CENTER);
  image(item_remote.img,item_remote.x,item_remote.y);
  image(item_ac.img,item_ac.x,item_ac.y);
  image(item_penpen.img,item_penpen.x,item_penpen.y);
  image(item_pictureBoard.img,item_pictureBoard.x,item_pictureBoard.y);

  pop();

  generateDialogue(cutsceneDialogues.scene1Dialogues);
  currentdialogueNbr ++;

}
