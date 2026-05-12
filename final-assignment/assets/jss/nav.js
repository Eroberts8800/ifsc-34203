const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');

if (toggle && menu)
{
    toggle.addEventListener('click', function()
    {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
    });
}