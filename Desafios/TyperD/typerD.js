
const TIME = 10
const TIME_INTERVALS = 1000

const WORDS_H1 = document.querySelector("#randomWord")  
const PLAYER_INPUT = document.querySelector("#player_input")
const SCORE_SPAN = document.querySelector("#score-span")  
const FINAL_SCORE_SPAN = document.querySelector("#final-score-span")  
const PROGRESS_BAR = document.querySelector("#progress-bar")
const GAME_CONTAINER = document.querySelector("#game-container")
const GAMEOVER_CONTAINER = document.querySelector("#gameover-container")
const REPLAY_BUTTON = document.querySelector("#replay-button")

var randomWordSelector = new RandomWordSelector();
var timer = new ProgressBarTimer(TIME,TIME_INTERVALS,PROGRESS_BAR,onTimerOver)

function addToDOM(word){
    WORDS_H1.textContent = word
    return word
}

function updateScore(){
    score += 1
    SCORE_SPAN.textContent = score
}

function onInputChange(e){
    if(PLAYER_INPUT.value == palabraAleatoria){
        timer.restart()
        updateScore()
        PLAYER_INPUT.value = ""
        palabraAleatoria = addToDOM(randomWordSelector.randomWord())
    }
}


function gameOver(){
    GAME_CONTAINER.style.display = "none"
    GAMEOVER_CONTAINER.style.display = "block"
    FINAL_SCORE_SPAN.textContent = score
    REPLAY_BUTTON.focus()
}

function onClickReplayButton(){
    location.reload()
}

function onTimerOver(){
    gameOver()
}

let score = 0

timer.start()

let palabraAleatoria = addToDOM(randomWordSelector.randomWord())
PLAYER_INPUT.addEventListener('input', onInputChange)
REPLAY_BUTTON.addEventListener("click", onClickReplayButton)

PLAYER_INPUT.focus()
