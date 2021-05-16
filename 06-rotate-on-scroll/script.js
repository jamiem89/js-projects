const circle = document.querySelector('.hero-circle');
let currentRotation = 0;

function circleRotate(mouseInput) {
    circle.style.translate = `rotate(${mouseInput.deltaY})`
}

window.addEventListener('wheel', (event) => {
    if(event.deltaY < 0) {
        currentRotation = currentRotation + (event.deltaY/15);
    } else if(event.deltaY > 0) {
        currentRotation = currentRotation + (event.deltaY/15);
    }
    circle.style.transform = `rotate(${currentRotation}deg)`
    console.log(`currentRotation = ${currentRotation}`);
})
