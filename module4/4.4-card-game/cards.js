$("#draw-deck").on("click", drawCard);
$("#play-area").on("click", "img", discardOneCard);
$("#discard-pile").on("click", "img", redrawCard);
$("#discard-all-button").on("click", discardAllCards);


function drawCard() {
    // Generate random number 1 - 52
    let randomNumber = Math.floor(Math.random() * 52) + 1;

    // Create a new image element
    let cardImage = $("<img>");

    // set the image's src attribute
    cardImage.attr("src", `card-images/${randomNumber}.png`);

    // set the image's alt attribute
    cardImage.attr("alt", "playing card");

    // Add the new card as the last child of the play area
    $("#play-area").append(cardImage);
}

function redrawCard(event) {
    $("#play-area").append(event.target);
}

function discardOneCard(event) {
    // Remove any card image in the discard area
    // Then put the clicked card's image in the discard area
    $("#discard-pile").empty().append(event.target);
}

function discardAllCards() {
    // find the last card in the play area
    let lastCardDealt = $("#play-area img").last();

    // Remove all the cards from the play area
    $("#play-area img").remove();

    // Add just the last card to the discard area
    $("#discard-pile").empty().append(lastCardDealt);
}
