const question = document.querySelector('#question');
const answers = document.querySelectorAll('.answer-box');
var timer = document.querySelector('#timer-display-quiz');

let questionSet = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answerOne: 'strings',
        answerTwo: 'booleans',
        answerThree: 'alerts',
        answerFour: 'numbers',
        correctAnswer: 3,
    },
    {
        question: 'The condition in and if/else statement is enclosed with _____.',
        answerOne: 'quotes',
        answerTwo: 'curly brackets',
        answerThree: 'parenthesis',
        answerFour: 'square brackets',
        correctAnswer: 3,
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answerOne: 'numbers and strings',
        answerTwo: 'other arrays',
        answerThree: 'booleans',
        answerFour: 'all of the above',
        correctAnswer: 4,
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answerOne: 'commas',
        answerTwo: 'curly brackets',
        answerThree: 'quotes',
        answerFour: 'parenthesis',
        correctAnswer: 3,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answerOne: 'JavaScript',
        answerTwo: 'terminal/bash',
        answerThree: 'for loops',
        answerFour: 'console.log',
        correctAnswer: 4,
    }
]

var button = document.querySelector('#button');

function countdown() {

    var timeLeft = 75;
    var timeInterval = setInterval( function() {
        if (timeLeft > 0) {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
            console.log(timeLeft);
        } else {
            timer.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

window.onload = () => {
    countdown();
}

// document.addEventListener('load', countdown);