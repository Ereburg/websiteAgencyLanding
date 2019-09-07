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


// Отмена действий по умолчанию

var link = document.querySelector('.user-link');
var popup = document.querySelector('.modal-login');
var close = document.querySelector('.modal-close');

var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');

var storage = localStorage.getItem('login');
// Проверим можно ли использовать локальное хранилище
var isStorageSupport = true;
var storageLocal = '';

try {
    storageLocal = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt){
    // evt.preventDefault();
    // console.log(login.value);
    // console.log(password.value);
    if (!login.value || password.value) {
        evt.preventDefault();
        console.log('Введите хоть что-то');
        popup.classList.add('modal-error');
    } else { 
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    }
    if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
    }
});