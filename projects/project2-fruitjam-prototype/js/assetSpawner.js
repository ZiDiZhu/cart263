//create buttons
//and assign functions to buttons
function setupButtons() {
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

  //change drummer
  button_changesound_drum = createButton('CHANGE DRUMMER');
  button_changesound_drum.position(100, 440);
  button_changesound_drum.mousePressed(() => {
    changeSound(drum);
  });
  //change bassist
  button_changesound_bass = createButton('CHANGE BASSIST');
  button_changesound_bass.position(300, 440);
  button_changesound_bass.mousePressed(() => {
    changeSound(bass);
  });
  //change pianist
  button_changesound_piano = createButton('CHANGE PIANO');
  button_changesound_piano.position(500, 440);
  button_changesound_piano.mousePressed(() => {
    changeSound(piano);
  });
  //change pianist
  button_changesound_string = createButton('CHANGE STRING');
  button_changesound_string.position(700, 440);
  button_changesound_string.mousePressed(() => {
    changeSound(string);
  });
}

//assign fruits as instruments
function setupInstruments() {

  drum.clip.push.apply(drum.clip,melon.clip);
  drum.avatar.push.apply(drum.avatar,melon.avatar);

  bass.clip.push.apply(bass.clip,banana.clip);
  bass.avatar.push.apply(bass.avatar,banana.avatar);

  piano.clip.push.apply(piano.clip,strawbry.clip);
  piano.avatar.push.apply(piano.avatar,strawbry.avatar);

  string.clip.push.apply(string.clip,orange.clip);
  string.avatar.push.apply(string.avatar,orange.avatar);
}
