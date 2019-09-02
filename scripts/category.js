$(function() {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.posts__item').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#toggles__button--all').click(function() {
        $('.posts__item').show(500);
    });
});