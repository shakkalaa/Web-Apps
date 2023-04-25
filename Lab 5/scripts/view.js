function printAttemptsRemaining(tries){
    const attemptsText = document.getElementById("attempts");
    attemptsText.innerHTML = `<h2>Time left: ${timeLeft}</h2>`;
}

function printClue(status, guess){
    const [digit100,digit10,digit1] = status =='HI' ? ['H','I','-'] : ['L','O','-'];
    document.getElementById("digit-100s").src = `assets/${digit100}.png`;
    document.getElementById("digit-10s").src = `assets/${digit10}.png`;
    document.getElementById("digit-1s").src = `assets/${digit1}.png`;

    then = Date.now();
}

function printGameOver(status){
    if (status === 'WIN'){
        var message = `<h1>You Win!</h1> <p>Got it in ${30-timeLeft} seconds.</p>` ;
    }else{
        var message = `<h1>You Lose!</h1> <p>The number was: ${passcode}</p>`;
    }
    document.body.innerHTML = message;
}

function printDigits(){
    document.getElementById("digit-100s").src = `assets/${guess.hundreds}.png`;
    document.getElementById("digit-10s").src = `assets/${guess.tens}.png`;
    document.getElementById("digit-1s").src = `assets/${guess.ones}.png`;

}
    