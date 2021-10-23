$(function () {
    $("form").on("submit", calculateFine);
});

// add "event" parameter to function when working with forms
function calculateFine(event) {
    // prevent form from submitting
    event.preventDefault();

    // get the value from the id="name" input box
    let name = $("input#name").val();

    // get the value from the id="num-books" input box
    // and parse from string data type to number
    let numBooks = Number($("input#num-books").val());

    // get the value from the id="days-late" input box
    // and parse from string data type to number
    let daysLate = Number($("input#days-late").val());

    // calculate late fee
    let lateFee = numBooks * daysLate * 0.75;

    // put message string in output paragraph
    $("p#output").text(`${name}, your late fee is $${lateFee.toFixed(2)}`);
}