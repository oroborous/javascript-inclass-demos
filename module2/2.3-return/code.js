function generateLetter() {
    let num = Math.floor(Math.random() * 26) + 65;
    let letter = String.fromCharCode(num);

    return letter;
}

function generateAcronym() {
    let firstLetter = generateLetter();
    let secondLetter = generateLetter();
    let thirdLetter = generateLetter();
    $("span#acronym").text(firstLetter + secondLetter + thirdLetter);
}

function rollDie(sides) {
    let die = Math.floor(Math.random() * sides) + 1;
    return die;
}

function rollThreeDice() {
    let firstDie = rollDie(6);
    let secondDie = rollDie(6);
    let thirdDie = rollDie(6);
    $("p#sum-of-dice").text(`The sum of your dice was ${firstDie + secondDie + thirdDie}`);
}

$("button").on("click", generateAcronym);

$("img").on("click", rollThreeDice);