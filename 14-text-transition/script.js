const container = document.querySelector(`.container`);
const text = document.querySelectorAll('h1');
let stage = 0;
const stageContent = [
    `This is it, Madeline.`,
    `Just breathe.`,
    `Why are you so nervous?`,
    `Focus on your breathing.`,
    `You're going to do just fine.`
]
const particleNumber = 20;


// Prepare the text content, add it to the page
// Fire particle function
function prepareStage() {
    for(let i = 0; i < particleNumber; i++) {
        particleHandler();
    }
    if(stage < stageContent.length) {
        const stageText = document.createElement('h1');
        stageText.textContent = stageContent[stage];
        stageText.classList.add('fade-in');
        container.appendChild(stageText);
        stageText.addEventListener('click', addAnim);
    }
}

// Add fade-out animation on click and
// Remove element when animation ends
function addAnim(){
    this.classList.add('fade-out');
    this.addEventListener('animationend', () => {
        this.remove();
        stage++;
        prepareStage(stage)
      });
};

// Create particles
function particleHandler() {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Create a random sized particle
    let size = Math.floor(Math.random() * 60) + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.floor(Math.random() * 100)}%`;
    particle.style.top = `${Math.floor(Math.random() * 100)+10}%`;
    particle.style.opacity = 0;

    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        top: `${particle.style.top}`,
        opacity: 0,
      },
      {
        opacity: 100,
      },
      {
        top: `0%`,
        opacity: 0,
      },

    ], {
      duration: 1250,
      delay: `${Math.floor(Math.random() * 1150)}`,
      easing: 'linear',
      fill: 'forwards'
    });

    container.appendChild(particle);
    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      particle.remove();
    };
}

setTimeout(function() {
    prepareStage(stage);
}, 500);