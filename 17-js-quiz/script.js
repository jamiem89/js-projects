// Seciton containers
const introContainer = document.querySelector('#introContainer');
const quizContainer = document.querySelector('#quizContainer');
const outroContainer = document.querySelector('#outroContainer');
const scoreTotal = document.querySelector('#scoreTotal');
const scorePoss = document.querySelector('#scorePoss');

// Elements to interact with/be updated
const quizQuestion = document.querySelector('#questionContainer');
const quizAnswers = document.querySelector('#answerContainer');
const answerOne = document.querySelector('#quizButtonOne');
const answerTwo = document.querySelector('#quizButtonTwo');
const answerThree = document.querySelector('#quizButtonThree');
const answerFour = document.querySelector('#quizButtonFour');
const quizRestart = document.querySelector('#quizButtonRestart');

// Question category
let catQuestions = [];

// Question/score counter
let currentQuestion = 0;
let currentScore = 0;
let guessedWrong = false;
let categories = [];

// temporary questions
const allQuestions = [
    {
        question: 'What year was WP first introduced?',
        answerOne: '1992',
        answerTwo: '2000',
        answerThree: '2003',
        answerFour: '1999',
        correct: 2,
        category: 'wordpress'

    },
    {
        question: 'WordPress is a CMS',
        answerOne: 'true',
        answerTwo: 'no',
        answerThree: 'false',
        answerFour: 'yes',
        correct: 1,
        category: 'wordpress'

    },
    {
        question: 'Is wordpress a pain in the arse?',
        answerOne: 'yes',
        answerTwo: 'of course',
        answerThree: 'worse than that',
        answerFour: 'the worst thing ever',
        correct: 4,
        category: 'wordpress'

    },
    {
        question: 'Mario or Luigi',
        answerOne: 'mairo',
        answerTwo: 'mario',
        answerThree: 'looga',
        answerFour: 'luigi',
        correct: 2,
        category: 'nintendo'

    },
    {
        question: `What's yer name?`,
        answerOne: 'gregg',
        answerTwo: 'roy',
        answerThree: 'guy',
        answerFour: 'aldo',
        correct: 4,
        category: 'general'

    }
];

// Grab categories and create buttons for each
function setUpQuiz(){
    for(let i = 0; i < allQuestions.length; i++) {
        if(!categories.includes(allQuestions[i].category)) {
            categories.push(allQuestions[i].category);
        };
    };

    for(let i = 0; i < categories.length; i++) {
        let button = document.createElement('button');
        let buttonText = categories[i];
        buttonText = buttonText.charAt(0).toUpperCase() + buttonText.slice(1);
        button.classList.add('btn');
        button.innerText = buttonText;
        button.dataset.cat = categories[i];
        introContainer.appendChild(button);

        button.addEventListener('click', function() {
            setCat(this.dataset.cat);
        });
    }
}

// Prepare the questions depending on category button pressed
function setCat(cat) {
    for(let i = 0; i < allQuestions.length; i++ ) {
        if(allQuestions[i].category == cat) {
            catQuestions.push(allQuestions[i]);
        }
    }
    introContainer.classList.add('fade-out');
    introContainer.addEventListener('animationend', () => {
        introContainer.classList.remove('fade-out');
        introContainer.classList.add('inactive');
        quizContainer.classList.add('fade-in');
        quizContainer.classList.remove('inactive');
        console.log(`fading mid`);
        renderQuestions(catQuestions, currentQuestion);
    })
}

// Render the correct question
function renderQuestions(questions, questionNum) {
    guessedWrong = false;
    let questionEl = document.createElement('h2');
    questionEl.textContent = questions[questionNum].question;
    questionContainer.appendChild(questionEl);
    if(currentQuestion > 0) {
        let allQuestionTitles = document.querySelectorAll('h2');
        console.log(allQuestionTitles[0]);
        allQuestionTitles[0].classList.remove('fade-in');
        allQuestionTitles[0].classList.add('fade-out');
        console.log(allQuestionTitles[0]);
        questionEl.classList.add('fade-in');
        allQuestionTitles[0].addEventListener('animationend', function() {
            this.remove();
        });
    };
    answerOne.textContent = questions[questionNum].answerOne;
    answerOne.classList.remove('incorrect');
    answerTwo.textContent = questions[questionNum].answerTwo;
    answerTwo.classList.remove('incorrect');
    answerThree.textContent = questions[questionNum].answerThree;
    answerThree.classList.remove('incorrect');
    answerFour.textContent = questions[questionNum].answerFour;
    answerFour.classList.remove('incorrect');
}

// Progress quiz with button press
quizAnswers.addEventListener('click', (event) => {
    let buttonPressed = event.target;
    if(buttonPressed.tagName == "BUTTON") {
        if(buttonPressed.dataset.answer == catQuestions[currentQuestion].correct) {
            if(!guessedWrong) {
                currentScore++;
            };
            if(currentQuestion == (catQuestions.length - 1)) {
                quizEnd();
            } else {
                currentQuestion++;
                renderQuestions(catQuestions, currentQuestion);
            };
        } else {
            guessedWrong = true;
            buttonPressed.classList.add('incorrect');
        };
    };
});

// Display final score
function quizEnd() {
    quizContainer.classList.remove('fade-in');
    quizContainer.classList.add('fade-out');
    quizContainer.addEventListener('animationend', () => {
        console.log(`fading end`);
        quizContainer.classList.add('inactive');
        quizContainer.classList.remove('fade-out');
        outroContainer.classList.remove('inactive');
        outroContainer.classList.add('fade-in');
    });
    scoreTotal.textContent = currentScore;
    scorePoss.textContent = catQuestions.length;
    quizRestart.addEventListener('click', function() {
        outroContainer.classList.add()
        window.location.reload();
    });
}


setUpQuiz();