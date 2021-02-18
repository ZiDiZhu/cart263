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

let bubble = undefined;

function preload() {}

function setup() {

  createCanvas(680, 480);
  video = createCapture(VIDEO);
  video.size(640,480);
  //capture.hide();

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

  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vy: -2,
    vx : random(0,3)
  }

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


    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if ( d < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  //bubble movement
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y <0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(220);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

}
