const tham = document.querySelector(".tham");
const menu = document.querySelector("nav");

tham.addEventListener('click', () => {
    tham.classList.toggle('tham-active');
    menu.classList.toggle('hidden');
});