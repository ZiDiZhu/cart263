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
  createCanvas(800, 600);
  background(200);

  button_drum = createButton('CHANGE DRUM');
  button_drum.position(100, 100);
  button_drum.mousePressed(changeDrum);
}


function draw() {

}

function changeDrum() {
  drum[currentdrum].stop();
  currentdrum ++;
  if(currentdrum >= drum.length){
    currentdrum = 0;
  }
  console.log(currentdrum);
  drum[currentdrum].loop();
}
