"use strict";

/**
Band Concept Generator
Zi Di Zhu

concept generator for your hypothetical, experimental music band!
*/

/**
Description of preload
*/

let bandProfile = {
  name: ``,
  genre: ``,
  nbrOfMembers: ``,
}

let members = []

let instrumentData = undefined;
let namesData = undefined;
let namePrefixeData = undefined;
let genreData = undefined;

function preload() {
  namePrefixeData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/prefixes.json`);
  namesData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/wrestlers.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  genreData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/genres.json`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //bandProfile.name = prompt(`What's the name of your band?`);
  bandProfile.genre = random(genreData.genres);
  bandProfile.nbrOfMembers = random(2,4);
  generateMember();
}


/**
Description of draw()
*/
function draw() {
  background(20);

  let profile = `** ${bandProfile.name} **
  Genre: ${bandProfile.genre}
  Members:
  `

  push();
  textFont(`Helvetica`);
  textSize(24);
  textAlign(LEFT,TOP);
  fill(255);
  text(profile,100,100);

  pop();

  for (let i = 0; i < bandProfile.nbrOfMembers; i++){

    let memberProfile = `- ${members[i].title} ${members[i].name}
    ${members[i].instrument} player,`;

    push();
    textFont(`Helvetica`);
    textSize(18);
    textAlign(LEFT,TOP);
    fill(members[i].r,members[i].g,members[i].b);
    text(memberProfile,200,200 + 100*i);

    pop();
  }



}

function createMember(title, name, instrument,r,g,b){
  let member = {
    title : title,
    name : name,
    instrument : instrument,
    r:r,
    g:g,
    b:b
  };
  return member;
}

function generateMember(){
  for (let i = 0; i < bandProfile.nbrOfMembers; i++){
    let member = createMember(random(namePrefixeData.prefixes), random(namesData.wrestlers), random(instrumentData.instruments),random(0,255),random(0,255),random(0,255));
    members.push(member);
  }
}
