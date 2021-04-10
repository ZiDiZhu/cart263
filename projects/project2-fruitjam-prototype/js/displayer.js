"use strict";


function updateDisplay() {

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);

  image(bg_box,200,150);

}


function resetGif(instrument) {
  instrument.avatar[instrument.clipnbr+1].reset();
  instrument.avatar[instrument.clipnbr+1].play();
}

function updateAnim(instrument) {

  if(instrument.isPlaying){
    image(instrument.avatar[instrument.clipnbr+1],instrument.x,instrument.y);
  }else{
    image(instrument.avatar[0],instrument.x,instrument.y);
  }
}
