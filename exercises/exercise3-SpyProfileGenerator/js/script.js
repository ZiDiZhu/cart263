"use strict";

/**
Spy Profile Generator
Zi Di Zhu

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Description of preload
*/

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
}

function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  spyProfile.name = prompt(`Name?`);
}


/**
Description of draw()
*/
function draw() {
  background(20);

  let profile = `** CONDIDENTIAL! >:( **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}`;
  
  push();
  textFont(`Helvetica`);
  textSize(24);
  textAlign(LEFT,TOP);
  fill(255);
  text(profile,100,100);

  pop();
}
