"use strict";

//speech recognition
//everything user says will be displayed on the screen (with a cool animation)

let word;
let speech;
let wordX = 400; //position to lyrics
let wordY = 600; //position to lyrics
let wordColor = {
  r : 30,
  g : 30,
  b : 30,
};
let rot = -5; //rotation
let rotAngle = 0;
let rotChange = 1;
let move = 0;
let moveChange = 1;

function setupMic(){
  if(annyang){
    let commands = {
      '*word':detectSinging,
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function detectSinging(word){
  speech = word;
  console.log(speech);

  wordX = random(300,600);
  wordY = random (550,700);
  wordColor.r = random(0,255);
  wordColor.g = random(0,255);
  wordColor.b = random(0,255);
}

function displayLyrics(){

  rot = rot + 0.3*rotChange;

  if (frameCount % 30 == 0){
    rotChange = rotChange * -1;
  }

  move = move + 1*moveChange;
  if (frameCount % 120 == 0){
    moveChange = moveChange * -1;
  }

  push();
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  translate(wordX-move,wordY-move);
  rotate( radians(rot) );
  fill(wordColor.r,wordColor.g,wordColor.b);
  text(speech,0,0);
  blendMode(ADD);
  rotate( radians(rot*1.02) );
  fill(wordColor.r,255-wordColor.g,255-wordColor.b);
  text(speech,2,2);
  pop();
}
