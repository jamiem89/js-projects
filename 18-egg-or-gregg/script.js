const gameArea = document.querySelector('.game__area');
const gamePieces = document.querySelectorAll('.game__mole');
const currentScoreText = document.querySelector('#currentScore');
let gameTiming = 650;
let lastActive = 0;
let currentScore = 0;
let counter = 0;

function randomNumber (pieces) {
    return Math.floor(Math.random() * (pieces));
}

function setPieceType() {
    return Math.random() < 0.5 ? 'egg' : 'gregg';
}

function randomPop() {
    let rand = randomNumber(gamePieces.length);
    if (lastActive !== rand) {
        lastActive = rand;
        showPiece(rand);
    } else {
        randomPop();
    }
}

function showPiece(index) {
    let activePiece = gamePieces[index];
    activePiece.dataset.type = setPieceType();
    activePiece.dataset.scored = false;
    activePiece.classList.remove('cracked');
    activePiece.classList.add('pop-up');
    setTimeout(function() {
        hidePiece(activePiece);
    }, gameTiming);
}

function hidePiece(activePiece) {
    activePiece.classList.add('pop-down');
    activePiece.classList.remove('pop-up');
    setTimeout(
        function() {
            activePiece.classList.remove('pop-down');
            activePiece.removeAttribute('data-type');
        }, gameTiming);
}

function successClick() {
    console.log(event.target);
    currentScore += 50;
    event.target.dataset.scored = true;
    event.target.classList.add('cracked');
    console.log(currentScore);
    currentScoreText.textContent = currentScore;
}


// Game timer thing

setInterval(function(){
        randomPop();
}, gameTiming);

// Listen for click event

gameArea.addEventListener('click', function() {
    if(event.target.tagName == 'SPAN' && event.target.dataset.scored !== 'true' && event.target.dataset.type == 'egg') {
        successClick();
    }
})