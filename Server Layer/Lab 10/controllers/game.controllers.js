const game = require('../models/game.model'); //import module: game model
class Controllers{ //class: Controllers
    test(request, response){ //instance method: test
        response.json({'success': true}); //send JSON data
    }

    newGame(request, response){
        const {start, end} = request.query; //destructure min, max from Query
        const id = game.create(start, end); //invoke game's create method
        response.json({'success': true , 'gameID': id}); //send JSON data
    }

    getGame(request, response){
        const id = request.params.id; //get id from request parameters
        const data = game.get(id) //invoke game's get method
        if (data){ //if data exists
            data["success"] = true; //add 'success' to data
            response.json(data); //send as JSON data
        }
        else{ //if data not exists
            response.json({"success": false}) //send JSON data with no success
        }
    }
    guess(request, response){
        const id = request.params.id; //get id from request parameters
        const { guess } = request.query; //destructure guess from Query String
        const result = game.guess(id, guess); //invoke game's guess method
        if (result){ //if result exists
            result['success'] = true; //add success to it
            response.json(result); //send as JSON data
        }
        else{ //if null
            response.json({'success': false}) //send 'no success' as JSON data
        }
    }

    resetGame(request, response){
        const id = request.params.id; //get game id from response parameters
        const result = game.reset(id); //invoke game's reset method
        if (result){ //if result exists
            result['success'] = true; //set result with a success:true
            response.json(result) //send data as JSON
        }
        else{ //if result does not exists
            response.json( {'success':false} ); //send no success as JSON
        }
    }        
}

module.exports = new Controllers(); //export Controller instance as module