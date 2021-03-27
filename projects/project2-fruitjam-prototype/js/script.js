"use strict";

/**
Fruit Jam (Demo)
Zi Di Zhu

A musical toy
*/

let currentdrum = 0;
let currentbass = 0;
let currentpiano = 0;
let currentstring = 0;

let button_drum;
let button_bass;
let button_piano;
let button_string;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  button_drum = createButton('CHANGE DRUM');
  button_drum.position(100, 100);
  button_drum.mousePressed(changeDrum);

  button_bass = createButton('CHANGE BASS');
  button_bass.position(300, 100);
  button_bass.mousePressed(changeBass);
}


function draw() {

}

//tried to use function with parameter for all instruments, didnt work aaaaaaaaaaa

function changeDrum() {
  drum[currentdrum].stop();
  currentdrum ++;
  if(currentdrum >= drum.length){
    currentdrum = 0;
  }
  console.log(currentdrum);
  drum[currentdrum].loop();
}

function changeBass() {
  bass[currentbass].stop();
  drum[currentdrum].stop();//to sync up
  currentbass ++;
  if(currentbass >= bass.length){
    currentbass = 0;
  }
  console.log(currentbass);
  bass[currentbass].loop();
  drum[currentdrum].loop();//to sync
}
