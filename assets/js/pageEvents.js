$(function () {

    $(".home-button").click(function () {
        hideAll();
        $(".main-buttons").show();
    });

    $(".game-button").click(function () {
        var game = $(this).attr("data-game")
        displayDiv("#" + game + "Div");
        $("#" + game + "Nav").addClass("active");
    });



    function displayDiv(divName) {
        hideAll();
        $(".games-section").show();
        $(divName).show();
    }

    function hideAll() {
        $(".game").hide();
        $(".main-buttons").hide();
        $(".games-section").hide();
        $(".nav-link").removeClass("active");
    }


});