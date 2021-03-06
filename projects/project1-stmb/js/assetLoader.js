"use strict";

//this scripts loads assets and stores objects data

let titleImg;

//character overworld sprites
let chr_haru;
let chr_ishi;
let chr_niimi;
let chr_soga;

//character dialogue sprites
let chr_haru_1;//suffix_1: neutral expression
let chr_haru_2;//suffix_2: shock/angry
let chr_haru_3;//suffix_3: happy/laugh

let chr_soga_1;
let chr_soga_2;
let chr_soga_3;

let chr_ishi_1;
let chr_ishi_2;
let chr_ishi_3;

let chr_niimi_1;
let chr_niimi_2;
let chr_niimi_3;

//environment art assets
let sce_club_warm;
let sce_yard;

//music and sounds
let bgm_mystery;
let sfx_crack;

//items - club room
let item_remote = {
  x: 345,
  y: 320,
  img:undefined
}
let item_remote_broken = {
  x: 345,
  y: 320,
  img:undefined
}
let item_ac = {
  x: 230,
  y: 120,
  img:undefined
}
let item_penpen = {
  x: 420,
  y: 170,
  img:undefined
}
let item_pictureBoard = {
  x: 365,
  y: 240,
  img:undefined
}

//items - yard
let item_dump ={
  x:450,
  y:320,
  img:undefined
}
let item_messageBoard ={
  x:500,
  y:200,
  img:undefined
}
let item_kecha ={
  x:300,
  y:280,
  img:undefined
}

//dialogues
let cutsceneDialogues;
let itemDialogue;

function preload() {
  //cutescene dialogues
  cutsceneDialogues = loadJSON('data/dialogues.json');
  itemDialogue = loadJSON('data/itemsDialogue.json');

  titleImg = loadImage('assets/images/title.png');

  //character sprites in scene
  chr_haru = loadImage('assets/images/chr_haru.png');
  chr_ishi = loadImage('assets/images/chr_ishi.png');
  chr_niimi = loadImage('assets/images/chr_niimi.png');
  chr_soga = loadImage('assets/images/chr_soga.png');

  //character dialogue sprites
  chr_haru_1 = loadImage('assets/images/chr_haru_1.png');
  chr_haru_2 = loadImage('assets/images/chr_haru_2.png');
  chr_haru_3 = loadImage('assets/images/chr_haru_3.png');

  chr_soga_1 = loadImage('assets/images/chr_soga_1.png');
  chr_soga_2 = loadImage('assets/images/chr_soga_2.png');
  chr_soga_3 = loadImage('assets/images/chr_soga_3.png');

  chr_ishi_1 = loadImage('assets/images/chr_ishi_1.png');
  chr_ishi_2 = loadImage('assets/images/chr_ishi_2.png');
  chr_ishi_3 = loadImage('assets/images/chr_ishi_3.png');

  chr_niimi_1 = loadImage('assets/images/chr_niimi_1.png');
  chr_niimi_2 = loadImage('assets/images/chr_niimi_2.png');
  chr_niimi_3 = loadImage('assets/images/chr_niimi_3.png');

  sce_club_warm = loadImage('assets/images/sce_club_warm.png');

  sce_yard = loadImage('assets/images/sce_yard.png');

  //items
  item_remote.img = loadImage('assets/images/item_remote.png');
  item_remote_broken.img = loadImage('assets/images/item_remote_broken.png');
  item_ac.img = loadImage('assets/images/item_ac.png');
  item_penpen.img = loadImage('assets/images/item_penpen.png');
  item_pictureBoard.img = loadImage('assets/images/item_pictureBoard.png');

  item_messageBoard.img = loadImage('assets/images/item_messageBoard.png');
  item_dump.img = loadImage('assets/images/item_dump.png');
  item_kecha.img = loadImage('assets/images/item_kecha.png');

  //music
  bgm_mystery = loadSound('assets/sounds/bgm_mystery.wav');
  //sfx
  sfx_crack = loadSound('assets/sounds/sfx_crack.wav');
}
