"use strict";


function updateDisplay() {
  background(200);

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);


  //update animations

  updateAnim(drum);
  updateAnim(bass);
  updateAnim(piano);
  updateAnim(string);


}

function updateAnim(instrument) {
  if(instrument.isPlaying)
    instrument.avatar[0].position(instrument.x,300);
  else
    instrument.avatar[0].position(100,10000);  //temporary solution to make it insivible, tofix
}
