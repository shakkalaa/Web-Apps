const shortid = require('shortid'); //import module: shortid
class Game{ //class: Game
    constructor(){ //constructor: Game
        this.games = {}; //instance var: hashmap
    } //holds all game data
    create(start, end){ //method: create
        const number = ~~(Math.random() * end + start) //generate random int
        const id = shortid.generate(); //generate random id
        let game={'number':number,'start':start,'end':end,'gameover':false}; //add to hashmap with id
        this.games[id] = game;
        console.log(this.games);
        return id;
    }

    get(id){
        if (this.games[id]){ //check ID has game data
            const {number, ...data} = this.games[id]; //Destructure game data except number
            return data; //return game data
        }
        else{ //if ID not in hashmap
            return null; //return null
        }
    }
    guess(id, guess){
        if (!this.games[id]){ //if id has no data
            return null; // then return nothing
        }
        const game = this.games[id]; //get game data from hashmap
        if (game.gameover == true){ //if game is over
            return {'guess': 'gameover'} // then it's game over
        }
        else if (game.number == guess){ //if guess is number
            game.gameover = true; // then set game as over
            return {'guess': 'correct'} // then it's correct
        }
        else if (game.number > +guess){ //if number is greater than guess
            return {'guess': 'too low'} // then it's too low
        }
        else if (game.number < +guess){ //if number is less than guess
            return {'guess': 'too high'} // then it's too high
        }
        else{ //otherwise
            return {'guess': 'error'} // then it's an error
        }

    }

    reset(id){
        if (this.games[id] && this.games[id].gameover){ //check game exists & its over
            const game = this.games[id]; //get game from hashmap
            game.number = ~~(Math.random() * game.end + game.start) //set new random int
            game.gameover = false; //set gameover to false
            const {number, ...data} = game; //destructure to remove number
            return data; //return data, without number
        }
        return null; //game not exists or not over
    } 
}
module.exports = new Game(); //export Game instance as module