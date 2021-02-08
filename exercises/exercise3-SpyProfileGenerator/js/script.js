"use strict";

/**
Band Concept Generator
Zi Di Zhu

concept generator for your hypothetical, experimental music band!

-Generates a bands' genre and number of members.
- Each member plays a random instrument, has a unique name and their own catchphrase
- You can reshuffle the concept at any time
- You have to name your band, but you can change it at any time
- cool visuals
- 
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
let quoteData = undefined;
let img;

let button;

function preload() {
  namePrefixeData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/prefixes.json`);
  namesData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/wrestlers.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  genreData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/genres.json`);
  quoteData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/us_president_quotes.json`);

  img = loadImage('assets/images/Capture.JPG');
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  bandProfile.genre = random(genreData.genres);
  bandProfile.nbrOfMembers = random(2,6);
  generateMember();

  button = createButton('shuffle');
  button.position(19, 19);
  button.mousePressed(shuffleBand);

  button = createButton('Name your band');
  button.position(119, 19);
  button.mousePressed(renameBand);
}


function display() {
  background(20);
    tint(100);
    image(img,0,0);

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

    let memberProfile = `${i+1}- ${members[i].title} ${members[i].name}
    - ${members[i].instrument} player,
    - catchphrase: "${members[i].quote} "`;

    push();
    textFont(`Helvetica`);
    textSize(18);
    textAlign(LEFT,TOP);
    fill(members[i].r,members[i].g,members[i].b);
    text(memberProfile,200,200 + 100*i);

    pop();
  }

}

function renameBand(){
  bandProfile.name = prompt(`What's the name of your band?`);
  display();
}

function shuffleBand(){
  while(members.length > 0) {
    members.pop();
}
  bandProfile.nbrOfMembers = random(2,6);
  generateMember();
  bandProfile.genre = random(genreData.genres);
}

function createMember(title, name, instrument,r,g,b,quote){
  let member = {
    title : title,
    name : name,
    instrument : instrument,
    r:r,
    g:g,
    b:b,
    quote:quote,
  };
  return member;
}

function generateMember(){
  for (let i = 0; i < bandProfile.nbrOfMembers; i++){
    let quoteOrigin = random(quoteData.data);
    let member = createMember(random(namePrefixeData.prefixes), random(namesData.wrestlers), random(instrumentData.instruments),random(90,255),random(90,255),random(90,255),random(quoteOrigin.quotes));
    members.push(member);
  }
  display();
}
