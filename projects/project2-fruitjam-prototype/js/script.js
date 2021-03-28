"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy
having difficulty making functions with parameters

commented tofix with things that need to be fixed
*/

//change instrument button
let button_drum;
let button_bass;
let button_piano;
let button_string;

//instrument states
let drum = {
  clip :[],
  avatar: [], //depicted by a melon
  clipnbr: 0, //clipnumber
  isPlaying: false,
  volume: 1
}

let bass = {
  clip:[],
  avatar: [], //banana
  clipnbr: 0,
  animnbr: 0,
  isPlaying: false,
  volume: 1
}

let piano = {
  clip:[],
  avatar:[], //berry
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let string = {
  clip:[],
  avatar: [],
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
  button_drum.mousePressed(() => {
    changeClip(drum)
  });

  button_drum = createButton('DRUM ON/OFF');
  button_drum.position(100, 140);
  button_drum.mousePressed(() => {
    toggleOnOff(drum)
  });

  button_bass = createButton('CHANGE BASS');
  button_bass.position(300, 200);
  button_bass.mousePressed(() => {
    changeClip(bass)
  });

  button_bass = createButton('BASS ON/OFF');
  button_bass.position(300, 140);
  button_bass.mousePressed(() => {
    toggleOnOff(bass)
  });

  button_piano = createButton('CHANGE PIANO');
  button_piano.position(500, 200);
  button_piano.mousePressed(() => {
    changeClip(piano)
  });

  button_piano = createButton('PIANO ON/OFF');
  button_piano.position(500, 140);
  button_piano.mousePressed(() => {
    toggleOnOff(piano)
  });

  button_piano = createButton('CHANGE STRING');
  button_piano.position(700, 200);
  button_piano.mousePressed(() => {
    changeClip(string)
  });

  button_piano = createButton('STRING ON/OFF');
  button_piano.position(700, 140);
  button_piano.mousePressed(() => {
    toggleOnOff(string)
  });


  updateDisplay();

}


function draw() {
  //background(200);
}


//tofix
//tried to use function with parameter for all instruments, didnt work

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
  updateDisplay();
}


//tofix
//change to parametered functions
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

  updateDisplay();
}

function changeClip(instrument) {
  stopAll();
  instrument.clipnbr++;
  if(instrument.clipnbr >= instrument.clip.length){
    instrument.clipnbr = 0;
  }
  updateDisplay();
  playAll();
}

function toggleOnOff(instrument) {
  if(instrument.isPlaying)
    instrument.isPlaying = false;
  else
    instrument.isPlaying = true;
  playAll();
}
