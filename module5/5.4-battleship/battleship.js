$(":checkbox").on("change", fireMissile);

function fireMissile() {
    // Test if player 1's submarine was sunk
    let player1SubSank = $("#p1-sub1").is(":checked") &&
        $("#p1-sub2").is(":checked") &&
        $("#p1-sub3").is(":checked");

    // If it was, then show the message
    if (player1SubSank) {
        $("#p1-sub-msg").show();
    }

    // Test if player 1's battleship was sunk
    let player1BshipSank = $("#p1-bship1").is(":checked") &&
        $("#p1-bship2").is(":checked") &&
        $("#p1-bship3").is(":checked") &&
        $("#p1-bship4").is(":checked");


    // If it was, then show the message
    if (player1BshipSank) {
        $("#p1-bship-msg").show();
    }

    // Test if player 2's submarine was sunk
    let player2SubSank = $("#p2-sub1").is(":checked") &&
        $("#p2-sub2").is(":checked") &&
        $("#p2-sub3").is(":checked");


    // If it was, then show the message
    if (player2SubSank) {
        $("#p2-sub-msg").show();
    }

    // Test if player 2's battleship was sunk
    let player2BshipSank = $("#p2-bship1").is(":checked") &&
        $("#p2-bship2").is(":checked") &&
        $("#p2-bship3").is(":checked") &&
        $("#p2-bship4").is(":checked");


    // If it was, then show the message
    if (player2BshipSank) {
        $("#p2-bship-msg").show();
    }


    // If both of player 1's ships were sunk
    // OR
    // both of player 2's ships were sunk
    // then game over
    if ((player1SubSank && player1BshipSank) || (player2SubSank && player2BshipSank)) {
        $("#gameOverMsg").show();
    }
}
