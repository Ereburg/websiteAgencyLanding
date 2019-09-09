var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//     pauseButton.innerHTML = 'Play';
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow() {
//     pauseButton.innerHTML = 'Pause';
//     playing = true;
//     slideInterval = setInterval(nextSlide, 2000);
// }

// pauseButton.onclick = function () {
//     if (playing) {
//         pauseSlideshow();
//     } else {
//         playSlideshow();
//     }
// };

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    // pauseSlideshow();
    nextSlide();
};
previous.onclick = function () {
    // pauseSlideshow();
    previousSlide();
};















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

link.addEventListener('click', function (evt) {
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

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
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

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    }
    if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
    }
});