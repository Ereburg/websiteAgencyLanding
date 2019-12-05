// Код, отвечающий за секцию Portfolio

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
    $('.toggles__button').click(function () {
        var get_id = this.id;

        $('.toggles__button').not($('.toggles__button .' + get_id)).removeClass('toggles__button--active');
        $('.toggles__button').$('.toggles__button .' + get_id).addClass('toggles__button--active');
    });
});


// Код, отвечающий за секцию Team

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


$("#team-member-1").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#team-member-1").click();
    }
});

$("#team-member-2").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#team-member-2").click();
    }
});
$("#team-member-3").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#team-member-3").click();
    }
});
$("#team-member-4").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#team-member-4").click();
    }
});


// Menu behavior on Scroll

var $menu = $(".header");
// var $features = $('.header .features--layout');

$(window).scroll(function () {
    if ($(this).scrollTop() > 30 && $menu.hasClass("header--static")) {
        $menu.removeClass("header--static").addClass("header--scroll");
    } else if ($(this).scrollTop() <= 30 && $menu.hasClass("header--scroll")) {
        $menu.removeClass("header--scroll").addClass("header--static");
    }
});



// Smooth Scroll

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });