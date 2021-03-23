/**
Code Taker
Zi Di
*/

"use strict";
var boopSFX = new Audio('assets/sounds/boop.wav');
var winSFX = new Audio('assets/sounds/win.wav');

function setup() {

};


$(`.secret`).one(`mouseover`, function(event){
  $(this).addClass(`found`,500);
  $(this).draggable({
    helper: "clone"
  });
});

$(`#answer`).droppable({
  drop: function(event,ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    boopSFX.play();
    if($(this).text() ===`Theremin`){
      $(`#solved-dialog`).dialog(`open`);
      winSFX.play(); //this should've been a theremin sound lmao
    }
  }
});

$(`#solved-dialog`).dialog({
  buttons: {
    "I know." : function(){
      $(this).dialog(`close`);
    }
  }
});

$(`#backspace`).click(function(){
  //remove appended element
  //Didnt figure out how to remove letters one by one
  $(`#answer`).text('');
})

$(`#cheat`).click(function(){
  $(`.secret`).addClass(`cheated`,500);
})

$(`#solved-dialog`).dialog(`close`);
