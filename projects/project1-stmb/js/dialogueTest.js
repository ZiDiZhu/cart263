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


//checks which item it is inspecting currently and goes though its dialogues
function updateItemDialogue(){
  if(currentItem === `acRemote`){
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

//checks if player has investigated all items
function checkIfNextScene (){

  if(currentScene === `scene1`){
    displayItemsLeft(itemChecklist.scene1Checklist);
    if(itemChecklist.scene1Checklist >=4){
      currentState = `cutscene`;
      currentScene = `scene1Transition_1`;
    }
  }
}


// following: generateDialogue()
function createDialogue(name, sprite, textColor, sentence){

  let dialogue = {
    name: name,
    sprite: sprite,
    textColor: textColor,
    sentence:sentence,
  };

  return dialogue;
}

//checks which color of text and sprite to display and adds the dialogue to the array
function generateDialogue(dialogueData){

  for(let i = 0; i < dialogueData.length; i++){

    //changes text color depending on character
    //this part should be simplified
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

    //scene1 cutscene > inspection
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
      //updates the display of the number of items investigated
      displayItemsLeft(itemChecklist.scene1Checklist);
    }

    // scene1 breaking the remote part
    if (currentScene ===`scene1Transition_1`){
      currentScene = `scene1Transition_2`;
      displayScene1();
    }

  }

  displaydialogue();
}

//displays the dialogue
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
  text(`items inspected: ${sceneItems} /4`,20,20);
}
