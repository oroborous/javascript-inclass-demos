$("button").click(checkShopping);

function checkShopping() {
    let wantPancakes = $("input#pancakes").is(":checked");
    let hasButter = $("input#butter").is(":checked");
    let hasSyrup = $("input#syrup").is(":checked");

    let goToStore = false;

    if (wantPancakes) {
        if (!hasButter) {
            goToStore = true;
        }
        if (!hasSyrup) {
            goToStore = true;
        }
    }

    $("p#nested").text(goToStore);

    // Reset for next test
    goToStore = false;

    // Alternative:
    // let outOfButter = !hasButter;
    // let outOfSyrup = !hasSyrup;

    if (wantPancakes && !hasButter || !hasSyrup) {
        goToStore = true;
    }

    $("p#noPar").text(goToStore);

    // Reset for next test
    goToStore = false;

    // Alternative:
    // if (isMakingPancakes && !(hasButter && hasSyrup))

    if (wantPancakes && (!hasButter || !hasSyrup)) {
        goToStore = true;
    }

    $("#withPar").text(goToStore);
}
