// min and max formulas from https://www.the-home-cinema-guide.com/tv-viewing-distance.html

$("form").on("submit", calculateDistance);
$("input#screen-size").on("input", showScreenSize);

// add "event" parameter to function when working with forms
function calculateDistance(event) {
    // prevent form from submitting
    event.preventDefault();

    // get value from input with id="screen-size"
    // and convert from string to number to get
    // screen size in inches
    let screenSize = Number($("input#screen-size").val());

    // minimum viewing distance is 1.2 x screen size
    let minDistance = 1.2 * screenSize;

    // maximum viewing distance is 2.5 x screen size
    let maxDistance = 2.5 * screenSize;

    // convert both from inches to feet
    minDistance /= 12;
    maxDistance /= 12;

    // output selected TV size
    $("p#output-size").text(`Selected TV screen size: ${screenSize}`);

    // output rounded values
    $("p#output-min").text(`Minimum viewing distance: ${Math.round(minDistance)} feet`);
    $("p#output-max").text(`Maximum viewing distance: ${Math.round(maxDistance)} feet`);
}

function showScreenSize(event) {
    $("p#output-size").text(`Selected TV screen size: ${event.target.value}`);
}
