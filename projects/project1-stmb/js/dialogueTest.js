"use strict";

/**
Links Dialogue with sprite and color
*/

let dialogues = [];//array of dialogues
let currentdialogueNbr = 0; //indicates which dialogue it's displaying at the moment

let img = [];

let tColor; //textColor

let dialogueData = undefined;

let currentItem; //
let inItemDialogue = false;

//checks if item is investigated
let itemChecklist = {
  acRemote_Checked: false,
  penpen_Checked: false,
  ac_Checked: false,
  pictureBoard_Checked: false,
  scene1Checklist :0
}

function mousePressed() {
  //console.log(`${currentState}`);
  //click anywhere to start
  if(currentState === `title`){
    displayScene1();
  }
  //goes through dialogues
  else if(currentState === `cutscene`){
    generateDialogue(cutsceneDialogues.scene1Dialogues);
    currentdialogueNbr ++;
  }else if (currentState === `inspection`){
    if( currentItem === `acRemote`){
      generateDialogue(itemDialogue.acRemote_dialogues);
      currentdialogueNbr ++;
      currentItem = `acRemote`;
    }else if (currentItem === `ac`){
      generateDialogue(itemDialogue.Air_Conditioner_dialogues);
      currentdialogueNbr ++;
      currentItem = `ac`;
    }else if (currentItem === `penpen`){
      generateDialogue(itemDialogue.penPen_dialogues);
      currentdialogueNbr ++;
      currentItem = `penpen`;
    }else if (currentItem === `pictureBoard`){
      generateDialogue(itemDialogue.Pictures_Board_dialogues);
      currentdialogueNbr ++;
      currentItem = `pictureBoard`;
    }
    checkIfNextScene();
  }
}

function checkIfNextScene (){
  //checks if player has gone through all the dialogues
  if(currentScene === `scene1`){
    displayItemsLeft(itemChecklist.scene1Checklist);
    if(itemChecklist.scene1Checklist >=4){
      //change scene
    }
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
function generateDialogue(dialogueData){

  for(let i = 0; i < dialogueData.length; i++){

    //changes text color depending on character
    if(dialogueData[i].chara === "Haru"){
      tColor = color('yellow');
    }else if(dialogueData[i].chara === "Soga"){
      tColor = color('red');
    }else if(dialogueData[i].chara === "Ishi"){
      tColor = color('green');
    }else if(dialogueData[i].chara === "Niimi"){
      tColor = color('purple');
    }else if(dialogueData[i].chara === "Inspection"){
      tColor = color('white');
    }else{
      tColor = color('white');
    }

    //reads which character dialogue sprite to display
    //..maybe should've simplified the repetition here
    if(dialogueData[i].sprite ==="haru1"){
      img[i] = chr_haru_1;
    }else if(dialogueData[i].sprite ==="haru2"){
      img[i] = chr_haru_2;
    }else if(dialogueData[i].sprite ==="haru3"){
      img[i] = chr_haru_3;
    }else if(dialogueData[i].sprite ==="soga1"){
      img[i] = chr_soga_1;
    }else if(dialogueData[i].sprite ==="ishi1"){
      img[i] = chr_ishi_1;
    }else if(dialogueData[i].sprite ==="ishi2"){
      img[i] = chr_ishi_2;
    }else if(dialogueData[i].sprite ==="ishi3"){
      img[i] = chr_ishi_3;
    }else if(dialogueData[i].sprite ==="niimi1"){
      img[i] = chr_niimi_1;
    }else{

    }
    let dialogue = createDialogue(dialogueData[i].chara,img,tColor,dialogueData[i].sentence);
    dialogues.push(dialogue);
  }

  //check if at the end of dialogues
  if(currentdialogueNbr >= dialogueData.length){
    currentdialogueNbr = 0;
    dialogues = [];
    if(currentScene === `scene1`){
      currentState = `inspection`;
    }
    if (currentState === `inspection`){
      if (currentItem ===`acRemote`){
        itemChecklist.acRemote_Checked = true;
        itemChecklist.scene1Checklist ++;
      }else if (currentItem ===`ac`){
        itemChecklist.ac_Checked = true;
        itemChecklist.scene1Checklist ++;
      }else if (currentItem ===`penpen`){
        itemChecklist.penpen_Checked = true;
        itemChecklist.scene1Checklist ++;
      }else if (currentItem ===`pictureBoard`){
        itemChecklist.pictureBoard_Checked = true;
        itemChecklist.scene1Checklist ++;
      }
      currentItem = '';
      inItemDialogue = false;
    }
  }

  displaydialogue();
}

function displaydialogue(){

  //dialoguebox
  push();
  fill(120);
  rectMode(LEFT);
  rect(0,500,800,100);
  pop();

  //display current character dialogue
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

function displayItemsLeft(sceneItems){
  push();
  fill(120);
  rectMode(LEFT);
  rect(0,0,800,50);
  pop();
  text(`items inspected: ${sceneItems} / 4`,20,20);
}
