$("form").on("submit", createWrestlerName);

// add "event" parameter to function when working with forms
function createWrestlerName(event) {
    // prevent form from submitting
    event.preventDefault();

    // read value from input with id="fav-color"
    let favoriteColor = $("input#fav-color").val();

    // read value from input with id="street'
    let streetName = $("input#street").val();

    // display professional wrestler name in paragraph with id="output"
    $("p#output").text(`Your professional wrestler name is ${favoriteColor} ${streetName}`);
}
