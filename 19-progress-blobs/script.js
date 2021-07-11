const progressButton = document.querySelector(`#progressButton`);
const progressBlobs = document.querySelectorAll(`.progress-bar span`);
const progressBar = document.querySelector(`.progress-bar__fill`);

// Calculate how much to increment progress bar
const increment = 100 / (progressBlobs.length - 1);

// Set initial stage
let stage = 0;

// Increment width, add active classes
function progress() {
    stage++;
    if(stage >= progressBlobs.length) {
        reset();
    } else {
        progressBlobs[stage].classList.add('active');
        let progressWidth = increment * stage;
        console.log(progressWidth);
        progressBar.style.width = `${progressWidth}%`;
    }
}

// Reset stage counter, remove active classes and reset width
function reset() {
    stage = 0;
    for(let i = 1; i < progressBlobs.length; i++) {
        progressBlobs[i].classList.remove('active');
    }
    progressBar.style.width = `0%`;
}

// Add click event to button
progressButton.addEventListener('click', () => {
    progress();
});