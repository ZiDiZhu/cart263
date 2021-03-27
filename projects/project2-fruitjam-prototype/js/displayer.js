"use strict";


function updateDisplay() {
  background(200);

  text(`drum ` + drum.clipnbr + ` playing : ` + drum.isPlaying, 100, 100);
  text(`bass ` + bass.clipnbr + ` playing : ` + bass.isPlaying, 300, 100);
  text(`piano ` + piano.clipnbr + ` playing : ` + piano.isPlaying, 500, 100);
  text(`string ` + string.clipnbr + ` playing : ` + string.isPlaying, 700, 100);
}
