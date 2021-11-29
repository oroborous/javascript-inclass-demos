$(document).ready(function () {
    $(":radio").on("change", answerQuestion);
    $("form").on("submit", scoreQuiz);
});

const POINTS_PER_QUESTION = 4;
const TOTAL_QUESTIONS = 8;
let currentQuestion = 1;

let answers = {
    dog: 0,
    cat: 0,
    totalPoints: 0
};

// show the first question on page load
$("#q1").slideToggle();

// Runs when a radio button is changed
function answerQuestion() {
    let checkedRadio = $(this);
    let dogAmount = checkedRadio.data("dog");
    let catAmount = checkedRadio.data("cat");

    answers.dog += dogAmount;
    answers.cat += catAmount;
    answers.totalPoints += POINTS_PER_QUESTION;

    hideCurrent();
}

// jQuery animation to hide the current question
function hideCurrent() {
    // Provide a function to call when the
    // slide animation is finished
    $("#q" + currentQuestion).slideToggle(showNext);
}

// jQuery animation to either show the next question,
// or show the button to finish the quiz
function showNext() {
    if (currentQuestion === TOTAL_QUESTIONS) {
        // Provide a function to call when the
        // fade animation is finished
        $("#scoreQuizButton").fadeIn(scrollDown);
    } else {
        // Set up the next question
        currentQuestion++;
        // Provide a function to call when the
        // slide animation is finished
        $("#q" + currentQuestion).slideToggle(scrollDown);
    }
}

// Keep the viewport scrolled to the bottom of the screen
function scrollDown() {
    $("html, body").animate({scrollTop: $(document).height()}, "slow");
}

// Calculate the percent of cat person vs. dog person based on the
// quiz answers
function scoreQuiz(event) {
    event.preventDefault();

    let score = {};
    score.percentDog = Math.round(answers.dog / answers.totalPoints * 100);
    score.percentCat = 100 - score.percentDog;

    // These get used as a text percent a lot, so just make a property for it
    score.percentDogText = score.percentDog + "%";
    score.percentCatText = score.percentCat + "%";

    // https://www.kirupa.com/html5/emoji.htm
    if (score.percentDog > score.percentCat) {
        // https://unicode.org/emoji/charts/full-emoji-list.html#1f63a
        score.emoji = String.fromCodePoint(0x1F63A);
        score.winner = "Dog";
    } else if (score.percentDog < score.percentCat) {
        // https://unicode.org/emoji/charts/full-emoji-list.html#1f436
        score.emoji = String.fromCodePoint(0x1F436);
        score.winner = "Cat";
    } else {
        // https://unicode.org/emoji/charts/full-emoji-list.html#1f914
        score.emoji = String.fromCodePoint(0x1F914);
        score.winner = "Pet";
    }

    $("#percentCat").width(score.percentCatText).text(score.percentCatText);
    $("#percentDog").width(score.percentDogText).text(score.percentDogText);
    $("#description").text(`You are a ${score.winner} person!`);

    $("#scoreQuizButton").fadeOut(showResults);
}

function showResults() {
    $("#results").slideToggle();
}

