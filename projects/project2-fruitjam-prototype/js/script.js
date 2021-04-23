"use strict";

/**
Fruit Jam (Demo)_Main Script
Zi Di Zhu

A musical toy

To change: fix the synching issue

*/

function preload() {

  loadAudioClips();
  loadFruitsAvatars();

  //environment assets
  bgbox = loadImage('assets/png/bgbox.png');
  bgfloor = loadImage('assets/png/bgcheckeredfloor.png');
  keyboardInstruction = loadImage('assets/png/instruction.PNG');
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  setupButtons();
  setupInstruments();
  setupSynth();

  setupMic();

  //startConfetti();
}

function draw() {

  background(120,120,170);

  updateDisplay();
  updateAnim(drum);
  updateAnim(bass);
  updateAnim(piano);
  updateAnim(string);

  displayConfetti();

  displayLyrics();

}

//keyboard shortcuts
function shortCuts(){
  turnAllOff();
  if (keyCode === 49){
    drum.isPlaying = true;
    console.log(`aaa`);
  }else if (keyCode ===50){
    bass.isPlaying = true;
  }else if (keyCode ===51){
    piano.isPlaying = true;
  }else if (keyCode ===52){
    string.isPlaying = true;
  }
  console.log(`aaa`);
  playAll();
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
  button_playall.style('filter', 'none');
  stopAll();
}

function toggleHelp(){
  if(isShowingHelp){
    btn_help.style('filter', 'none');
    isShowingHelp = false;
  }else if(!isShowingHelp){
    btn_help.style('filter', `sepia(100%) saturate(500%)`);
    playAll();
    isShowingHelp = true;
  }
}

//switch all instruments.isPlaying to true
function turnAllOn() {
  drum.isPlaying = true;
  bass.isPlaying = true;
  piano.isPlaying = true;
  string.isPlaying = true;
  //highlights play button
  button_playall.style('filter', `sepia(100%) saturate(500%)`);
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
  if(piano.isPlaying){
    piano.clip[piano.clipnbr].loop();
  }
  if(string.isPlaying){
    string.clip[string.clipnbr].loop();
  }

  if(piano.isPlaying && bass.isPlaying && drum.isPlaying && string.isPlaying && confettiPlaying ===false){
    startConfetti();
    confettiPlaying = true; //prevent retrigger
  }

  //updateDisplay();
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
  if(instrument.isPlaying){
    instrument.isPlaying = false;
    button_playall.style('filter', `none`);
  }
  else{
    instrument.isPlaying = true;
  }
  playAll();
}

//change the fruit
function changeSound(instrument) {

  stopAll();

  instrument.clip.length = [];
  instrument.avatar.length = [];

  //change sound of drum
  if(instrument === drum){

    if(instrument.sound ===`melon`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,pumpkin.clip);
      instrument.avatar.push.apply(instrument.avatar,pumpkin.avatar);
      instrument.idleAvatar = melon.idle;
      instrument.sound = `pumpkin`;
    }else if (instrument.sound === `pumpkin`){
      instrument.clip.push.apply(instrument.clip,melon.clip);
      instrument.avatar.push.apply(instrument.avatar,melon.avatar);
      instrument.idleAvatar = pumpkin.idle;
      instrument.sound = `melon`;
    }
  }

  //change the sound of bass
  else if (instrument === bass){

    if(instrument.sound ===`banana`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,avocado.clip);
      instrument.avatar.push.apply(instrument.avatar,avocado.avatar);
      instrument.idleAvatar = banana.idle;
      instrument.sound = `avocado`;
    }else if (instrument.sound === `avocado`){
      instrument.clip.push.apply(instrument.clip,banana.clip);
      instrument.avatar.push.apply(instrument.avatar,banana.avatar);
      instrument.idleAvatar = avocado.idle;
      instrument.sound = `banana`;
    }
  }

  //change the sound of piano
  else if (instrument === piano){

    if(instrument.sound ===`strawbry`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,bluebry.clip);
      instrument.avatar.push.apply(instrument.avatar,bluebry.avatar);
      instrument.idleAvatar = strawbry.idle;
      instrument.sound = `bluebry`;
    }else if (instrument.sound === `bluebry`){
      instrument.clip.push.apply(instrument.clip,strawbry.clip);
      instrument.avatar.push.apply(instrument.avatar,strawbry.avatar);
      instrument.idleAvatar = bluebry.idle;
      instrument.sound = `strawbry`;
    }
  }

  //change the sound of string
  else if (instrument === string){

    if(instrument.sound ===`orange`){
      //replace clips
      instrument.clip.push.apply(instrument.clip,lime.clip);
      instrument.avatar.push.apply(instrument.avatar,lime.avatar);
      instrument.idleAvatar = orange.idle;
      instrument.sound = `lime`;
    }else if (instrument.sound === `lime`){
      instrument.clip.push.apply(instrument.clip,orange.clip);
      instrument.avatar.push.apply(instrument.avatar,orange.avatar);
      instrument.idleAvatar = lime.idle;
      instrument.sound = `orange`;
    }
  }

  playAll();
}
