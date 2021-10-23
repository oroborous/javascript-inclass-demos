$(function () {
    $("#drawDeck").on("click", drawCard);
    $("#discardAllButton").on("click", discardAllCards);
});


function drawCard() {
    // Generate random number 1 - 52
    let randomNumber = Math.floor(Math.random() * 52) + 1;

    // Create a new image element
    let cardImage = $("<img>");

    // set the image's src attribute
    cardImage.attr("src", `card-images/${randomNumber}.png`);

    // set the image's alt text
    cardImage.attr("alt", "playing card");

    // make the card clickable
    cardImage.on("click", discardOneCard);

    // Add the new card as the last child of the play area
    $("#playArea").append(cardImage);

    // $("#playArea img").first().before(cardImage);

    // $("#playArea img").last().after(cardImage);

}

function discardOneCard() {
    // Get the card that was clicked
    let clickedCard = $(this);

    // Remove the clicked card from the play area (its current parent)
    clickedCard.remove();

    // Remove any card image in the discard area
    // Then put the clicked card's image in the discard area
    $("#discardPile").empty().append(clickedCard);
}

function discardAllCards() {
    // find the last card in the play area
    let lastCardDealt = $("#playArea img").last();

    // Remove all the cards from the play area
    $("#playArea img").remove();

    // Add just the last card to the discard area
    $("#discardPile").empty().append(lastCardDealt);
}