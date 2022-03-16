function englishGreeting() {
    sayHello("Good morning!");
}

function germanGreeting() {
    sayHello("Guten tag!");
}

function frenchGreeting() {
    sayHello("Bonjour!");
}

function sayHello(greeting) {
    $("p#greeting").text(greeting);
}

function rollSixSidedDie() {
    rollDie(6);
}

function rollTenSidedDie() {
    rollDie(10);
}

function rollDie(sides) {
    let die = Math.floor(Math.random() * sides) + 1;
    $("p#die-roll").text(`You rolled a ${die}`);
}

let count = 0;

function drawCard() {
    // Local variable. Its value is destroyed when function exits.
    // let count = 0;
    count++;
    $("p#click-count").text(`You drew ${count} cards`);

    let card = Math.floor(Math.random() * 52) + 1;
    // alert(`You drew a ${card}`);
    $("p#card-drawn").text(`You drew a ${card}`);
}


$("h2#english").on("click", englishGreeting);
$("h2#french").on("click", frenchGreeting);
$("h2#german").on("click", germanGreeting);

$("button").on("click", drawCard);
$("img").on("click", rollSixSidedDie);
