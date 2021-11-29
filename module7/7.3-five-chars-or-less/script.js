$(document).ready(function () {
    $("form").on("submit", storeWord);
    $("button#printWords").on("click", printWords);
});

// This array will contain other arrays
let wordsByLength = [
    [], // 0-character words (not possible)
    [], // 1-character words
    [], // 2-character words
    [], // 3-character words
    [], // 4-character words
    []  // 5-character words
];

function storeWord(event) {
    event.preventDefault();

    // Get the word from the text box
    let word = $("input#word").val();

    // How many characters?
    let wordLength = word.length;

    // Use the length to find the inner array
    if (wordLength < 6) {
        wordsByLength[wordLength].push(word);
    } else {
        // Nope, too long, won't fit
        $("p#output").text("Word must be < 6 letters long");
    }

    // Blank out the text box and refocus it
    $("input#word").val("").focus();
}

function printWords() {
    // Loop over each inner array in the outer array
    for (let wordArray of wordsByLength) {
        for (let word of wordArray) {
            $("p#output").append(word + " ");
        }
        // Break after each inner array
        $("p#output").append("<br>");
    }
}