$("form").on("submit", revealCard);

function revealCard(event) {
    // stop form from submitting
    event.preventDefault();

    // what number did they type in the form box?
    // subtract one for zero-based indexing
    let chosenCardNum = Number($("input#guess").val()) - 1;

    // use jquery to find the n-th <img> and get its data-card value
    let hiddenCardName = $("img").eq(chosenCardNum).data("card");

    // find the n-th <img> again and update its src attribute
    $("img").eq(chosenCardNum).attr("src", `card-images/${hiddenCardName}`);
}
