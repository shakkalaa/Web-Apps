const { Strategy } = require ( 'passport-local' );
const passport = require ( 'passport' );
const users = require ( '../models/users-model' );
const bcrypt = require ( 'bcrypt' ); 

async function authenticateUser ( email , password , done ){
    const user = users . findUser ( 'email' , email );
    if ( user === undefined ){
        return done ( null , false , { message: 'No user with that email' });
    }
    if ( await bcrypt . compare ( password , user . password ) ){
        return done ( null , user );
    }
    else {
        return done ( null , false , { message: 'Password incorrect' });
    }
   } 
function setupPassport (){
    const formNames = { usernameField: 'email' , passwordField: 'password' };
    const localStrategy = new Strategy ( formNames , authenticateUser );
    passport.use ( localStrategy );
    passpor.deserializeUser ( (id,done) => done ( null , users.findUser ( 'id' ,id)) ); 
}
setupPassport ();
module.exports = passport ; 
