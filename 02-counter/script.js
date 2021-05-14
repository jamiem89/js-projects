// Grab elements

const counter = document.querySelector('#counter');
const decreaseButton = document.querySelector('#decrease');
const increaseButton = document.querySelector('#increase');
const resetButton = document.querySelector('#reset');

let counterTotal = 0;

function decrease() {
    counterTotal --;
    counter.textContent = counterTotal;
    textColor(counterTotal);
}

function increase() {
    counterTotal ++;
    counter.textContent = counterTotal;
    textColor(counterTotal);
}

function reset() {
    counterTotal = 0;
    counter.textContent = counterTotal;
    textColor(counterTotal);
}

function textColor(total) {
    console.log(total);
    if(total == 0) {
        console.log(`equal zero`);
        counter.style.color = 'black';
    } else if(total > 0) {
        console.log(`less than 0`);
        counter.style.color = 'darkgreen';
    } else if(total < 0) {
        console.log(`more than zero`);
        counter.style.color = 'red';
    }
}

// Attach handlers
decreaseButton.addEventListener('click', decrease);
increaseButton.addEventListener('click', increase);
resetButton.addEventListener('click', reset);