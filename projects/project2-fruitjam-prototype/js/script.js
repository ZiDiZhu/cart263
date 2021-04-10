"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy

commented tofix with things that need to be fixed

also i want to change to not replaying clips from the start to resume playing when switch
*/

function setup() {
  createCanvas(windowWidth, windowHeight);

  setupButtons();
  setupInstruments();
}

function draw() {
  background(200);
  //updateAnim(drum);
  updateAnim(drum);
  updateAnim(bass);
  updateAnim(piano);
  updateAnim(string);

  updateDisplay();
}

//stop all loops
function stopAll() {

  drum.clip[drum.clipnbr].stop();
  bass.clip[bass.clipnbr].stop();
  piano.clip[piano.clipnbr].stop();
  string.clip[string.clipnbr].stop();
}

//switch all instruments.isPlaying to false
function turnAllOff() {
  drum.isPlaying = false;
  bass.isPlaying = false;
  piano.isPlaying = false;
  string.isPlaying = false;
  stopAll();
}

//switch all instruments.isPlaying to true
function turnAllOn() {
  drum.isPlaying = true;
  bass.isPlaying = true;
  piano.isPlaying = true;
  string.isPlaying = true;
  playAll();
}

//tofix
//change to parametered functions
function playAll(){
  stopAll();

  if(drum.isPlaying){
    resetGif(drum);
    drum.clip[drum.clipnbr].loop();
  }
  if(bass.isPlaying){
    resetGif(bass);
    bass.clip[bass.clipnbr].loop();
  }
  if(piano.isPlaying)
    piano.clip[piano.clipnbr].loop();
  if(string.isPlaying)
    string.clip[string.clipnbr].loop();

  updateDisplay();
}

//change the clip of the instrument
function changeClip(instrument) {
  stopAll();

  instrument.clipnbr++;
  if(instrument.clipnbr >= instrument.clip.length){
    instrument.clipnbr = 0;
  }
  playAll();
}

//turn instrument on or off
function toggleOnOff(instrument) {
  if(instrument.isPlaying)
    instrument.isPlaying = false;
  else
    instrument.isPlaying = true;
  playAll();
}

//change the fruit
function changeSound(instrument) {

  stopAll();

  //change sound of drum
  if(instrument === drum){
    drum.clip.length = [];
    drum.avatar.length = [];
    if(drum.sound ===`melon`){
      //replace clips
      drum.clip.push.apply(drum.clip,pumpkin.clip);
      drum.avatar.push.apply(drum.avatar,pumpkin.avatar);
      drum.sound = `pumpkin`;
    }else if (drum.sound === `pumpkin`){
      drum.clip.push.apply(drum.clip,melon.clip);
      drum.avatar.push.apply(drum.avatar,melon.avatar);
      drum.sound = `melon`;
    }
  }

  //change the sound of bass
  else if (instrument === bass){

  }

  //change the sound of piano
  else if (instrument === piano){

  }

  //change the sound of string
  else if (instrument === string){

  }

  playAll();
}
