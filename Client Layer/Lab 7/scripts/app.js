import * as http from './http.js' //Import http functions
const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy`; //Trivia GET endpoint
const state = {}; //Game state

const playGame = async () => { //PLAY function
    const json = await http.sendGETRequest(GET_TRIVIA); //GET Request for trivia data
    console.log(json); //Print trivia data
}

window.start = async () => { //START function
    playGame(); //call play function
}

window.addEventListener('load', start); //When window loads execute start
    