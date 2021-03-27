"use strict";

let drum = [];

let bass = [];

let piano = [];

let string = [];

function preload() {
  //sounds

  //drums
  drum[0] = loadSound('assets/sounds/808drum1.wav');
  drum[1] = loadSound('assets/sounds/808drum2.wav');
  drum[2] = loadSound('assets/sounds/808drum3.wav');

  //bass
  bass[0] = loadSound('assets/sounds/bass1.wav');
  bass[1] = loadSound('assets/sounds/bass2.wav');
  bass[2] = loadSound('assets/sounds/bass3.wav');

  //piano
  piano[0] = loadSound('assets/sounds/softpiano1.wav');
  piano[1] = loadSound('assets/sounds/softpiano2.wav');
  piano[2] = loadSound('assets/sounds/softpiano3.wav');

  //strings
  string[0] = loadSound('assets/sounds/string1.wav');
  string[1] = loadSound('assets/sounds/string2.wav');
  string[2] = loadSound('assets/sounds/string3.wav');

}
