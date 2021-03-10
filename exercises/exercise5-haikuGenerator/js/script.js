/**
Surreal Haiku Generator
Zidi

+ Broke down the haiku components to smaller chunks of words
+ mouse hover changes the color of text
+ random color generated as well as new lines
+ press Space to change the entire haiku

*/

"use strict";

let randomColor;

let haikuLines = {
  twoSyllables: [
    //1rst sentence starter
    `O, to `,
    `Do not `,
    `You will `,
    `They will `,
    `I can `
  ],
  oneSyllableVerb: [
    `be`,
    `miss`,
    `leave`,
    `see`,
    `kiss`,
    `take`,
    `hate`,
    `slap`
  ],
  OneSyllableArticle: [
    ` the `,
    ` your `,
    ` my `,
    ` her `,
    ` a `
  ],
  OneSyllableNoun: [
    `tree`,
    `bee`,
    `cat`,
    `bat`,
    `rat`,
    `butt`
  ],
  threeSyllables: [
    //2nd sentece starter
    `It's nice to `,
    `Why did you `,
    `He likes to `,
    `Peacefully `,
    `I'll never `
  ],
  twoSyllablesVerb: [
    `dream of`,
    `think of`,
    `speak to`,
    `play with`,
    `look at`
  ],
  fourSyllables: [
    //3rd sentence opener
    `No one thinks you're `,
    `You were never `,
    `We will all be `,
    `I think you are `,
    `That is very `
  ],
  oneSyllableAdj: [
    `sad`,
    `bad`,
    `real`,
    `mad`,
    `rad`,
    `fat`,
    `dead`,
    `wrong`,
    `odd`
  ]
};

// Our three elements on the page that contain each line of the poem
let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);


setupLines();
addListeners();

document.addEventListener('keydown', restart);

function restart(event){
  setupLines();
}

/**
Puts a randomly chosen haiku line in each line of the poem in HTML
*/
function setupLines() {
  line1.innerText = random(haikuLines.twoSyllables) + random(haikuLines.oneSyllableVerb) + random(haikuLines.OneSyllableArticle) + random(haikuLines.OneSyllableNoun);
  line2.innerText = random(haikuLines.threeSyllables) + random(haikuLines.twoSyllablesVerb) + random(haikuLines.OneSyllableArticle) + random(haikuLines.OneSyllableNoun);
  line3.innerText = random(haikuLines.fourSyllables) + random(haikuLines.oneSyllableAdj);
}

/**
Adds event listeners for changing each line of the poem
*/
function addListeners() {
  line1.addEventListener(`click`, changeLine);
  line2.addEventListener(`click`, changeLine);
  line3.addEventListener(`click`, changeLine);
  line1.addEventListener(`mouseover`, highlight);
  line2.addEventListener(`mouseover`, highlight);
  line3.addEventListener(`mouseover`, highlight);
}

function highlight(event){
  random_bg_color();
  event.target.style.color = randomColor;
}

/**
Triggers a fade out when a line is clicked
*/
function changeLine(event) {
  fadeOut(event.target, 1);
}

/**
Reduces the opacity of the provided element until it reaches zero
then changes its line and triggers a fade in
*/
function fadeOut(element, opacity) {
  // Change the opacity of the line
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  // Check if the opacity is greater than 0...
  if (opacity > 0) {
    // If so, keep fading on the next frame
    // Note the use of an anonymous function here so we can pass
    // arguments to fadeOut()
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  }
  else {
    // If not, we can switch lines and fade in...
    // Set a new line of poem for the element
    setNewLine(element);
    // Trigger a fade in
    fadeIn(element, 0);
  }
}

/**
Increases the opacity of the provided element until it reaches
1 and then stops.
*/
function fadeIn(element, opacity) {
  // Increase the opacity
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  // Check if opacity is still less than 1
  if (opacity < 1) {
    // Keep fading. Note the use of an anonymous function here so we
    // can pass arguments to fadeIn()
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
  else {
    // Do nothing - we're done!
  }
}

/**
Sets the text of the element to a randomly chosen haiku line, accounting for
syllables
*/
function setNewLine(element) {
  if (element === line1) {
    // If the element is line1 or line3, use five syllables
    element.innerText = random(haikuLines.twoSyllables) + random(haikuLines.oneSyllableVerb) + random(haikuLines.OneSyllableArticle) + random(haikuLines.OneSyllableNoun);
    random_bg_color();
    element.style.color = randomColor;
  }
  else if (element === line3) {
    // If the element is line1 or line3, use five syllables
    element.innerText = random(haikuLines.fourSyllables) + random(haikuLines.oneSyllableAdj);
    random_bg_color();
    element.style.color = randomColor;
  }
  else {
    // If the element is line2 use seven
    element.innerText = random(haikuLines.threeSyllables) + random(haikuLines.twoSyllablesVerb) + random(haikuLines.OneSyllableArticle) + random(haikuLines.OneSyllableNoun);
    random_bg_color();
    element.style.color = randomColor;
  }
}

/**
A helper function that returns a random element from the provided array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//gives a random Color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    randomColor = "rgb(" + x + "," + y + "," + z + ")";

    }

random_bg_color();
