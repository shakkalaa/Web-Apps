var express = require( 'express' );
var router = express.Router();
const controller = require( '../controllers/user-controllers' );
const { checkAuthenticated , checkNotAuthenticated } = require ( '../middlewares/auth' ); 
router.get( '/' , checkAuthenticated, controller.getIndex );
router.get ( '/login' , checkNotAuthenticated , controller . getLogin );
router.get ( '/register' , checkNotAuthenticated , controller . getRegister );
router.post ( '/login' , checkNotAuthenticated , controller . postLogin );
router.post ( '/register' , checkNotAuthenticated , controller . postRegister ); 
router.post ( '/logout' , checkAuthenticated , controller . postLogout ); 

module.exports = router 