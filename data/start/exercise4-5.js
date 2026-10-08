// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);

  console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(name, length, time);
}

// TODO 4a: store the three notes and one length in variables, here, above the function.

const firstNote = "C4";
const secondNote = "E4";
const thirdNote = "G4";
let noteLength = "8n";

// TODO 4b: use those variables in the calls below instead of the values typed in.

function exercise4(start) {
  playNote(firstNote, noteLength, start);
  playNote(secondNote, noteLength, start + beat);
  playNote(thirdNote, noteLength, start + beat * 2);
}

// TODO 4c: change the length variable once. Do all three notes change?

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
