"use strict";

/**
Links Dialogue with sprite and color
*/

let dialogues = [];//array of dialogues
let currentdialogueNbr = 0; //indicates which dialogue it's displaying at the moment

let img;

let dialogueData = undefined;

function preload() {
  dialogueData = loadJSON('data/dialogues.json');
}


function setup() {
  createCanvas(800,600);
  background(20);
}


function mousePressed() {
  background(20);
 generateDialogue();
 displaydialogue();
 currentdialogueNbr ++;
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
    img = loadImage(dialogueData.dialogues[i].sprite);
    let dialogue = createDialogue(dialogueData.dialogues[i].chara,img,color(dialogueData.dialogues[i].color),dialogueData.dialogues[i].sentence);
    dialogues.push(dialogue);
  }
}

function displaydialogue(){

  push();
  textSize(24);
  textAlign(CENTER);
  fill(dialogues[currentdialogueNbr].textColor);
  text(`${dialogues[currentdialogueNbr].sentence}`, 100,100);
  pop();

  image(img,200,200);
}