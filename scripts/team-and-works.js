$(function () {
    $('.toggles button').click(function () {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.posts__item').not(get_current).hide(0);
        get_current.show(0);
    });

    $('#toggles__button--all').click(function () {
        $('.posts__item').show(0);
    });
});

$(function () {
    $('.team-members-toggles li').click(function () {
        var get_id = this.id;
        var get_current = $('.team-images .' + get_id);
        var text_current = $('.members .' + get_id);

        $('.team-images__member').not(get_current).hide(0);
        get_current.show(0);
        $('.members__item').not(text_current).hide(0);
        text_current.show(0);

        text_current.removeClass('team-members--active');
        text_current.addClass('team-members--active');
    });
});