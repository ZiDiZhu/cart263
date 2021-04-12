"use strict";

function preload() {
  //sounds

  //drums
  melon.clip[0] = loadSound('assets/sounds/808drum1.wav');
  melon.clip[1] = loadSound('assets/sounds/808drum2.wav');
  melon.clip[2] = loadSound('assets/sounds/808drum3.wav');

  //drummer 2 test
  pumpkin.clip[0] = loadSound('assets/sounds/drum_pumpkin1.wav');
  pumpkin.clip[1] = loadSound('assets/sounds/drum_pumpkin2.wav');
  pumpkin.clip[2] = loadSound('assets/sounds/drum_pumpkin3.wav');

  //bass
  banana.clip[0] = loadSound('assets/sounds/bass1.wav');
  banana.clip[1] = loadSound('assets/sounds/bass2.wav');
  banana.clip[2] = loadSound('assets/sounds/bass3.wav');
  //bass
  avocado.clip[0] = loadSound('assets/sounds/bass_b1.wav');
  avocado.clip[1] = loadSound('assets/sounds/bass_b2.wav');
  avocado.clip[2] = loadSound('assets/sounds/bass_b3.wav');

  //piano
  strawbry.clip[0] = loadSound('assets/sounds/softPiano1.wav');
  strawbry.clip[1] = loadSound('assets/sounds/softPiano2.wav');
  strawbry.clip[2] = loadSound('assets/sounds/softPiano3.wav');

  bluebry.clip[0] = loadSound('assets/sounds/piano_bluebry1.wav');
  bluebry.clip[1] = loadSound('assets/sounds/piano_bluebry2.wav');
  bluebry.clip[2] = loadSound('assets/sounds/piano_bluebry3.wav');

  //strings
  orange.clip[0] = loadSound('assets/sounds/string1.wav');
  orange.clip[1] = loadSound('assets/sounds/string2.wav');
  orange.clip[2] = loadSound('assets/sounds/string3.wav');
  //string - lime
  lime.clip[0] = loadSound('assets/sounds/string_b1.wav');
  lime.clip[1] = loadSound('assets/sounds/string_b2.wav');
  lime.clip[2] = loadSound('assets/sounds/string_b3.wav');


  //visuals
  //1-3 are animated and 0 is still image

  //drum watermelon
  melon.avatar[0] = loadImage('assets/png/melon.png');
  melon.avatar[1] = loadImage('assets/gif/melon1.gif');
  melon.avatar[2] = loadImage('assets/gif/melon2.gif');
  melon.avatar[3] = loadImage('assets/gif/melon3.gif');
  //drum pumpkin
  pumpkin.avatar[0] = loadImage('assets/png/drum_pumpkin.png');
  pumpkin.avatar[1] = loadImage('assets/gif/drum_pumpkin1.gif');
  pumpkin.avatar[2] = loadImage('assets/gif/drum_pumpkin2.gif');
  pumpkin.avatar[3] = loadImage('assets/gif/drum_pumpkin3.gif');

  //bass banana
  banana.avatar[0] = loadImage('assets/png/banana.png');
  banana.avatar[1] = loadImage('assets/images/banana.gif');
  banana.avatar[2] = loadImage('assets/images/banana.gif');
  banana.avatar[3] = loadImage('assets/images/banana.gif');
  //bass avocado
  avocado.avatar[0] = loadImage('assets/png/avocado.png');
  avocado.avatar[1] = loadImage('assets/png/avocado.png');
  avocado.avatar[2] = loadImage('assets/png/avocado.png');
  avocado.avatar[3] = loadImage('assets/png/avocado.png');

  //piano berry
  strawbry.avatar[0] = loadImage('assets/png/berry.png');
  strawbry.avatar[1] = loadImage('assets/gif/berry1.gif');
  strawbry.avatar[2] = loadImage('assets/gif/berry2.gif');
  strawbry.avatar[3] = loadImage('assets/gif/berry3.gif');
  //piano blueberry
  bluebry.avatar[0] = loadImage('assets/png/blueberry.png');
  bluebry.avatar[1] = loadImage('assets/png/blueberry.png');
  bluebry.avatar[2] = loadImage('assets/png/blueberry.png');
  bluebry.avatar[3] = loadImage('assets/png/blueberry.png');

  //string orange
  orange.avatar[0] = loadImage('assets/png/citrus.png');
  orange.avatar[1] = loadImage('assets/images/citrus.gif');
  orange.avatar[2] = loadImage('assets/images/citrus.gif');
  orange.avatar[3] = loadImage('assets/images/citrus.gif');
  //string lime
  lime.avatar[0] = loadImage('assets/png/lime.png');
  lime.avatar[1] = loadImage('assets/png/lime.png');
  lime.avatar[2] = loadImage('assets/png/lime.png');
  lime.avatar[3] = loadImage('assets/png/lime.png');

  //environment assets
  bg_box = loadImage('assets/png/_bg_box.png');

}
