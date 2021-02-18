"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let video = undefined;

let handpose = undefined;

let predictions = [];

let bubbles = [];

let nbrofbubbles = 5;

let bubblesPopped = 0;

let barkSFX;

function preload() {}

function setup() {

  createCanvas(680, 480);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  barkSFX = loadSound(`assets/sounds/bark.wav`);

  //load the handpos model
  handpose = ml5.handpose(video, {
    //this doesnt work!
    flipHorizontal: true
  }, function(){
    console.log(`Model loaded`);
  });

  //Listen for predictions
  handpose.on(`predict`, function(results){
    console.log(results);
    predictions = results;
  });

  for(let i = 0; i < 5; i ++){
    createBubble();
  }

}

function createBubble(){
  let bubble = {
    x: random(width),
    y: height,
    size: 50,
    vy: -2,
    vx : random(-2,2),
    r: random(0,255),
    b: random(0,255),
    g: random(0,255)
  }
  bubbles.push(bubble);
}

function draw() {
  background(255);
  push();
  //reverse the display
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, 640, 480);
  filter(INVERT);
  pop();

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    push();
    stroke(255);
    line(baseX,baseY,tipX,tipY);
    pop();

    push();
    fill(255,0,0);
    ellipse(baseX,baseY,20);
    pop();

    for (let i = 0; i < bubbles.length; i++){
      let d = dist(tipX, tipY, bubbles[i].x, bubbles[i].y);
      if ( d < bubbles[i].size /2){
        bubbles[i].size = 3;
        createBubble();
        bubblesPopped++;
        barkSFX.play();
      }
    }
  }

  for(let i = 0; i < bubbles.length; i++){
    //bubble movement
    bubbles[i].x += bubbles[i].vx;
    bubbles[i].y += bubbles[i].vy;

    if (bubbles[i].y <0) {
      bubbles[i]. y = height;
      bubbles[i].vx = -bubble[i].vx;
    }
    push();
    fill(bubbles[i].r,bubbles[i].b,bubbles[i].g);
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].size);
    pop();
  }

  push();
  fill(255,0,0);
  textSize(24);
  text(`bubbles popped: ${bubblesPopped}`, 100,100);
  pop();

}
