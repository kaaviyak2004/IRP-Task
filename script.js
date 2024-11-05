$(document).ready(function() {
    $(".rarity-circle").click(function() {
        let selectedColor = $(this).data("color");

        $(".product-card").each(function() {
            let cardColor = $(this).data("color");
            if (cardColor === selectedColor) {
                $(this).find(".card-line").css("background-color", selectedColor);
            } else {
                $(this).find(".card-line").css("background-color", "lightgray"); // Reset other colors
            }
        });
    });

    $("#clear-filters").click(function() {
        $(".product-card .card-line").css("background-color", "lightgray");
    });
});
