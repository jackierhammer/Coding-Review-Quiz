var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer-one');
var answer2 = document.querySelector('#answer-two');
var answer3 = document.querySelector('#answer-three');
var answer4 = document.querySelector('#answer-four');
var timer = document.querySelector('#timer-display-quiz');

// This array stores the question objects for the quiz. Each object contains the questions, choices, and correct answer index
var questionSet = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answerOne: 'strings',
        answerTwo: 'booleans',
        answerThree: 'alerts',
        answerFour: 'numbers',
        correctAnswer: 'alerts',
    },
    {
        question: 'The condition in and if/else statement is enclosed with _____.',
        answerOne: 'quotes',
        answerTwo: 'curly brackets',
        answerThree: 'parenthesis',
        answerFour: 'square brackets',
        correctAnswer: 'parenthesis'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answerOne: 'numbers and strings',
        answerTwo: 'other arrays',
        answerThree: 'booleans',
        answerFour: 'all of the above',
        correctAnswer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answerOne: 'commas',
        answerTwo: 'curly brackets',
        answerThree: 'quotes',
        answerFour: 'parenthesis',
        correctAnswer: 'quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answerOne: 'JavaScript',
        answerTwo: 'terminal/bash',
        answerThree: 'for loops',
        answerFour: 'console.log',
        correctAnswer: 'console.log',
    }
];

// Helper function that writes the question and answer content onto the page
function renderQuestion(questionIndex) {
    if (questionIndex == questionSet.length) {
        console.log("game over");
        localStorage.setItem('finalScore', timeLeft);
        window.location.href = "./scoreboard.html";
    }
    var currentQuestion = questionSet[questionIndex];
    question.textContent = currentQuestion['question'];
    answer1.textContent = currentQuestion['answerOne'];
    answer2.textContent = currentQuestion['answerTwo'];
    answer3.textContent = currentQuestion['answerThree'];
    answer4.textContent = currentQuestion['answerFour'];
    var choiceBtn = document.querySelectorAll(".answer-box");
    choiceBtn.forEach(function(btnEl){
        btnEl.onclick = checkAnswer;
     })
}

function checkAnswer(event) {
    event.preventDefault();
    // console.log(event.target.innerText);
    var chosenBtn = this.innerText;
    if (chosenBtn == questionSet[questionIndex].correctAnswer) {
        questionIndex++;
        renderQuestion(questionIndex);
    } else {
        questionIndex++;
        timeLeft -= 10;
        renderQuestion(questionIndex);
    }
    //if else statement to compare to correct answer
}

function countdown() {

    var timeInterval = setInterval(function () {
     //   renderQuestion(questionIndex);
        if (timeLeft > 0) {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

var questionIndex = 0;
var timeLeft = 75;
// Starts the timer and quiz as soon as the quiz page loads 
window.onload = () => {
    renderQuestion(questionIndex);
    countdown();
}

