const express = require ( 'express' );
const app = express();
const port = 3000 ;
const bodyParser = require( 'body-parser' ); 

app.get( '/' , serveIndex );
app.get ( '/contact.html' , serveContact ); 

app.post( '/contact/send' , contactHandler ); 

app.use( bodyParser . json() );
app.use( bodyParser . urlencoded({ extended: false}) ) 

app.listen( port );
console.log( `Server is running on port ${ port } ...` );

function serveIndex( request , response ){
    response.sendFile( 'index.html' , { root: __dirname }); 
} 

function serveContact( request , response ){
    response.sendFile( 'contact.html' , { root: __dirname });
} 

function contactHandler( request , response ){
    console.log( 'Received POST Request' );
    response.redirect( '/' );
}
