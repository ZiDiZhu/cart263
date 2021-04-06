"use strict";

function preload() {
  //sounds

  //drums
  drum.clip[0] = loadSound('assets/sounds/808drum1.wav');
  drum.clip[1] = loadSound('assets/sounds/808drum2.wav');
  drum.clip[2] = loadSound('assets/sounds/808drum3.wav');

  //drummer 2 test
  pumpkin.clip[0] = loadSound('assets/sounds/drum_pumpkin1.wav');
  pumpkin.clip[1] = loadSound('assets/sounds/drum_pumpkin2.wav');
  pumpkin.clip[2] = loadSound('assets/sounds/drum_pumpkin3.wav');

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


  //gifs

  //currently, 1 is animated and 0 is still

  //drum watermelon
  drum.avatar[1] = createImg('assets/gif/melon2.gif');

  //pumpkin.avatar[1] = createImg('assets/png/drum_pumpkin.png');

  //bass banana
  bass.avatar[1] = createImg('assets/images/banana.gif');

  //piano berry
  piano.avatar[1] = createImg('assets/images/berry.gif');

  //string citrus
  string.avatar[1] = createImg('assets/images/citrus.gif');


  //stills images
  drum.avatar[0] = createImg('assets/png/melon.png');

  //pumpkin.avatar[0] = createImg('assets/png/drum_pumpkin.png');

  //bass banana
  bass.avatar[0] = createImg('assets/png/banana.png');

  //piano berry
  piano.avatar[0] = createImg('assets/png/berry.png');

  //string citrus
  string.avatar[0] = createImg('assets/png/citrus.png');


}
