"use strict";

let word;
let speech;
let wordX = 400; //position to lyrics
let wordY = 600; //position to lyrics
let wordColor = {
  r : 30,
  g : 30,
  b : 30,
};

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
  push();
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(wordColor.r,wordColor.g,wordColor.b);
  text(speech,wordX,wordY);
  blendMode(ADD);
  fill(wordColor.r,255-wordColor.g,255-wordColor.b);
  text(speech,wordX+2,wordY+2);
  pop();
}
