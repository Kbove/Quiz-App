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

var qNum = 0
var timerElement = document.querySelector(".timer-count");
var rsBtn = document.querySelector(".reset-button");
const startBtn = document.querySelector(".start-button");
var currentQuestion = document.querySelector("#question")
// var choicesBtn = document.getElementsByClassName('btn')
let choices = document.getElementById('choices');

var highScores = localStorage.getItem("highScores")


const questionsIndex = [
    {
        question: "What is Joe's favorite catchphrase?",
        answers: ["Cool, cool, cool","Good, good, good","Nice, nice, nice","Dope, dope, dope"],
        correct: "cool, cool, cool"
    },
    {
        question: "Who played Dwight Schrute on 'The Office'?",
        answers: ["John Krasinski","Rainn Wilson","BJ Novak","Ed Helms"],
        correct: "Rainn Wilson"
    },
    {
        question: "How many blue stripes are on the American flag?",
        answers: ["7","6","0","13"],
        correct: "0"
    },
    {
        question: "Which of these characters is not friends with Harry Potter?",
        answers: ["Ron Weasley","Neville Longbottom","Hermione Granger","Draco Malfoy"],
        correct: "Draco Malfoy"
    },
    {
        question: "Which planet is the hottest?",
        answers:["Venus","Saturn","Mars","Mercury"],
        correct:"Venus"
       /*answers: [
            {choice: "Venus", correct: true},
            {choice: "Saturn", correct: false},
            {choice: "Mercury", correct: false},
            {choice: "Mars", correct: false},
        ]*/
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
            /*gameover();*/
        }
    }, 1000);
}

/*function nextQuestion (){
    resetState(e)
    displayQuestion(shuffQuest[currQuest])
}*/

function displayAnswers(){
    console.log("displaying")
    
    var ansArr = shuffledIndex[0].choices;
    ansArr.forEach(element => {
        console.log('answers', element.answers);
        console.log('value', element.correct);
        let answers = element.answers;
        let response = element.correct;

        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = answers;

        ans.appendChild(but);
        ans.addEventListener('click', function () {
          if(response) {
              
          }  
        })
        choices.appendChild(ans);



        
        
    });
    //console.log("answer array",ansArr)
    /*for (i = 0; i < ansArr.length; i++){
        choicesBtn.textContent = 
    }*/
}

function resetState() {
    
}

/*function selectAnswer(event) {
    console.log('answer selected', event.target.textContent === )

}*/

/*choicesBtn.addEventListener("click", function(){
})*/

startBtn.addEventListener("click", startGame)

