// Tools of the Trade
// Functions from Tuesday, now in VS Code.
// Work through the TODOs in order. After each one: save, check it works, commit.

// ---------- Part 1: the console ----------

// The Greeter from Tuesday morning: takes in a name, gives back a greeting.
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Ana"));

// TODO 1: call greet with your own name and log what it gives back.

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Aleksandra"));

// ---------- Part 2: sound ----------

// Make an instrument and plug it into the speakers.
const synth = new Tone.Synth().toDestination();

// Plays three notes, timed from start.
// TODO 2: change the notes to ones you like. A note is A to G, then a number: "D4", "A3".
function playRiff(start) {
  synth.triggerAttackRelease("C3", "16n", start);
  synth.triggerAttackRelease("A2", "8n", start + 0.5);
  synth.triggerAttackRelease("D3", "16n", start + 1);
  synth.triggerAttackRelease("D2", "8n", start + 1.5);
  // TODO 3: add a fourth note at start + 1.5
}

// The whole song, timed from start.
function song(start) {
  playRiff(start);
  // TODO 4: call playRiff again, two seconds after the first one
}
function song(start) {
  playRiff(start);
   playRiff(start + 2.0);
}
// ---------- You don't need to change anything below this line ----------

// When Play is clicked: switch the sound on, then play the song from now.
const button = document.getElementById("play");
button.addEventListener("click", async () => {
  await Tone.start();
  song(Tone.now());
});
