$(function() {
    $("input#change-box").on("change", boxChanged);
    $("input#key-box").on("keypress", keyTyped);
    $("input#js-slider").on("input", sliderMoved);
});

function boxChanged() {
    let boxValue = $("input#change-box").val();
    $("p#output-change-box").text(boxValue);
}

function keyTyped(event) {
    let theKey = event.key;
    $("p#output-key-box").text(theKey);
}

function sliderMoved(event) {
    let sliderValue = $("input#js-slider").val();
    $("p#output-js-slider").text(sliderValue);
}