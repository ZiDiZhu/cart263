"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


function draw() {
  //check if mouse is on item
  if(currentState ===`inspection`){
    let distRemote = dist(mouseX,mouseY,item_remote.x,item_remote.y);
    if (distRemote <=50 && mouseIsPressed){
      //itemDialogue(`acRemote`);
    }
  }
}
