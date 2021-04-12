"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy

commented tofix with things that need to be fixed

also i want to change to not replaying clips from the start to resume playing when switch

TODO: ADD ALL MUSIC CLIPS IN!!!!

*/

function setup() {
  createCanvas(windowWidth, windowHeight);

  setupButtons();
  setupInstruments();
}

function draw() {
  background(200);

  updateDisplay();

  updateAnim(drum);
  updateAnim(bass);
  updateAnim(piano);
  updateAnim(string);
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
  console.log

  instrument.clip.length = [];
  instrument.avatar.length = [];

  //change sound of drum
  if(instrument === drum){

    if(instrument.sound ===`melon`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,pumpkin.clip);
      instrument.avatar.push.apply(instrument.avatar,pumpkin.avatar);
      instrument.sound = `pumpkin`;
    }else if (instrument.sound === `pumpkin`){
      instrument.clip.push.apply(instrument.clip,melon.clip);
      instrument.avatar.push.apply(instrument.avatar,melon.avatar);
      instrument.sound = `melon`;
    }
  }

  //change the sound of bass
  else if (instrument === bass){

    if(instrument.sound ===`banana`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,avocado.clip);
      instrument.avatar.push.apply(instrument.avatar,avocado.avatar);
      instrument.sound = `avocado`;
    }else if (instrument.sound === `avocado`){
      instrument.clip.push.apply(instrument.clip,banana.clip);
      instrument.avatar.push.apply(instrument.avatar,banana.avatar);
      instrument.sound = `banana`;
    }
  }

  //change the sound of piano
  else if (instrument === piano){

    if(instrument.sound ===`strawbry`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,bluebry.clip);
      instrument.avatar.push.apply(instrument.avatar,bluebry.avatar);
      instrument.sound = `bluebry`;
    }else if (instrument.sound === `bluebry`){
      instrument.clip.push.apply(instrument.clip,strawbry.clip);
      instrument.avatar.push.apply(instrument.avatar,strawbry.avatar);
      instrument.sound = `strawbry`;
    }
  }

  //change the sound of string
  else if (instrument === string){

    if(instrument.sound ===`orange`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,lime.clip);
      instrument.avatar.push.apply(instrument.avatar,lime.avatar);
      instrument.sound = `lime`;
    }else if (instrument.sound === `lime`){
      instrument.clip.push.apply(instrument.clip,orange.clip);
      instrument.avatar.push.apply(instrument.avatar,orange.avatar);
      instrument.sound = `orange`;
    }
  }

  playAll();
}
