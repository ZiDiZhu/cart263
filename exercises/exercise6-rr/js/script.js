/*
Unravel the secret text
Zidi
You are trying to reveal some secrets
*/

"use strict";

let $secrets;

var x = document.getElementById("thunder");
var c = document.getElementById("cthulhu");

setup();


function setup() {
  $secrets = $(`.secret`);
  // Click to reveal redacted paragraphs
  $secrets.on(`click`, unredact);
  c.style.opacity = 0;
};

function unredact() {
  $(this).removeClass(`redacted`);
  $(this).addClass(`revealed`);
  thunder.play();
  fadeIn(c, 0);
}


function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
  else {
    fadeOut(element, 1);
  }
}


function fadeOut(element, opacity) {
  // Increase the opacity
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  // Check if opacity is still less than 1
  if (opacity >0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  }
  else {
    // Do nothing
  }
}
