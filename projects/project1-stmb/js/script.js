"use strict";

/**
Summer Time Machine Blues
Zi Di

This is a template. You must fill in the title,
author, and this description to match your project!
*/


function draw() {
  //check if mouse is on item
  if(currentState ===`inspection`){
    //calculates the distance between mouse and items
    let distRemote = dist(mouseX,mouseY,item_remote.x,item_remote.y);
    let distAc = dist(mouseX,mouseY,item_ac.x,item_ac.y);
    let distpenpen = dist(mouseX,mouseY,item_penpen.x,item_penpen.y);
    let distPictureBoard = dist(mouseX,mouseY,item_pictureBoard.x,item_pictureBoard.y);
    if (distRemote <=20
      && inItemDialogue === false
      && itemChecklist.acRemote_Checked ===false){
      cursor(CROSS);
      currentItem = `acRemote`;
      if (mouseIsPressed){
        inItemDialogue = true;
      }
    }else if(distAc <=40
      && inItemDialogue === false
      && itemChecklist.ac_Checked ===false) {
      cursor(CROSS);
      currentItem = `ac`;
      if (mouseIsPressed){
        inItemDialogue = true;
      }
    }else if(distpenpen <= 30
      && inItemDialogue === false
      && itemChecklist.penpen_Checked ===false){
      cursor(CROSS);
      currentItem = `penpen`;
      if (mouseIsPressed){
        inItemDialogue = true;
      }
    }else if(distPictureBoard <= 40
      && inItemDialogue === false
      && itemChecklist.pictureBoard_Checked ===false){
      cursor(CROSS);
      currentItem = `pictureBoard`;
      if (mouseIsPressed){
        inItemDialogue = true;
      }
    }else{
      cursor(ARROW);
    }
  }
}

function mouseClicked() {
  //console.log(`${currentState}`);
  //click anywhere to start
  if(currentState === `title`){
    currentScene = `scene1`;
    bgm_mystery.loop();
    displayScene1();
  }else if(currentState === `cutscene`){
    if (currentScene === `scene1`){
      generateDialogue(cutsceneDialogues.scene1Dialogues);
      currentdialogueNbr ++;
    }else if (currentScene === `scene1Transition_1`){
      generateDialogue(cutsceneDialogues.scene1TransitionDialogues_1);
      currentdialogueNbr ++;
    }else if(currentScene === `scene1Transition_2`){
      generateDialogue(cutsceneDialogues.scene1TransitionDialogues_2);
      currentdialogueNbr ++;
    }else if (currentScene === `scene2`){
      generateDialogue(cutsceneDialogues.scene2Dialogues);
      currentdialogueNbr ++;
    }
  }else if (currentState === `inspection`){
    updateItemDialogue();
  }
}
