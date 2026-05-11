const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
});