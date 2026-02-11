$(function () {

    $(".home-button").click(function () {
        hideAll();
        $(".main-buttons").show();
    });

    $(".game-button").click(function () {
        var game = $(this).attr("data-game")
        $("#" + game + "Nav").addClass("active");

        displayGame(game);
    });


    function displayGame(game) {
        var url = "https://www.educandy.com/site/resource_embedded.php?activity-code=" + game;

        $("#gameIFrame").attr("src", url);
        $("#gameExternalLink").attr("href", url);

        hideAll();
        $(".games-section").show();
    }


    function hideAll() {
        $(".game").hide();
        $(".main-buttons").hide();
        $(".games-section").hide();
        $(".nav-link").removeClass("active");
    }


});