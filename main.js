const btn = document.querySelector('.menubar');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.snsicon');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}
)