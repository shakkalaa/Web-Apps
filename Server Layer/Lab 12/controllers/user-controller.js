class UserControllers {
    getIndex( request , response ){
    response.render( 'index.ejs' );
    }
}
module.exports = new UserControllers (); 
   