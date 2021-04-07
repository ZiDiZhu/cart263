"use strict";


function updateDisplay() {

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);

}

function resetGif(instrument) {
  instrument.avatar[instrument.clipnbr+1].reset();
  instrument.avatar[instrument.clipnbr+1].play();
}

function updateAnim(instrument) {

  // //make all avatars go away
  // for (let i = 0; i < instrument.avatar.length; i++){
  //   if(instrument.avatar[i]){
  //       //instrument.avatar[i].position(100,10000);
  //       //image(instrument.avatar[i],100,10000);
  //   }
  // }

  if(instrument.isPlaying){
    //instrument.avatar[instrument.clipnbr+1].position(instrument.x,300);
    image(instrument.avatar[instrument.clipnbr+1],instrument.x,300);
    //instrument.avatar[instrument.clipnbr+1].reset();
    }
    else{
    //instrument.avatar[0].position(instrument.x,300);
    image(instrument.avatar[0],instrument.x,300);
  }
}
