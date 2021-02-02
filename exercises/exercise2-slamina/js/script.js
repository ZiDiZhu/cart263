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
let saying = ``;
let currentanswer;

let points = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang){
    let commands = {
      'I think it is *animal': guessAnimal,
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
  background(255);

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
    currentanswer = ``;
    currentAnimal = ``;
  }else{
    push();
    textSize(22);
    textAlign(CENTER);
    text(currentanswer, 100, 300);
    pop();
  }
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
  saying = `click anywhere`;
}

function reverseString (string) {

  let characters = string.split('');
  let reverseCharacters = characters.reverse();
  let result = reverseCharacters.join('');
  return result;
}

function guessAnimal (animal) {
   currentanswer = animal;
   console.log(currentAnimal);
}
