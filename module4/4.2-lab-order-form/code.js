$(function() {
    $("input[type=number]").on("change", calculateOrderTotal);
});

function calculateOrderTotal() {
    const DONATION_PRICE = 19.99;
    const BOOK_PRICE = 39.99;

    // get book quantity and parse to number
    let bookQty = Number($("input#qty-book").val());

    // get donatio quantity and parse to number
    let donationQty = Number($("input#qty-donation").val());

    // calculate subtotal for books
    let bookTotal = bookQty * BOOK_PRICE;

    // calculate subtotal for donation
    let donationTotal = donationQty * DONATION_PRICE;

    // set book subtotal as text of the TD with id="book-total"
    // rounded to two decimal places
    $("td#book-total").text(bookTotal.toFixed(2));

    // set donation subtotal as text of the TD with id="donation-total"
    // rounded to two decimal places
    $("td#donation-total").text(donationTotal.toFixed(2));

    // calculate grand total
    let grandTotal = bookTotal + donationTotal;

    // set grand total as text of the TD with id="grand-total"
    // rounded to two decimal places
    $("td#grand-total").text(grandTotal.toFixed(2));
}