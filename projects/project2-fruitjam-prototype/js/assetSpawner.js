//change instrument button
let button_drum;
let button_bass;
let button_piano;
let button_string;
//toggleOnOff
let button_drum_ON;
let button_bass_ON;
let button_piano_ON;
let button_string_ON;

//change sound of instrument
let button_changesound_drum;


let button_stop;
let button_playall;

//instrument states
let drum = {
  sound : `melon`, //pumpkin
  clip :[],//add pumpkinClips for pumpkin?
  avatar: [], //depicted by a melon
  x:100,
  clipnbr: 0, //clipnumber
  isPlaying: false,
  volume: 1
}

let melon = {
  clip :[],//add pumpkinClips for pumpkin?
  avatar: [], //depicted by a melon
}

let pumpkin = {
  clip :[],//add pumpkinClips for pumpkin?
  avatar: [], //depicted by a melon
  x:100,
  clipnbr: 0, //clipnumber
  isPlaying: false,
  volume: 1
}

let bass = {
  clip:[],
  avatar: [], //banana
  x:300,
  clipnbr: 0,
  animnbr: 0,
  isPlaying: false,
  volume: 1
}

let piano = {
  clip:[],
  avatar:[], //berry
  x:500,
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

let string = {
  clip:[],
  avatar: [],
  x:700,
  clipnbr: 0,
  isPlaying: false,
  volume: 1
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  button_stop = createButton('STOP ALL');
  button_stop.position(600, 50);
  button_stop.mousePressed(turnAllOff);

  //tofix
  button_playall = createButton('PLAY ALL');
  button_playall.position(300, 50);
  button_playall.mousePressed(turnAllOn);

  button_drum = createButton('CHANGE CLIP');
  button_drum.position(100, 200);
  button_drum.mousePressed(() => {
    changeClip(drum)
  });

  button_drum_ON = createButton('DRUM ON/OFF');
  button_drum_ON.position(100, 140);
  button_drum_ON.mousePressed(() => {
    toggleOnOff(drum)
  });

  button_bass = createButton('CHANGE CLIP');
  button_bass.position(300, 200);
  button_bass.mousePressed(() => {
    changeClip(bass)
  });

  button_bass_ON = createButton('BASS ON/OFF');
  button_bass_ON.position(300, 140);
  button_bass_ON.mousePressed(() => {
    toggleOnOff(bass)
  });

  button_piano = createButton('CHANGE CLIP');
  button_piano.position(500, 200);
  button_piano.mousePressed(() => {
    changeClip(piano)
  });

  button_piano_ON = createButton('PIANO ON/OFF');
  button_piano_ON.position(500, 140);
  button_piano_ON.mousePressed(() => {
    toggleOnOff(piano)
  });

  button_string = createButton('CHANGE CLIP');
  button_string.position(700, 200);
  button_string.mousePressed(() => {
    changeClip(string)
  });

  button_string_ON = createButton('STRING ON/OFF');
  button_string_ON.position(700, 140);
  button_string_ON.mousePressed(() => {
    toggleOnOff(string)
  });

  //test- change drummer
  button_changesound_drum = createButton('CHANGE DRUMMER');
  button_changesound_drum.position(100, 40);
  button_changesound_drum.mousePressed(() => {
    changeSound(drum);
  });
}
