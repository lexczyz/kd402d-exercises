// Exercise 2: build a note from parts

const pitchName = "E";
let octave = 4;
let fullNote = pitchName + octave;
console.log("Exercise 2: fullNote is " + fullNote);

// TODO 2a: raise the octave by one: octave = octave + 1;

octave = octave + 1;

// TODO 2b: log fullNote again. Predict first: has it changed?

console.log("Exercise 2: TODO 2b " + fullNote);

//Has not changed

// TODO 2c: rebuild it from its parts (fullNote = pitchName + octave;) and log it once more.

fullNote = pitchName + octave;
console.log("Exercise 2: TODO 2c " + fullNote);

function exercise2(start) {
  synth.triggerAttackRelease(fullNote, "4n", start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
