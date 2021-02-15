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
    //calculates the distance between mouse and items
    let distRemote = dist(mouseX,mouseY,item_remote.x,item_remote.y);
    let distAc = dist(mouseX,mouseY,item_ac.x,item_ac.y);
    let distpenpen = dist(mouseX,mouseY,item_penpen.x,item_penpen.y);
    let distPictureBoard = dist(mouseX,mouseY,item_pictureBoard.x,item_pictureBoard.y);
    if (distRemote <=20){
      cursor(CROSS);
      if (mouseIsPressed){
        currentItem = `acRemote`;
      }
    }else if(distAc <=40) {
      cursor(CROSS);
      if (mouseIsPressed){
        currentItem = `ac`;
      }
    }else if(distpenpen <= 30){
      cursor(CROSS);
      if (mouseIsPressed){
        currentItem = `penpen`;
      }
    }else if(distPictureBoard <= 40){
      cursor(CROSS);
      if (mouseIsPressed){
        currentItem = `pictureBoard`;
      }
    }else{
      cursor(ARROW);
    }
  }
}
