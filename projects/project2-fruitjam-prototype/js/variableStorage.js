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
  idleAvatar: ``, //displays the second player
  idleX:720,
  idleY:340,
  gobtn:``, //brings the idle player on stage
  clipnbr: 0, //clipnumber
  isPlaying: false,
  playbtn: ``,
  clipbtn:`` //changes the clip
}
//drummers
let melon = {
  clip :[],
  avatar: [],
  idle: ``
}

let pumpkin = {
  clip :[],
  avatar: [],
  idle: ``
}

//bass
let bass = {
  sound: `banana`, //avocado
  clip:[],
  avatar: [],
  x:300,
  y:150,
  idleAvatar: ``, //displays the second player
  idleX:660,
  idleY:440,
  gobtn:``, //brings the idle player on stage
  clipnbr: 0,
  isPlaying: false,
  playbtn: ``,
  clipbtn:``
}
//bassists
let banana = {
  clip :[],
  avatar: [],
  idle: ``
}
let avocado = {
  clip :[],
  avatar: [],
  idle: ``
}

//piano
let piano = {
  sound: `strawbry`, //bluebry
  clip:[],
  avatar:[], //berry
  x:540,
  y:220,
  idleAvatar: ``, //displays the second player
  idleX:200,
  idleY:380,
  gobtn:``, //brings the idle player on stage
  clipnbr: 0,
  isPlaying: false,
  playbtn: ``,
  clipbtn:``
}
//pianists
let strawbry = {
  clip :[],
  avatar: [],
  idle: ``
}
let bluebry = {
  clip :[],
  avatar: [],
  idle: ``
}

//string
let string = {
  sound: `orange`, //lime
  clip:[],
  avatar: [],
  x:400,
  y:230,
  idleAvatar: ``, //displays the second player
  idleX:100,
  idleY:340,
  clipnbr: 0,
  gobtn:``, //brings the idle player on stage
  isPlaying: false,
  volume: 1,
  playbtn: ``,
  clipbtn:``
}
//string players
let orange = {
  clip :[],
  avatar: [],
  idle: ``
}
let lime = {
  clip :[],
  avatar: [],
  idle: ``
}

//environment assets
let bgbox;

//instructions
let keyboardInstruction;
