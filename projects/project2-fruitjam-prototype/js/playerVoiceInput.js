"use strict";

//speech recognition
//everything user says will be displayed on the screen (with a cool animation)

let word;
let speech;
let speechtimer; //timer for lyrics to fly off screen
let displayingLyrics = false;
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

//detects when the user says a sentence
function detectSinging(word){
  speechtimer = 0;
  move = 0;
  speech = word;
  let wordX = 400; //position to lyrics
  let wordY = 600;
  displayingLyrics = true;
  console.log(speech);

  wordX = random(300,600);
  wordY = random (550,700);
  wordColor.r = random(0,255);
  wordColor.g = random(0,255);
  wordColor.b = random(0,255);
}

function displayLyrics(){

  rot = rot + 0.3*rotChange;

  speechtimer++;
  if(speechtimer % 200 == 0){
    displayingLyrics = false;
  }

  if (frameCount % 30 == 0){
    rotChange = rotChange * -1;
  }

  if (frameCount % 120 == 0){
    moveChange = moveChange * -1;//bring it back
  }

  if (displayingLyrics){
    move = move + 1*moveChange;
  }else{
    move = move + 8;
  }

  push();
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  translate(wordX-move,wordY-move);
  rotate( radians(rot) );
  fill(wordColor.r,wordColor.g,wordColor.b);
  text(speech,0,0,400,200);
  blendMode(ADD);
  rotate( radians(rot*1.01) );
  fill(wordColor.r,255-wordColor.g,255-wordColor.b);
  text(speech,2,2,400,200);
  pop();
}
