$(function () {
    $('.click').click(function () {
        $(this).next().slideToggle();

        $(this).parent().siblings().children().next().slideUp();
        return false;
    });
});