"use strict";

let currentScene; //opening; scene1 - scene10, ending
let currentState; //exploration; cutscene; title

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
  pop();
  //title image
  image(titleImg,200,200);
  //start button
  button_Start = createButton ('START');
  button_Start.position(300,500);
  button_Start.mousePressed(displayScene1);
}

function displayScene1(){
  console.log(`scene1`);
  currentScene = `scene1`;
  currentState = `cutscene`;
  button_Start.remove();
  background(30,120,250);

  image(sce_club_warm,100,100);
}
