// add the functions as event listeners
// to the forms in the HTML
$("form#clickForm").on("submit", countClick);
$("form#ageForm").on("submit", checkAge);
$("form#taxForm").on("submit", calcSalesTax);
$("form#catForm").on("submit", recommendFood);
$("form#cardForm").on("submit", drawCard);


let clicks = 0;

function countClick(event) {
    event.preventDefault();

    // Increment a variable that tracks the
    // number of button clicks
    clicks++;

    // Print the current number of clicks to the
    // <p> with ID "clickCountOutput"
    $("p#clickCountOutput").text(clicks);

    // When the count gets to 10, reset it to 0
    if (clicks >= 10) {
        clicks = 0;
    }

}


function checkAge(event) {
    event.preventDefault();

    // Get the user's birth year from the text
    // box with ID of "birthYear"
    let birthYear = Number($("input#birthYear").val());

    // Calculate their current age
    // Hint: https://www.w3docs.com/snippets/javascript/how-get-the-current-year-in-javascript.html
    let age = new Date().getFullYear() - birthYear;

    // If they are currently under 18, print "Child"
    // to the <p> with ID of "birthYearOutput"

    // If they are 18 or over, print "Adult" instead
    if (age < 18) {
        $("p#birthYearOutput").text("Child");
    } else {
        $("p#birthYearOutput").text("Adult");
    }


}

function calcSalesTax(event) {
    event.preventDefault();

    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"
    let purchaseAmount = Number($("input#purchaseAmount").val());

    // Get the state from the text box with ID "state"
    let state = $("input#state").val();

    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput"

    // If the user enters a state not listed above,
    // print "Error" instead

    let tax;
    if (state === "WI") {
        tax = purchaseAmount * .05;
    } else if (state === "IL") {
        tax = purchaseAmount * .08;
    } else if (state === "MN") {
        tax = purchaseAmount * .075;
    } else if (state === "MI") {
        tax = purchaseAmount * .055;
    } else {
        tax = "Error";
    }

    $("p#salesTaxOutput").text(tax);
}

function recommendFood(event) {
    event.preventDefault();

    // Get the cat's age from the text box with
    // ID of "catAge"
    let age = Number($("input#catAge").val());

    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"
    let food;
    if (age < 2) {
        food = "kitten chow";
    } else if (age < 11) {
        food = "adult chow";
    } else {
        food = "senior chow";
    }

    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"

    $("p#catAgeOutput").text(food);
}

function drawCard(event) {
    event.preventDefault();

    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;

    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;

    let description;

    // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
    // and 13 is "King". The rest are just the number itself.
    switch (faceValue) {
        case 11:
            description = "Jack of ";
            break;
        case 12:
            description = "Queen of ";
            break;
        case 13:
            description = "King of ";
            break;
        case 1:
            description = "Ace of";
            break;
        default:
            description = faceValue + " of ";
            break;
    }

    // For the suits: 1 is "Clubs", 2 is "Spades",
    // 3 is "Hearts", 4 is "Diamonds"
    switch (suit) {
        case 1:
            description += "Clubs";
            break;
        case 2:
            description += "Spades";
            break;
        case 3:
            description += "Hearts";
            break;
        case 4:
            description += "Diamonds";
            break;
    }

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"
    $("p#drawCardOutput").text(description);

}
