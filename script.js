$(document).ready(function () {
    $('#hide-button').click(function () {
        $(this).hide()
    });

    $('#displaymsg').click(function () {
        alert("You clicked the button! Nice. ")
    });

    $("#changeclr").click(function () {
        $(this).css("background-color", "red")
    });

    $("#submitform").click(function () {
        if (!$('#username').val() && !$('#email').val() && !$('#password').val()) {
            alert("Some fields are empty!")
        }
    });

    $('#sortlist').click(function () {
        var $list = $(".list");
        $list.children().detach().sort(function (a, b) {
            return $(a).text().localeCompare($(b).text());
        }).appendTo($list);

    });

    $('#hovertip').attr('title', 'You are hovering over me!');


    $(window).scroll(function () {
        $("#berserk").fadeIn("slow");
    });

});  