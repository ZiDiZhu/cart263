"use strict";

let titleImg;

//character overworld sprites
let _chr_haru;
let _chr_ishi;
let _chr_niimi;
let _chr_soga;

//character sprites
let chr_haru_1;//suffix_1: neutral expression

let chr_soga_1;

let chr_ishi_1;

let chr_niimi_1;

//environment art assets
let sce_club_warm;

//items
let item_remote = {
  x: 0,
  y: 0,
  img:undefined
}

//dialogues
let scene1Dialogues;

function preload() {
  //scene1
  scene1Dialogues = loadJSON('data/dialogues.json');

  titleImg = loadImage('assets/images/title.png');

  //character sprites in scene
  _chr_haru = loadImage('assets/images/_chr_haru.png');
  _chr_ishi = loadImage('assets/images/_chr_ishi.png');
  _chr_niimi = loadImage('assets/images/_chr_niimi.png');
  _chr_soga = loadImage('assets/images/_chr_soga.png');

  //character dialogue sprites
  chr_haru_1 = loadImage('assets/images/chr_haru_1.png');

  chr_soga_1 = loadImage('assets/images/chr_soga_1.png');

  chr_ishi_1 = loadImage('assets/images/chr_ishi_1.png');

  chr_niimi_1 = loadImage('assets/images/chr_niimi_1.png');

  sce_club_warm = loadImage('assets/images/sce_club_warm.png');

  //items
  item_remote.img = loadImage('assets/images/item_remote.png');
}
