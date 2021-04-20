//originally made by slow_izzm
//https://editor.p5js.org/slow_izzm/sketches/H1fhGJSaX

let confettiColor = [], confetti = [];
let confettiPlaying = false;

function startConfetti() {
	confettiColor = [color(`#00aeef`), color(`#ec008c`), color(`#72c8b6`), color(`#DFFF00`)];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  }
}

function displayConfetti() {
	for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {
    confetti[i].confettiDisplay();
  }
}

function updateConfetti() {
  for (let i = 0; i < confetti.length / 2; i++) {

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }
}
