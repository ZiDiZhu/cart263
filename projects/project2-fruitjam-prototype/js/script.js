"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy
having difficulty making functions with parameters
*/

//change instrument button
let button_drum;
let button_bass;
let button_piano;
let button_string;

//instrument states
let drum = {
  clip :[],
  clipnbr: 0, //clipnumber
  isPlaying: false,
  volume: 1
}

let bass = {
  clip:[],
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let piano = {
  clip:[],
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let string = {
  clip:[],
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let button_stop;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  button_stop = createButton('STOP ALL');
  button_stop.position(600, 50);
  button_stop.mousePressed(stopAll);

  button_stop = createButton('PLAY ALL');
  button_stop.position(300, 50);
  button_stop.mousePressed(turnAllOn);

  button_drum = createButton('CHANGE DRUM');
  button_drum.position(100, 200);
  button_drum.mousePressed(changeDrum);

  button_drum = createButton('DRUM ON/OFF');
  button_drum.position(100, 140);
  button_drum.mousePressed(toggleDrum);

  button_bass = createButton('CHANGE BASS');
  button_bass.position(300, 200);
  button_bass.mousePressed(changeBass);

  button_bass = createButton('BASS ON/OFF');
  button_bass.position(300, 140);
  button_bass.mousePressed(toggleBass);

  button_piano = createButton('CHANGE PIANO');
  button_piano.position(500, 200);
  button_piano.mousePressed(changePiano);

  button_piano = createButton('PIANO ON/OFF');
  button_piano.position(500, 140);
  button_piano.mousePressed(togglePiano);

  button_piano = createButton('CHANGE STRING');
  button_piano.position(700, 200);
  button_piano.mousePressed(changeString);

  button_piano = createButton('STRING ON/OFF');
  button_piano.position(700, 140);
  button_piano.mousePressed(toggleString);
}


function draw() {
  //background(200);
}

//tried to use function with parameter for all instruments, didnt work aaaaaaaaaaa

function stopAll() {
  drum.clip[drum.clipnbr].stop();
  bass.clip[bass.clipnbr].stop();
  piano.clip[piano.clipnbr].stop();
  string.clip[string.clipnbr].stop();
}

function turnAllOn() {
  drum.isPlaying = true;
  bass.isPlaying = true;
  piano.isPlaying = true;
  string.isPlaying = true;
  playAll();
}

function playAll(){
  stopAll();

  if(drum.isPlaying)
    drum.clip[drum.clipnbr].loop();
  if(bass.isPlaying)
    bass.clip[bass.clipnbr].loop();
  if(piano.isPlaying)
    piano.clip[piano.clipnbr].loop();
  if(string.isPlaying)
    string.clip[string.clipnbr].loop();
}

// this does not workkkkk aaaaa
// function changeClip(instrument) {
//   //stopAll();
//   instrument.clipnbr++;
//   if(instrument.clipnbr >= instrument.clip.length){
//     instrument.clipnbr = 0;
//   }
//   instrument.clip[instrument.clipnbr].loop();
// }

function changeDrum() {
  stopAll();
  drum.clipnbr ++;
  if(drum.clipnbr >= drum.clip.length){
    drum.clipnbr = 0;
  }
  console.log('drum' + drum.clipnbr);
  updateDisplay();
  playAll();
}

function changeBass() {
  stopAll();
  bass.clipnbr ++;
  if(bass.clipnbr >= bass.clip.length){
    bass.clipnbr = 0;
  }
  console.log('bass' + bass.clipnbr);
  updateDisplay();
  playAll();
}

function changePiano() {
  stopAll();
  piano.clipnbr ++;
  if(piano.clipnbr >= piano.clip.length){
    piano.clipnbr = 0;
  }
  console.log('piano' + piano.clipnbr);
  updateDisplay();
  playAll();
}

function changeString() {
  stopAll();
  string.clipnbr ++;
  if(string.clipnbr >= string.clip.length){
    string.clipnbr = 0;
  }
  console.log('string' + string.clipnbr);
  updateDisplay();
  playAll();
}

function toggleDrum() {
  if(drum.isPlaying)
    drum.isPlaying = false;
  else
    drum.isPlaying = true;

  playAll();
}

function toggleBass() {
  if(bass.isPlaying)
    bass.isPlaying = false;
  else
    bass.isPlaying = true;

  playAll();
}

function togglePiano() {
  if(piano.isPlaying)
    piano.isPlaying = false;
  else
    piano.isPlaying = true;

  playAll();
}

function toggleString() {
  if(string.isPlaying)
    string.isPlaying = false;
  else
    string.isPlaying = true;

  playAll();
}
