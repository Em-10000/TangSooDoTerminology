$(function () {

    $(".home-button").click(function () {
        hideAll();
        $(".main-buttons").show();
    });

    $(".concepts-button").click(function () {
        displayDiv("#eightConcepts");
        $(".concepts-button").addClass("active");
    });

    $(".foot-button").click(function () {
        displayDiv("#footTechniques");
        $(".foot-button").addClass("active");
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