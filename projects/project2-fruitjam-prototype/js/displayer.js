"use strict";

/**
Fruit Jam (Demo)_Displayer
Zi Di Zhu

displayCOntrol

*/

function updateDisplay() {

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);

  image(bgbox,200,150);
  image(keyboardInstruction,100,550);
}

function makeButtonVisible(){
  let firstRoomButton = document.getElementById(first-room-button);
    firstRoomButton.style.visibility = visible;
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
