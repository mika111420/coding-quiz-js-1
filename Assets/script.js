
var startPageEl = document.querySelector('.start-page');
var quizPageEl = document.querySelector('.app');

var startButtonEl = document.querySelector('.start-button');
var highScore = document.querySelector('.high-score-page');
var timerEl = document.getElementById("countDownDisplay")
var choiceOne = document.getElementById("choiceOne");
var choiceTwo = document.getElementById("choiceTwo");
var choiceThree = document.getElementById("choiceThree");
var choiceFour = document.getElementById("choiceFour")
var timerID;
var timeLeft = 180;

var currentQuestion = 0


choiceOne.addEventListener("click", checkanswer);
choiceTwo.addEventListener("click", checkanswer);
choiceThree.addEventListener("click", checkanswer);
choiceFour.addEventListener("click", checkanswer);

startButtonEl.addEventListener('click',startQuiz);

function startQuiz (){
    startPageEl.style.display = 'none';
    quizPageEl.style.display = 'block';
    timerEl.textContent = startSeconds
    timerID = setInterval(countdown,1000);
}
function countdown(){
    startSeconds--;
    timerEl.textContent = startSeconds;
    if(startSeconds <= 0){
        clearInterval(timerID)
    }
}

function decreaseTime(){
    timeLeft -= 10;
    if (timeLeft<= 0) {
        console.log("Time is up!")
    }
}

function checkAnswer(){
    var currentQuestion = questions[currentQuestion];
    if (answer === currentQuestion.true) {
        console.log("Correct answer");
        currentQuestion++;
    } else{
        decreaseTime();
        console.log("Wrong answer");
        currentQuestion++;
    }
    if (currentQuestion === questions.length){
        highScore.style.display = 'block';
    }
}


let questions= [
    {
        question: "Which of the following is an element for the box model?",
        answers: [
            { text: "Margin", correct: true},
            { text: "Absolutes", correct: false},
            { text: "Psuedo-class", correct: false},
            { text: "Flex", correct: false},
        ]
    },
    {
        question: "What is an array?",
        answers: [
            { text: "A list of separated operators", correct: false},
            { text: "A list of separated values", correct: true},
            { text: "A list of console.logs", correct: false},
            { text: "A grocery list", correct: false},
        ]
    },
    {
        question: "What is a Boolean value?",
        answers: [
            { text: "A value with a string", correct: false},
            { text: "A value with user input", correct: false},
            { text: "A true or false value", correct: true},
            { text: "A if, else condition", correct: false},
        ]
    },
    {
        question: "Which of the following defines what DOM stands for?",
        answers: [
            { text: "Document Override Model", correct: false},
            { text: "Days on Market", correct: false},
            { text: "Document Object Maker", correct: false},
            { text: "Document Object Model", correct: true},
        ]
    }
];

var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");

// questionElement.innerText=questions[0].question



