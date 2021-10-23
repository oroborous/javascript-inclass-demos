$(function() {
    $("form").on("submit", changeBackground);
});

function changeBackground(event) {
    event.preventDefault();

    // get the selected color code from the input with id="bg-color"
    let bgColor = $("input#bg-color").val();

    // update the "background-color" style of the <body>
    $("body").css("background-color", bgColor);

    // get the selected font value from the select with id="font"
    let fontName = $("select#font").val();

    // update the "font-family" style of the <body>
    $("body").css("font-family", fontName);
}