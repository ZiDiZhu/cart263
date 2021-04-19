"use strict";

let synth;

function setupSynth(){
  synth = new p5.PolySynth();
  userStartAudio();
}

function keyPressed(){

//A - K on keyboard
  if(keyCode === 65){
    playMusic(`c4`);
  }else if (keyCode === 83){
    playMusic(`d4`);
  }else if (keyCode === 68){
    playMusic(`e4`);
  }else if (keyCode === 70){
    playMusic(`f4`);
  }else if (keyCode === 71){
    playMusic(`g4`);
  }else if (keyCode === 72){
    playMusic(`a5`);
  }else if (keyCode === 74){
    playMusic(`b5`);
  }else if (keyCode === 75){
    playMusic(`c5`);
  }
}

function playMusic(note){
  synth.play(note,1,0,0.1);
}