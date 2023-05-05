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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class RandomWordSelector {
    randomWord() {
        let index = getRndInteger(0, words.length)
        return words[index]
    }
}