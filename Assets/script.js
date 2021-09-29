//When start button is pressed
    //start timer (function)
    //display random question (function)
        //If question is answered correctly, clear display and render new random question
        //If question answered incorrectly, subtract 10 seconds from timer, render new question
            //CAN'T RENDER SAME QUESTION TWICE IN ONE GAME (figure it out)
    //Log each correct answer for current game and store in variable
    //When all questions are answered or timer runs out, game ends
        //input initials and then display on "high score" section to the side
        //Sort and display high score/initials in descending order, 10 total
    //If quit/reset is pressed before the game ends, start the game function over and do not prompt for initials
//When page loads, pull up the high score list (function)

var timerElement = document.querySelector(".timer-count");
const rsBtn = document.querySelector(".reset-button");
const startBtn = document.querySelector(".start-button");
var currentQuestion = document.querySelector("#question")
var gameScore = document.querySelector(".current-score")
let answers = document.getElementById('answers');

//ar scoresList = {}
var questionIndex = 0

var highScores = localStorage.getItem("highScores")


const questionsArray = [
    {
        question: "What is Joe's favorite catchphrase?",
        answers: [
            {choice: "Cool, cool, cool"},
            {choice: "Good, good, good"},
            {choice: "Nice, nice, nice"},
            {choice: "Dope, dope, dope"},
        ],
        correct: "Cool, cool, cool"
    },
    {
        question: "Who played Dwight Schrute on 'The Office'?",
        answers: [
            {choice: "John Krasinski"},
            {choice: "Rainn Wilson"},
            {choice: "BJ Novak"},
            {choice: "Ed Helms"},
        ],
        correct: "Rainn Wilson"
    },
    {
        question: "How many blue stripes are on the American flag?",
        answers: [
            {choice: "7"},
            {choice: "6"},
            {choice: "0"},
            {choice: "13"},
        ],
        correct: "0"
    },
    {
        question: "Which of these characters is not friends with Harry Potter?",
        answers: [
            {choice: "Ron Weasley"},
            {choice: "Neville Longbottom"},
            {choice: "Hermione Granger"},
            {choice: "Draco Malfoy"},
        ],
        correct: "Draco Malfoy"
    },
    {
        question: "Which planet is the hottest?",
        answers: [
            {choice: "Venus"},
            {choice: "Saturn"},
            {choice: "Mercury"},
            {choice: "Mars"},
        ],
        correct: "Venus"
    },
]

//Loads up list of high scores and initials upon page load
//function getHighscores(){
    //score[scoresList]
    //localStorage.setItem.JSON.stringify("scores",scoresList);
//}




//starts timer and render questions functions
function startGame() {
    startBtn.style.display = "none"
    timerCount = 60;
    score = 0
    console.log(questionIndex)
    displayAnswers();
    startTimer();
}

//starts the timer for the game
function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount < 0) {
            timer.textContent === 0;
            answers.innerHTML = ""
            currentQuestion.textContent = "Game Over"
            clearInterval(timer);
            gameover();
        }
    }, 1000);
}

function displayAnswers(){
    answers.innerHTML = ""
    currentQuestion.textContent = ""
    currentQuestion.textContent = questionsArray[questionIndex].question
    var ansArr = questionsArray[questionIndex].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', checkAnswer)
    }
    )
}

function checkAnswer(event){
    if (event.target.textContent === questionsArray[questionIndex].correct){
    alert("great job!");
    score++
    questionIndex++
    displayAnswers();
    } else {
    alert("WRONG")
    timerCount -= 10
    questionIndex++
    displayAnswers();
    } 
}

function gameOver(){
    if (timerCount < 0){
        timerElement.textContent = ""
        clearInterval(timer);
    }
    answers.innerHTML = ""
    currentQuestion.textContent = "Game Over"
    setHighscores();
}
    
/*setHighscores(){
    score[scoresList]
    localStorage.setItem.JSON.stringify("scores",scoresList);

    var newScore = document.createElement("li")
}*/
startBtn.addEventListener("click", startGame)
rsBtn.addEventListener('click', function(){
    startGame();
})
//in order to store initials and scores, build and object and stringify it