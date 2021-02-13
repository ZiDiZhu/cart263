"use strict";

/**
Links Dialogue with sprite and color
*/

let dialogues = [];//array of dialogues
let currentdialogueNbr = 0; //indicates which dialogue it's displaying at the moment

let img = [];

let tColor; //textColor

let dialogueData = undefined;

function mousePressed() {
  //click anywhere to start
  if(currentState === `title`){
    displayScene1();
  }
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

    //changes text color depending on character
    if(dialogueData.dialogues[i].chara === "Haru"){
      tColor = color('yellow');
    }else if(dialogueData.dialogues[i].chara === "Soga"){
      tColor = color('red');
    }else if(dialogueData.dialogues[i].chara === "Ishi"){
      tColor = color('green');
    }else if(dialogueData.dialogues[i].chara === "Niimi"){
      tColor = color('purple');
    }else if(dialogueData.dialogues[i].chara === "Inspection"){
      tColor = color('white');
    }else{

    }

    //reads which character dialogue sprite to display
    if(dialogueData.dialogues[i].sprite ==="haru1"){
      img[i] = chr_haru_1;
    }else if(dialogueData.dialogues[i].sprite ==="soga1"){
      img[i] = chr_soga_1;
    }else if(dialogueData.dialogues[i].sprite ==="ishi1"){
      img[i] = chr_ishi_1;
    }else if(dialogueData.dialogues[i].sprite ==="niimi1"){
      img[i] = chr_niimi_1;
    }else{

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
  text(`${dialogues[currentdialogueNbr].sentence}`, 100,550);//dialogue
  text(`${dialogues[currentdialogueNbr].name} :`,30,525);
  pop();

  //character dialogue sprite
  image(img[currentdialogueNbr],30,530);

}
