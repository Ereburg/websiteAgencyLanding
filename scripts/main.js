// Меню
var menuButton = document.querySelector('.mobile-menu-button');
var menuList = document.querySelector('.menu-list');


menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (menuList.classList.contains('menu-list--show')) {
        menuList.classList.remove('menu-list--show');
        menuButton.classList.remove('mobile-menu-button--close');
    } else {
        menuList.classList.add('menu-list--show'); 
        menuButton.classList.add('mobile-menu-button--close'); 
    }
});
