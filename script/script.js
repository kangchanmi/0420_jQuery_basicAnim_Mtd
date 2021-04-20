/* eslint-disable */

$(document).ready(function () {
    $("#m1 button:eq(0)").click(function () {
        $("#m1 .box").show();
    });
    $("#m1 button:eq(1)").click(function () {
        $("#m1 .box").hide();
    });
    $("#m1 button:eq(2)").click(function () {
        $("#m1 .box").toggle("fast", "swing");
    });


    $("#m2 button:eq(0)").click(function () {
        $("#m2 .box").slideDown("fast", "swing");
    });
    $("#m2 button:eq(1)").click(function () {
        $("#m2 .box").slideUp("slow", "swing");
    });
    $("#m2 button:eq(2)").click(function () {
        $("#m2 .box").slideToggle(250, "linear");
    });


    $("#m3 button:eq(0)").click(function () {
        $("#m3 .box").fadeIn("Fast", "swing", function () {
            $(this).text("jQuery");
        });
    });
    $("#m3 button:eq(1)").click(function () {
        $("#m3 .box").fadeOut("fast", "swing", function () {
            $(this).text("내용3");
        });
    });
    $("#m3 button:eq(2)").click(function () {
        $("#m3 .box").fadeToggle("fast", "swing", function () {
            if ($(this).css("display") == "none") {
                $(this).text("내용3");
            } else {
                $(this).text("jQuery");
            }
        });
    });
});
