const body = document.querySelector('body');
const hamburger = document.querySelector('.header__nav-bar')
const header = document.querySelector('.header');


header.addEventListener('click', function() {

    if(header.classList.contains('open')) {
        body.classList.remove('noscroll')
        header.classList.remove('open')
    } else {
        body.classList.add('noscroll')
        header.classList.add('open')
    }
})
