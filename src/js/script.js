const tham = document.querySelector(".tham");
const modal = document.getElementById("modal");
const mainContent = document.querySelector('main');

let isBlurred = false;

tham.addEventListener('click', () => {
    tham.classList.toggle('tham-active');
    modal.classList.toggle('hidden');

    if (!isBlurred) {
        mainContent.classList.add('blur');
        isBlurred = true;
    } else {
        mainContent.classList.remove('blur');
        isBlurred = false;
    }
});
