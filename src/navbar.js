window.navToggle = function navToggle() {
    let btn = document.getElementById('main-menu');
    let nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
}

