async function startGame(){
    min = getMin();
    max = getMax();
    const url = `http://localhost:3000/api/game/new?start=${min}&end=${max}`;
    const response = await fetch(url);
    const data = await response.json();
    gameID = data.gameID;
    viewGame();
}

async function findGame(){
    gameID = getGameID();
    const response = await fetch(`http://localhost:3000/api/game/${gameID}`);
    const data = await response.json();
    if (data.success){
        min = data.start;
        max = data.end;
        gameover = data.gameover;
        viewGame();
    }
    else{
        mainMenu();
    }
}

async function submitGuess(){
    const guess = getGuess();
    const url = `http://localhost:3000/api/game/${gameID}/guess?guess=${guess}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.success){
        switch(data.guess){
            case "correct": gameOverMenu("You win!"); break;
            case "gameover": gameOverMenu("You lose!"); break;
            default: viewClue(data.guess, guess)
        }
    }
}

async function resetGame(){
    const url = `http://localhost:3000/api/game/${gameID}/reset`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.success){
        gameover = data.gameover;
        viewGame();
    }
}
    