const button = document.querySelector('.like');

function buttonToggle() {
    button.classList.toggle('active');
}

button.addEventListener('click', buttonToggle);