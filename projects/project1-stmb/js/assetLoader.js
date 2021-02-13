"use strict";

let titleImg;
let button_Start;

//character sprites
let chr_haru_1;//suffix_1: neutral expression

function preload() {
  dialogueData = loadJSON('data/dialogues.json');

  titleImg = loadImage('assets/images/title.png');
  chr_haru_1 = loadImage('assets/images/chr_haru_1.png');
}
