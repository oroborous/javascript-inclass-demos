// Uses the audiosynth library to create an instrument
// Other options include "piano", "acoustic", and "edm"
const organ = Synth.createInstrument("organ");
// Colors for the keys
const allColors = ["#99CC00", "#0099FF", "#9933CC", "#CC0066", "#CC0033", "#FF3300", "#FF6600"];
// Notes in the music scale
const allNotes = ["C", "D", "E", "F", "G", "A", "B"];
// Make keys for these octaves
const MIN_OCTAVE = 3, MAX_OCTAVE = 5;

// Boolean for whether or not we're currently recording
let isRecording = false;

// Empty array to record a song as the user clicks notes
let recordedNotes = [];

// TODO
//  Create two arrays (songOne and songTwo) that hold notes in the form "G,3" or "A,5"


// Create the grid of keyboard keys
for (let octave = MIN_OCTAVE; octave <= MAX_OCTAVE; octave++) {
    // Create a new row with a Bootstrap class
    let row = $("<div>").addClass("row");
    $("#keyboard").append(row);

    // Loop over array of color values
    for (let i = 0; i < allColors.length; i++) {
        // Create a <span> to be the clickable key
        // with two classes, "key" and Bootstrap's "col"
        let keyboardKey = $("<span>").addClass("key col");
        row.append(keyboardKey);

        // Set background color with CSS
        let color = allColors[i];
        keyboardKey.css("background-color", color);

        // Set this key's note with data-note
        let note = allNotes[i];
        keyboardKey.data("note", note);

        // Set this key's octave with data-octave
        keyboardKey.data("octave", octave);

        // Text for display
        keyboardKey.text(`${note}${octave}`);

        // Use note and octave to make a unique ID
        keyboardKey.attr("id", `${note}${octave}`);
    }
}

// This anonymous function makes the Play Recording
// button play the array of recorded notes
$("#playButton").on("click", function () {
    playRecording(recordedNotes);
});
$("#songOneButton").on("click", function () {
    playRecording(songOne);
});
$("#songTwoButton").on("click", function () {
    playRecording(songTwo);
});

$("#keyboard").on("click", ".key", noteClicked);

// Assign functions to the other buttons
$("#recordButton").on("click", toggleRecording);
$("#clearButton").on("click", clearRecording);


function clearRecording() {
    // create a new, empty array
    recordedNotes = [];
}

function toggleRecording() {
    // toggle the boolean flag variable
    isRecording = !isRecording;

    // toggle the class of the button and update its text
    $("#recordButton").toggleClass("btn-dark btn-light")
        .text(isRecording ? "Stop Recording" : "Start Recording");

    // if recording has just started,
    if (isRecording) {
        // new array for this recording
        clearRecording();
    }
}

function recordNote(note, octave) {
    // Make a string like "C,3"
    let entry = note + "," + octave;
    // Store the note information in the array
    recordedNotes.push(entry);
}

function playRecordedNote(recordedNote) {
    // recordedNote will contain a string like "C,3"
    // Split the string into an array where index 0
    // holds the note, and index 1 holds the octave
    let [note, octave] = recordedNote.split(",");
    // Put the note and octave on the screen
    $("#keyPlaying").text(note + octave);
    // Find all keys and remove the class that gives
    // active keys a dropshadow, change selection to
    // the one that matches the note being played,
    // and reapply the class to just that one span
    $("span.key").removeClass("playing")
        .filter(`#${note}${octave}`)
        .addClass("playing");
    // Play the recorded note
    playNote(note, octave);
}

function playRecording(arrayOfNotes) {
    // Loop over recorded notes, calling the anonymous
    // function for each element
    arrayOfNotes.forEach(function (entry, index) {
        // Cause another anonymous function to run
        // with a set delay (in milliseconds)
        setTimeout(function () {
            // The entry will be a string from the array,
            // like "C,3"
            playRecordedNote(entry);
        }, index * 500); // additional 500 MS delay for each note
    });

    // After all the recorded notes have played, clear the span
    // that displays the currently playing note and remove
    // the dropshadow for the last played key
    setTimeout(function () {
        $("span.key").removeClass("playing");
        $("#keyPlaying").html("&nbsp;");
    }, arrayOfNotes.length * 500);
}

function noteClicked() {
    // Which span was clicked?
    let keyPlayed = $(this);
    // Get its data-note attribute
    let notePlayed = keyPlayed.data("note");
    // Get its data-octave attribute
    let octavePlayed = keyPlayed.data("octave");

    // Make the sound play
    playNote(notePlayed, octavePlayed);

    // If recording is turned on, record the note info
    if (isRecording)
        recordNote(notePlayed, octavePlayed);
}

function playNote(note, octave) {
    // use the instrument from the audiosynth library
    // to play the desired note for half a second
    organ.play(note, octave, 0.5);
}
