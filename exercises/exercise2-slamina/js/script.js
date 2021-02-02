"use strict";

/**
Exercise2
Zi Di

Fun with voices!
*/
const animals = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ]

let currentAnimal = ``;

let phrase;
let saying = `click anywhere for an animal spelled backwards \n and guess the animal`;
let currentanswer;

let points = 0;

let bg = {
  r: 155,
  g: 155,
  b: 155
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang){
    let commands = {
      'I think it is *animal': guessAnimal,
      'My guess is *animal': guessAnimal,
      '*animal': guessAnimal,
      'Is it *animal':guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textAlign(CENTER,CENTER);
  }
}


/**
Description of draw()
*/
function draw() {

  background(bg.r,bg.g,bg.b);


  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width/2, height/2);
  pop();

  push();
  textSize(22);
  textAlign(CENTER);
  text(`points:` + points, 100, 100);
  pop();

  if (currentanswer === currentAnimal){
    points +=1;
    responsiveVoice.speak(`yes, it was a` + currentAnimal, "UK English Female", {
      rate:1.2,
      onstart: showScoringEffect,
      onend: checkIfDevidableby3
    });
    currentAnimal = `placeholder`;
  }else{

  }
    push();
    textSize(22);
    textAlign(CENTER);
    fill(200,100,0);
    if (currentanswer != null) {
      text(`you:` + currentanswer, width/2, 300);
    }
    pop();
}

function mousePressed() {

  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  phrase = reverseAnimal;
  responsiveVoice.speak(reverseAnimal, "UK English Female", {
    rate:1.2,
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  saying = phrase;
}

function hideSpeaking() {
  saying = `click anywhere for an animal spelled backwards \nand guess the animal`;
}

function showScoringEffect() {
  bg.r = random(0,255);
  bg.g = random(0,255);
  bg.b = random(0,255);
}

function checkIfDevidableby3(){
  if (points % 3 == 0){
    responsiveVoice.speak(`hey, you are pretty good!`, "UK English Female", {
      rate:1.2,
      onend: hideScoringEffect
    });
  }else{
    hideScoringEffect();
  }
}

function hideScoringEffect() {
  bg.r = 155;
  bg.g = 155;
  bg.b = 155;
}

function reverseString (string) {

  let characters = string.split('');
  let reverseCharacters = characters.reverse();
  let result = reverseCharacters.join('');
  return result;
}

function guessAnimal (animal) {
   currentanswer = animal;
   currentanswer.toLowerCase();
   console.log(currentAnimal);
}
