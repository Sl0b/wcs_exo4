$(function () {
    $('.click').click(function () {
        $(this).next().slideToggle('slow');

        $(this).parent().siblings().children('p').slideUp('slow');
        return false;
    });
});

$(function () {
    $('#mouseover').mouseover(function () {
        $(this).attr('src', 'img/logo2.png');
    });
    $('#mouseover').mouseout(function () {
        $(this).attr('src', 'img/logo.png');
    });
});