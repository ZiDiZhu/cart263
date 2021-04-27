"use strict";

/**
Fruit Jam (Demo)_Displayer
Zi Di Zhu

display visuals

*/

function updateDisplay() {

  //background assets
  image(bgfloor,100,220);
  image(bgbox,200,150);

  //display confetti if every instrument is playing
  if(piano.isPlaying && bass.isPlaying && drum.isPlaying && string.isPlaying){
    updateConfetti();
  }

  if(isShowingHelp){
    displayHelp();
  }
}

//show instructions
function displayHelp(){

  image(keyboardInstruction,900,100);

}


function resetGif(instrument) {
  instrument.avatar[instrument.clipnbr+1].reset();
  instrument.avatar[instrument.clipnbr+1].play();
}

function updateAnim(instrument) {

  if(instrument.isPlaying){
    image(instrument.avatar[instrument.clipnbr+1],instrument.x,instrument.y);
    instrument.playbtn.style('filter', `sepia(100%)  saturate(500%)`);
  }else{
    image(instrument.avatar[0],instrument.x,instrument.y);
    instrument.playbtn.style('filter', `none`);
  }

  image(instrument.idleAvatar,instrument.idleX,instrument.idleY);
}

//prevents things falling out of places when resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
