function sayHello() {
    // document.write("Hi");
    $("p#greeting").text("Hi");
}

function rollDie() {
    let die = Math.floor(Math.random() * 6) + 1;
    // alert(`You rolled a ${die}`);
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

$("h2").on("click", sayHello);
$("button").on("click", drawCard);
$("img").on("click", rollDie);