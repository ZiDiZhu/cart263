"use strict";

/**
Fruit Jam (Demo)_Variables Strorage
Zi Di Zhu

declares all the variables

*/

//change sound of instrument
let button_changesound_drum;
let button_changesound_bass;
let button_changesound_piano;
let button_changesound_string;

let button_stop;
let button_playall;


//drum, piano, string, bass are  'general' instruments
//fruits are different types of that instrument

//contains the data of drum
let drum = {
  sound : `melon`, //pumpkin
  clip :[],//add pumpkinClips for pumpkin?
  avatar: [], //depicted by a melon
  x:400,
  y:120,
  clipnbr: 0, //clipnumber
  isPlaying: false,
  playbtn: ``,
  clipbtn:`` //changes the clip
}
//drummers
let melon = {

  clip :[],
  avatar: []
}
let pumpkin = {
  clip :[],
  avatar: []
}

//bass
let bass = {
  sound: `banana`, //avocado
  clip:[],
  avatar: [],
  x:300,
  y:150,
  clipnbr: 0,
  isPlaying: false,
  playbtn: ``,
  clipbtn:``
}
//bassists
let banana = {
  clip :[],
  avatar: []
}
let avocado = {
  clip :[],
  avatar: []
}

//piano
let piano = {
  sound: `strawbry`, //bluebry
  clip:[],
  avatar:[], //berry
  x:540,
  y:220,
  clipnbr: 0,
  isPlaying: false,
  playbtn: ``,
  clipbtn:``
}
//pianists
let strawbry = {
  clip :[],
  avatar: []
}
let bluebry = {
  clip :[],
  avatar: []
}

//string
let string = {
  sound: `orange`, //lime
  clip:[],
  avatar: [],
  x:400,
  y:250,
  clipnbr: 0,
  isPlaying: false,
  volume: 1,
  playbtn: ``,
  clipbtn:``
}
//string players
let orange = {
  clip :[],
  avatar: []
}
let lime = {
  clip :[],
  avatar: [],
}

//environment assets
let bgbox;

//instructions
let keyboardInstruction;
