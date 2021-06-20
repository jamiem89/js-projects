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
        question: 'Where is speed freak Guy Martin from?',
        answerOne: 'Grimsby',
        answerTwo: 'Scunthorpe',
        answerThree: 'Hull',
        answerFour: 'Doncaster',
        correct: 1,
        category: 'Famous Guys'

    },
    {
        question: 'Which of these bands is led by a Guy?',
        answerOne: 'Hot Chip',
        answerTwo: 'The Hold Steady',
        answerThree: 'Knee',
        answerFour: 'Elbow',
        correct: 4,
        category: 'Famous Guys'

    },
    {
        question: 'The Guy Fawkes gunpowder plot was in which year?',
        answerOne: '1922',
        answerTwo: '1402',
        answerThree: '1605',
        answerFour: '1801',
        correct: 3,
        category: 'Famous Guys'

    },
    {
        question: 'Guy Ritchie directed which of these films?',
        answerOne: 'Snatch',
        answerTwo: 'Toy Story',
        answerThree: 'Chock, Block and Two Smoking Squirrels',
        answerFour: 'The Emoji Movie',
        correct: 1,
        category: 'Famous Guys'

    },
    {
        question: 'Guy Fieri is the mayor of which town?',
        answerOne: 'Funky Town',
        answerTwo: 'Sunny Town',
        answerThree: 'Boggy Bottom',
        answerFour: 'Flavor Town',
        correct: 4,
        category: 'Famous Guys'

    },
    {
        question: `Mark Zuckerberg is jokingly rumoured to be what?`,
        answerOne: 'Myspace Tom',
        answerTwo: 'A privacy enthusiast',
        answerThree: 'A nice bloke',
        answerFour: 'A robot',
        correct: 4,
        category: 'Famous Marks'

    },
    {
        question: 'Marc Marquez is a world champion, what?',
        answerOne: 'Olympic gymnast',
        answerTwo: 'Card shuffler',
        answerThree: 'Moto GP rider',
        answerFour: 'Air guitarist',
        correct: 3,
        category: 'Famous Marks'

    },
    {
        question: 'Mark ____ is a member of Dire Straits?',
        answerOne: 'Nibbler',
        answerTwo: 'Knopfler',
        answerThree: 'Gobbler',
        answerFour: 'Tropflor',
        correct: 2,
        category: 'Famous Marks'

    },
    {
        question: 'Mark Bolan is a ___?',
        answerOne: 'T Rex',
        answerTwo: 'French delicacy',
        answerThree: 'Sovereign state',
        answerFour: 'Aardvark',
        correct: 1,
        category: 'Famous Marks'

    },
    {
        question: 'Mark Twain is famous for writing ___?',
        answerOne: 'Katie Price: Reborn',
        answerTwo: 'JavaScript for Designers',
        answerThree: 'Fear and Loathing in Las Vegas',
        answerFour: 'Huckleberry Finn',
        correct: 4,
        category: 'Famous Marks'

    },
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