"use strict";

let titleImg;
let button_Start;

//character sprites
let chr_haru_1;//suffix_1: neutral expression

let chr_soga_1;

let chr_ishi_1;

let chr_niimi_1;

//environment art assets
let sce_club_warm;

function preload() {
  dialogueData = loadJSON('data/dialogues.json');

  titleImg = loadImage('assets/images/title.png');
  chr_haru_1 = loadImage('assets/images/chr_haru_1.png');

  chr_soga_1 = loadImage('assets/images/chr_soga_1.png');

  chr_ishi_1 = loadImage('assets/images/chr_ishi_1.png');

  chr_niimi_1 = loadImage('assets/images/chr_niimi_1.png');

  sce_club_warm = loadImage('assets/images/sce_club_warm.png');
}
