"use strict";

/**
MUFFIN OR CHIHUAHUA
Zi Di Zhu

find the dogs among the foods!
*/

const NUM_muffin_IMAGES = 6;
const NUM_muffinS = 60;

const NUM_chihuahua_IMAGES = 2;
const NUM_chihuahuaS = 10;

let muffinImages = [];
let muffins = [];

let chihuahuaImages = [];
let chihuahuas = [];

function preload() {
  for (let i = 0; i < NUM_muffin_IMAGES; i++){
    let muffinImage = loadImage(`assets/images/muffin${i}.png`);
    muffinImages.push(muffinImage);
  }
  for (let i = 0; i < NUM_chihuahua_IMAGES; i++){
    let chihuahuaImage = loadImage(`assets/images/chihuahua${i}.png`);
    chihuahuaImages.push(chihuahuaImage);
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  //create muffins
  for (let i = 0; i < NUM_muffinS; i++){
    let x = random(0, width);
    let y = random(0, height);
    let muffinImage = random(muffinImages);
    let muffin = new Muffin(x, y, muffinImage);
    muffins.push(muffin);
  }

  for (let i = 0; i < NUM_chihuahuaS; i++){
    let x = random(0, width);
    let y = random(0, height);
    let chihuahuaImage = random(chihuahuaImages);
    let chihuahua = new Chihuahua(x, y, chihuahuaImage);
    chihuahuas.push(chihuahua);
  }
}



function draw() {
  background(255,255,0);

  for(let i = 0; i < muffins.length; i++){
    muffins[i].update();
  }
  for(let i = 0; i < chihuahuas.length; i++){
    chihuahuas[i].update();
  }
}
