document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.main-nav');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            var isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }
    document.querySelectorAll('[data-year]').forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });
});
