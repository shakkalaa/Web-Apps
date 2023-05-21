const getMin = () => document.getElementById('min-value').value;
const getMax = () => document.getElementById('max-value').value;
const getGameID = () => document.getElementById('room-code').value;
const getGuess = () => document.getElementById('guess-input').value;

const getCallbacks = () => ({
    'new-game-button': newGameMenu,
    'start-game-button': startGame,
    'join-game-button': joinGameMenu,
    'find-game-button': findGame,
    'submit-guess-button': submitGuess,
    'reset-game-button': resetGame,
    'quit-game-button': mainMenu



});

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for (let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}
