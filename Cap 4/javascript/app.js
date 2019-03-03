var alternator = document.querySelector('.js-switch-button');
alternator.onclick = function () {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--stated');
};