/**
pool
Zi di

- you are the white ball
- goal: get other balls in the pit
- dont't get urself in the pit!

warning: really bad colliding area
warning: bad overall gaming experience
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height:600,
  physics: {
    default: `arcade`
  },
  scene: [Boot,Play],
  backgroundColor: 'rgba(255,110,110,0.5)',
};

let game = new Phaser.Game(config);

let score = 0;
let timesDied = 0;
let deathtxt;
let scoretxt;
