function sayHello(greeting) {
    $("p#greeting").text(greeting);
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


$("h2#english").on("click", function() {
   sayHello("Hi");
});
$("h2#french").on("click", function() {
    sayHello("Bonjour");
});
$("h2#german").on("click", function() {
    sayHello("Guten tag");
});
$("button").on("click", drawCard);
$("img").on("click", function() {
    rollDie(6);
});