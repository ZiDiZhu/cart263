"use strict";

/**
Links Dialogue with sprite and color
*/

let dialogues = [];//array of dialogues
let currentdialogueNbr = 0; //indicates which dialogue it's displaying at the moment

let img;

let tColor; //textColor

let dialogueData = undefined;

function mousePressed() {
  //goes through dialogues
  if(currentState === `cutscene`){
    generateDialogue();
    displaydialogue();
    currentdialogueNbr ++;
  }
}


// creates the dialogue
function createDialogue(name, sprite, textColor, sentence){

  let dialogue = {
    name: name,
    sprite: sprite,
    textColor: textColor,
    sentence:sentence,
  };

  return dialogue;
}


//generates the dialogue from the array of dialogues
function generateDialogue(){
  for(let i = 0; i < dialogueData.dialogues.length; i++){
    if(dialogueData.dialogues[i].chara === "Haru"){
      tColor = color('yellow');
    }else{
      tColor = color('blue');
    }
    if(dialogueData.dialogues[i].sprite ==="haru1"){
      img = chr_haru_1;
    }else{
      img = chr_haru_1;
    }
    let dialogue = createDialogue(dialogueData.dialogues[i].chara,img,tColor,dialogueData.dialogues[i].sentence);
    dialogues.push(dialogue);
  }
}

function displaydialogue(){

  //dialoguebox
  push();
  fill(120);
  rectMode(LEFT);
  rect(0,500,800,100);
  pop();

  //display character dialogue
  push();
  textSize(24);
  textAlign(LEFT);
  fill(dialogues[currentdialogueNbr].textColor);
  text(`${dialogues[currentdialogueNbr].sentence}`, 130,550);//dialogue
  text(`${dialogues[currentdialogueNbr].name} :`,30,525);
  pop();

  //character dialogue sprite
  if(img){
    image(img,30,530);
  }

}
