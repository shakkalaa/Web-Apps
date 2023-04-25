initControls();

function initControls(){
    const button = document.getElementById("guess-button");
    button.addEventListener("click", buttonEvent);

    const up100s = document.getElementById("up-100s");
    const up10s = document.getElementById("up-10s");
    const up1s = document.getElementById("up-1s");
    up100s.addEventListener("click", () => incrementEvent('hundreds'));
    up10s.addEventListener( "click", () => incrementEvent('tens') );
    up1s.addEventListener( "click", () => incrementEvent('ones') );

    const down100s = document.getElementById("down-100s");
    const down10s = document.getElementById("down-10s");
    const down1s = document.getElementById("down-1s");
    down100s.addEventListener("click", () => decrementEvent('hundreds') );
    down10s.addEventListener( "click", () => decrementEvent('tens') );
    down1s.addEventListener( "click", () => decrementEvent('ones') );

}

function buttonEvent(){
    /*const hundreds = document.getElementById("digit-100s");
    const tens = document.getElementById("digit-10s");
    const ones = document.getElementById("digit-1s"); */
    const number = guess.toString();

    guessNumber(number)
}

function incrementEvent(key){
    guess.increment(key);
    printDigits();
}

function decrementEvent(key){
    guess.decrement(key);
    printDigits();
}
    
    