$(document).ready(function() {

    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystals = ["assets/images/crystal1.jpeg", "assets/images/crystal2.jpeg", "assets/images/crystal3.jpeg", "assets/images/crystal4.jpeg"]


    function start() {
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
    $("#targetNumber").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $(".score").text(counter);

    for ( i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystals[i]);
        imageCrystal.attr("data-crystalvalue", Math.ceil(Math.random() * 12));
        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $(".score").text(counter);

        if (counter === targetNumber) {
            wins++;
            counter = 0;
            $("#alert").text("You Win!!")
            $("#crystals").text("");
            start();
        } else if (counter >= targetNumber) {
            losses++;
            counter = 0;
            $("#alert").text("You Lost!")
            $("#crystals").text("");
            start();
        }
    });

};

start();


















});