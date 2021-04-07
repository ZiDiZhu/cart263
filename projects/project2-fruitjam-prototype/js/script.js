"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy

commented tofix with things that need to be fixed

also i want to change to not replaying clips from the start to resume playing when switch
*/


function draw() {
  background(200);
  //updateAnim(drum);
  updateAnim(drum);
  updateAnim(bass);
  updateAnim(piano);
  updateAnim(string);


  updateDisplay();
}


function stopAll() {

  drum.clip[drum.clipnbr].stop();
  bass.clip[bass.clipnbr].stop();
  piano.clip[piano.clipnbr].stop();
  string.clip[string.clipnbr].stop();

  //updateDisplay();
}

function turnAllOff() {
  drum.isPlaying = false;
  bass.isPlaying = false;
  piano.isPlaying = false;
  string.isPlaying = false;
  stopAll();
}

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

function changeClip(instrument) {
  stopAll();
  //toFix: add the clips in!
  instrument.clipnbr++;
  if(instrument.clipnbr >= instrument.clip.length){
    instrument.clipnbr = 0;
  }
  playAll();
}

function toggleOnOff(instrument) {
  if(instrument.isPlaying)
    instrument.isPlaying = false;
  else
    instrument.isPlaying = true;
  playAll();
}

function changeSound(instrument) {
  drum.clip.length = [];
  drum.clip.push.apply(drum.clip,pumpkin.clip);
  playAll();
}
