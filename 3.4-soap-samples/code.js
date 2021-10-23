$(function () {
    $("form").on("submit", orderSoaps);
});

function orderSoaps(event) {
    // Don't actually submit the form!
    // Stops the flashing/resetting
    event.preventDefault();

    // jQuery, get me every <input> where the name is "soap"
    // that are checked
    let checkedBoxes = $("input[name=soap]:checked");

    // Declare a variable to hold the subtotal
    let subtotal = 0;

    // Declare a variable to hold the soap names
    let soapNames = "";

    // For each checked box...
    checkedBoxes.each(function () {
        // Get the "data-price" attribute
        // jQuery converts this to a number -- hooray!!
        subtotal += $(this).data("price");
        // Also get the value attribute of the checkbox (e.g. "Citrus")
        soapNames += $(this).val();
        // Add a break tag between names
        soapNames += "<br>";
    });

    // jQuery, get me every <input> where the name is "shipping"
    // that are checked (should be only one because they are radio
    // buttons) and get its "data-shipping-fee" attribute
    let shipping = $("input[name=shipping]:checked").data("shipping-fee");

    // Declare a variable for the grand total
    let orderTotal = subtotal + shipping;

    // Put data on the screen
    // Use .html instead of .text to make tags render properly
    $("td#output-soaps").html(soapNames);

    // 2 decimal places for amounts
    $("td#output-subtotal").text(subtotal.toFixed(2));
    $("td#output-shipping").text(shipping.toFixed(2));
    $("td#output-total").text(orderTotal.toFixed(2));

}