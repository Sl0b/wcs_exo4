$(function () {
    $('.click').click(function () {
        $(this).next().slideToggle('slow');

        $(this).parent().siblings().children('p').slideUp('slow');
        return false;
    });
});