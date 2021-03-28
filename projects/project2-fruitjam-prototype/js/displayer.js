"use strict";


function updateDisplay() {
  background(200);

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);


  //update animations
  drum.avatar[0].position(100,300);
  bass.avatar[0].position(300,300);
  piano.avatar[0].position(500,350);
  string.avatar[0].position(700,350);


  //tofix
  //parameters
  if(drum.isPlaying)
    drum.avatar[0].position(100,300);
  else
    drum.avatar[0].position(100,10000);  //temporary solution to make it insivible, tofix
}
