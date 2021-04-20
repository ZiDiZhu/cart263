
//create buttons
//and assign functions to buttons
function setupButtons() {
  
  button_stop = createImg('assets/UISprite/btn_stopAll.png');
  button_stop.position(600, 40);
  button_stop.mousePressed(turnAllOff);

  //tofix
  button_playall = createImg('assets/UISprite/btn_playAll.png');
  button_playall.position(300, 40);
  button_playall.mousePressed(turnAllOn);

  drum.clipbtn = createImg('assets/UISprite/btn_changeclip.png');
  drum.clipbtn.position(520, 150);
  drum.clipbtn.mousePressed(() => {
    changeClip(drum)
  });

  drum.playbtn = createImg('assets/UISprite/btn_play.png');
  drum.playbtn.position(520, 110);
  drum.playbtn.mousePressed(() => {
    toggleOnOff(drum)
  });

  bass.clipbtn = createImg('assets/UISprite/btn_changeclip.png');
  bass.clipbtn.position(270, 180);
  bass.clipbtn.mousePressed(() => {
    changeClip(bass)
  });

  bass.playbtn = createImg('assets/UISprite/btn_play.png');
  bass.playbtn.position(270, 140);
  bass.playbtn.mousePressed(() => {
    toggleOnOff(bass)
  });

  piano.clipbtn = createImg('assets/UISprite/btn_changeclip.png');
  piano.clipbtn.position(650, 280);
  piano.clipbtn.mousePressed(() => {
    changeClip(piano)
  });

  piano.playbtn = createImg('assets/UISprite/btn_play.png');
  piano.playbtn.position(650, 240);
  piano.playbtn.mousePressed(() => {
    toggleOnOff(piano)
  });

  string.clipbtn = createImg('assets/UISprite/btn_changeclip.png');
  string.clipbtn.position(460, 320);
  string.clipbtn.mousePressed(() => {
    changeClip(string)
  });

  string.playbtn = createImg('assets/UISprite/btn_play.png');
  string.playbtn.position(420, 320);
  string.playbtn.mousePressed(() => {
    toggleOnOff(string)
  });

  //change drummer
  drum.gobtn = createImg('assets/UISprite/btn_go.png');
  drum.gobtn.position(drum.idleX+20, drum.idleY-30);
  drum.gobtn.mousePressed(() => {
    changeSound(drum)
  });
  //change bassist
  bass.gobtn = createImg('assets/UISprite/btn_go.png');
  bass.gobtn.position(bass.idleX+20, bass.idleY-30);
  bass.gobtn.mousePressed(() => {
    changeSound(bass)
  });
  //change pianist
  piano.gobtn = createImg('assets/UISprite/btn_go.png');
  piano.gobtn.position(piano.idleX+20, piano.idleY-20);
  piano.gobtn.mousePressed(() => {
    changeSound(piano)
  });
  //change string
  string.gobtn = createImg('assets/UISprite/btn_go.png');
  string.gobtn.position(string.idleX+20, string.idleY-30);
  string.gobtn.mousePressed(() => {
    changeSound(string)
  });
}

//assign fruits as instruments
function setupInstruments() {

  drum.clip.push.apply(drum.clip,melon.clip);
  drum.avatar.push.apply(drum.avatar,melon.avatar);
  drum.idleAvatar = pumpkin.idle;

  bass.clip.push.apply(bass.clip,banana.clip);
  bass.avatar.push.apply(bass.avatar,banana.avatar);
  bass.idleAvatar = avocado.idle;

  piano.clip.push.apply(piano.clip,strawbry.clip);
  piano.avatar.push.apply(piano.avatar,strawbry.avatar);
  piano.idleAvatar = bluebry.idle;

  string.clip.push.apply(string.clip,orange.clip);
  string.avatar.push.apply(string.avatar,orange.avatar);
  string.idleAvatar = lime.idle;
}
