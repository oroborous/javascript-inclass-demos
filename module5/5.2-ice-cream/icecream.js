$(document).ready(function () {
    $("form").on("submit", orderIceCream);
    $("#style").on("change", styleChosen);
});

function styleChosen() {
    let style = $("#style").val();

    // Hide all the options and make them not required
    $("div.options").hide();

    // Then show only the one we need
    if (style === "cone") {
        $("#coneGroup").show();
    } else if (style === "dish") {
        $("#scoopsGroup").show();
    } else if (style === "sundae") {
        $("#toppingGroup").show();
    } else if (style === "malt") {
        $("#maltGroup").show();
    }
}


function orderIceCream(event) {
    event.preventDefault();

    let style = $("#style").val();
    let flavor = $("#flavor").val();

    if (style === "cone") {
        let cone = $("#cone").val();
        $("#summary").text(`One ${flavor} ${cone} ${style} coming up!`);
    } else if (style === "dish") {
        let scoops = $("#scoops").val();
        $("#summary").text(`One ${scoops}-scoop ${style} of ${flavor} coming up!`);
    } else if (style === "sundae") {
        let topping = $("#topping").val();
        $("#summary").text(`One ${flavor} ${style} with ${topping} coming up!`);
    } else if (style === "malt") {
        let malt = $("#malt").val();
        $("#summary").text(`One ${flavor} ${style} with ${malt} ${style} coming up!`);
    }

}