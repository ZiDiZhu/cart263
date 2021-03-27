"use strict";

function preload() {
  //sounds

  //drums
  drum.clip[0] = loadSound('assets/sounds/808drum1.wav');
  drum.clip[1] = loadSound('assets/sounds/808drum2.wav');
  drum.clip[2] = loadSound('assets/sounds/808drum3.wav');

  //bass
  bass.clip[0] = loadSound('assets/sounds/bass1.wav');
  bass.clip[1] = loadSound('assets/sounds/bass2.wav');
  bass.clip[2] = loadSound('assets/sounds/bass3.wav');

  //piano
  piano.clip[0] = loadSound('assets/sounds/softPiano1.wav');
  piano.clip[1] = loadSound('assets/sounds/softPiano2.wav');
  piano.clip[2] = loadSound('assets/sounds/softPiano3.wav');

  //strings
  string.clip[0] = loadSound('assets/sounds/string1.wav');
  string.clip[1] = loadSound('assets/sounds/string2.wav');
  string.clip[2] = loadSound('assets/sounds/string3.wav');

}
