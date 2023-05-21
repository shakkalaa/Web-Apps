var express = require('express'); //import module: express
var router = express.Router(); //initialize Router

const {resetGame, guess, getGame, test, newGame} = require('../controllers/game.controllers'); //import test function

router.get('/test', test); //endpoint for test()
router.get('/new', newGame);
router.get('/:id', getGame); //define variable route with colon(:)
router.get('/:id/guess', guess); //define variable route with colon(:)
router.get('/:id/reset', resetGame); //define variable route with colon(:)

module.exports = router; //export router as module