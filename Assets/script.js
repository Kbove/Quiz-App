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
var rsBtn = document.querySelector(".reset-button");
const startBtn = document.querySelector(".start-button");
var currentQuestion = document.querySelector("#question")
let answers = document.getElementById('answers');



var highScores = localStorage.getItem("highScores")


const questionsIndex = [
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
        /*question: "How many blue stripes are on the American flag?",
        answers: [
            {choice: "7", correct: false},
            {choice: "6", correct: false},
            {choice: "0", correct: true},
            {choice: "13", correct: false},
        ]*/
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
        /*question: "Which of these characters is not friends with Harry Potter?",
        answers: [
            {choice: "Ron Weasley", correct: false},
            {choice: "Neville Longbottom", correct: false},
            {choice: "Hermione Granger", correct: false},
            {choice: "Draco Malfoy", correct: true},
        ]*/
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

var timer;
var timerCount;

//Loads up list of high scores and initials upon page load
function highscores(){

}

//starts timer and render questions functions
function startGame() {
    startBtn.style.display = "none"
    timerCount = 60;
    score = 0
    shuffledIndex = questionsIndex.sort(()=>Math.random() - .5)
    console.log(shuffledIndex)
    currentQuestion.textContent = shuffledIndex[0].question
    displayAnswers();
    startTimer();
}

//starts the timer for the game
function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            gameover();
        }
    }, 1000);
}

/*function nextQuestion (){
    resetState(e)
    displayQuestion(shuffQuest[currQuest])
}*/
function displayAnswers(){
    var ansArr = shuffledIndex[0].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', function selectAnswer(event){          
            checkAnswer(event);
        })
    }
    )
}

function checkAnswer(event){
    if (event.target.textContent === shuffledIndex[0].correct){
    alert("great job!");
    score++
    nextQuestion1();
    } else {
    alert("WRONG")
    timerCount -= 30
    nextQuestion1();
    } 
}

function nextQuestion1(){
    currentQuestion.textContent = shuffledIndex[1].question
    var ansArr = shuffledIndex[1].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', function selectAnswer1(event){
            checkAnswer1(event);
            
        })
    }
    )
}

function checkAnswer1(event){
    if (event.target.textContent === shuffledIndex[1].correct){
    alert("great job!");
    score++
    nextQuestion2();
    } else {
    alert("WRONG")
    timerCount -= 30
    nextQuestion2();
    } 
}

function nextQuestion2(){
    currentQuestion.textContent = shuffledIndex[2].question
    var ansArr = shuffledIndex[2].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', function selectAnswer2(event){
            checkAnswer2(event);
            
        })
    }
    )
}

function checkAnswer2(event){
    if (event.target.textContent === shuffledIndex[2].correct){
    alert("great job!");
    score++
    nextQuestion3();
    } else {
    alert("WRONG")
    timerCount -= 30
    nextQuestion3();
    } 
}

function nextQuestion3(){
    currentQuestion.textContent = shuffledIndex[3].question
    var ansArr = shuffledIndex[3].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', function selectAnswer2(event){
            checkAnswer3(event);
            
        })
    }
    )
}

function checkAnswer3(event){
    if (event.target.textContent === shuffledIndex[3].correct){
    alert("great job!");
    score++
    nextQuestion4();
    } else {
    alert("WRONG")
    timerCount -= 30
    nextQuestion4();
    } 
}

function nextQuestion4(){
    currentQuestion.textContent = shuffledIndex[4].question
    var ansArr = shuffledIndex[4].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', function selectAnswer2(event){
            checkAnswer4(event);
            
        })
    }
    )
}

function checkAnswer4(event){
    if (event.target.textContent === shuffledIndex[4].correct){
    alert("great job!");
    score++
    gameOver();
    } else {
    alert("WRONG")
    timerCount -= 30
    gameOver();
    } 
}

function gameOver(){
    var lastChoices = document.querySelector("#answers");
    lastChoices.style.display="none"
    clearInterval(timer);
    localStorage.setItem("score",score);

}
/*for (i = 0; i < ansArr.length; i++){
        choicesBtn.textContent = 
    }*/

/*function resetState() {
    
}*/



/*choicesBtn.addEventListener("click", function(){
})*/

startBtn.addEventListener("click", startGame)

