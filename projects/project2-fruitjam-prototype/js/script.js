"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy

commented tofix with things that need to be fixed

also i want to change to not replaying clips from the start to resume playing when switch
*/

//change instrument button
let button_drum;
let button_bass;
let button_piano;
let button_string;
//toggleOnOff
let button_drum_ON;
let button_bass_ON;
let button_piano_ON;
let button_string_ON;

//instrument states
let drum = {
  clip :[],//add pumpkinClips for pumpkin?
  avatar: [], //depicted by a melon
  x:100,
  clipnbr: 0, //clipnumber
  isPlaying: false,
  volume: 1
}

let bass = {
  clip:[],
  avatar: [], //banana
  x:300,
  clipnbr: 0,
  animnbr: 0,
  isPlaying: false,
  volume: 1
}

let piano = {
  clip:[],
  avatar:[], //berry
  x:500,
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let string = {
  clip:[],
  avatar: [],
  x:700,
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let button_stop;
let button_playall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  button_stop = createButton('STOP ALL');
  button_stop.position(600, 50);
  button_stop.mousePressed(turnAllOff);

  //tofix
  button_playall = createButton('PLAY ALL');
  button_playall.position(300, 50);
  button_playall.mousePressed(turnAllOn);

  button_drum = createButton('CHANGE DRUM');
  button_drum.position(100, 200);
  button_drum.mousePressed(() => {
    changeClip(drum)
  });

  button_drum_ON = createButton('DRUM ON/OFF');
  button_drum_ON.position(100, 140);
  button_drum_ON.mousePressed(() => {
    toggleOnOff(drum)
  });

  button_bass = createButton('CHANGE BASS');
  button_bass.position(300, 200);
  button_bass.mousePressed(() => {
    changeClip(bass)
  });

  button_bass_ON = createButton('BASS ON/OFF');
  button_bass_ON.position(300, 140);
  button_bass_ON.mousePressed(() => {
    toggleOnOff(bass)
  });

  button_piano = createButton('CHANGE PIANO');
  button_piano.position(500, 200);
  button_piano.mousePressed(() => {
    changeClip(piano)
  });

  button_piano_ON = createButton('PIANO ON/OFF');
  button_piano_ON.position(500, 140);
  button_piano_ON.mousePressed(() => {
    toggleOnOff(piano)
  });

  button_string = createButton('CHANGE STRING');
  button_string.position(700, 200);
  button_string.mousePressed(() => {
    changeClip(string)
  });

  button_string_ON = createButton('STRING ON/OFF');
  button_string_ON.position(700, 140);
  button_string_ON.mousePressed(() => {
    toggleOnOff(string)
  });


  updateDisplay();
}


function draw() {
  //background(200);
}


function stopAll() {

  drum.clip[drum.clipnbr].stop();
  bass.clip[bass.clipnbr].stop();
  piano.clip[piano.clipnbr].stop();
  string.clip[string.clipnbr].stop();

  updateDisplay();
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
