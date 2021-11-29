$(document).ready(function () {
    $("form").on("submit", checkSentence);
});

function checkSentence(event) {
    event.preventDefault();

    // Get the text string from the box
    let sentence = $("#sentence").val();

    // An array of non-letter characters to remove.
    // We could add dashes, apostrophes, and
    // other punctuation, but we'll start with just
    // commas and periods
    let badChars = [",", "."];

    // Loop through the bad characters
    for (let badCharacter of badChars) {
        // Replace all occurrences of the bad character
        // with an empty string
        sentence = sentence.replaceAll(badCharacter, "");
    }

    // Split the sentence into an array of words
    let sentenceArray = sentence.split(" ");

    // Loop through the array of words, grabbing pairs
    // of words.
    //
    // Note the "- 1". This is allowing us to grab pairs.
    // We need to stop one short of the end of the array
    // because the last element doesn't have a
    // "right neighbor".
    for (let j = 0; j < sentenceArray.length - 1; j++) {
        // What is the length of the "left" word?
        let length1 = sentenceArray[j].length;

        // Grab the last two characters of the left word
        let sub1 = sentenceArray[j].substr(length1 - 2);
        // Grab the first two characters of the right word
        let sub2 = sentenceArray[j + 1].substr(0, 2);

        // Are the sub-sequences the same?
        if (sub1 !== sub2) {
            // If they are not the same, we have our answer:
            // The sentence is not a chain link sentence.
            $("#result").text("Not a chain link sentence");
            // "return" exits the function early
            // because we have found our result
            return;
        }
    }

    // We got all the way through the loop and
    // did not find any non-matching sub-sequences
    $("#result").text("Is a chain link sentence");
}