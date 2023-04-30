const words = [
    'flea',
    'love',
    'snow',
    'dylan',
    'funky',
    'black',
    'chili',
    'summer',
    'zephyr',
    'peppers',
    'getaway',
    'quarter',
    'stadium',
    'arcadium',
    'aeroplane',
    'unlimited',
    'plataforma5',
    'quixoticelixer',
    'californication',
    'otorrinolaringologo'
];

const WORDS_H1 = document.querySelector("#randomWord")  
const TIMER_SPAN = document.querySelector("#timeSpan")  
const SCORE_SPAN = document.querySelector("#score")  
const END_GAME_CONTAINER = document.querySelector("#end-game-container")


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function randomWord(){
    index = getRndInteger(0,words.length)
    return words[index]
}

function addToDOM(word){
    WORDS_H1.textContent = word
    return word
}

function addSecondToTimer(seconds){
    time += 3
    TIMER_SPAN.textContent = time
}

function onTextInputKeydown(e){
    let text_input = document.querySelector("#text")
    let palabraIngresada = text_input.value
    if(palabraIngresada == palabraAleatoria){
        addSecondToTimer(3)
        updateScore()
        text_input.value = ""
        palabraAleatoria = addToDOM(randomWord())
    }
}

function actualizarTiempo(){
    time -= 1
    TIMER_SPAN.textContent = time
    if(time === 0){
        clearInterval(timeInterval)
        gameOver()
    }
}

function updateScore(){
    score += 1
    SCORE_SPAN.textContent = score
}

function gameOver(){
    let timeOver_h2 = document.createElement("h2")
    timeOver_h2.textContent = "Time Over"

    let finalScore_p = document.createElement("p")
    finalScore_p.textContent = `Final Score: ${score}`

    let replay_button = document.createElement("button")
    replay_button.setAttribute("onclick","location.reload()")
    replay_button.textContent = "Volvé a empezar"

    END_GAME_CONTAINER.appendChild(timeOver_h2)
    END_GAME_CONTAINER.appendChild(finalScore_p)
    END_GAME_CONTAINER.appendChild(replay_button)
}

let score = 0
let time = 10

let palabraAleatoria = addToDOM(randomWord())


document.querySelector("input").addEventListener('keydown', onTextInputKeydown)

let timeInterval = setInterval(actualizarTiempo, 1000);