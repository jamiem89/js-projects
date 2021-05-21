const gameArea = document.querySelector('.container');
const maxAnswer = 50;
let numberOfPanels = 4;


// Create the game elements and place them on the page

function gameSetUp() {
    for(let i = 0; i < numberOfPanels; i++) {
        // Set the panels secret number
        let panelAnswer = Math.floor(Math.random() * (+maxAnswer - +1) + +1);

        // Create panel HTML
        let panelHTML = document.createElement('div');
        panelHTML.dataset.matched = 'false';
        let panelInner = document.createElement('span');
        panelInner.textContent = '0';
        panelInner.setAttribute('data-answer', `${panelAnswer}`);
        panelInner.setAttribute('data-matched', `false`);
        panelHTML.appendChild(panelInner);
        gameArea.appendChild(panelHTML);
    }
}

// Handle the scroll
function updatePanel(event) {
    // Get the correct HTML element
    let currentPanel;
    if(event.target.childElementCount == 0) {
        currentPanel = event.target;
    } else if(event.target.childElementCount == 1) {
        currentPanel = event.target.firstElementChild;
    }
    let currentParent = currentPanel.parentNode;

    if(currentParent.dataset.matched == 'false') {
        // Find the answer from the current HTML element
        let currentAnswer = currentPanel.dataset.answer;
        let currentSpanValue = parseInt(currentPanel.textContent);

        // Change the spans value on scroll.
        currentSpanValue = currentSpanValue + Math.floor(event.deltaY);
        console.log(event.deltaY);
        currentPanel.textContent = currentSpanValue;

        // Reset value is goes above maximum answer
        if(currentSpanValue > maxAnswer) {
            currentPanel.textContent = 0;
        } else if(currentSpanValue < 0) {
            currentPanel.textContent = maxAnswer;
        }

        // Check is value matches current answer
        if(parseInt(currentPanel.textContent) == currentAnswer) {
            currentPanel.classList.add('matched');
            currentPanel.setAttribute('data-matched', 'true');

            setTimeout(function() {
                if(parseInt(currentPanel.textContent) == currentAnswer) {
                    currentParent.dataset.matched = 'locked';
                    currentParent.classList.add('locked-in');
                    currentPanel.classList.remove('matched');
                }
            }, 750);

        } else {
            currentPanel.classList.remove('matched');
            currentPanel.dataset.matched = false;
        }
    }
}






// Initialise the game
gameSetUp();

// Listen for scroll
window.addEventListener('wheel', updatePanel);
