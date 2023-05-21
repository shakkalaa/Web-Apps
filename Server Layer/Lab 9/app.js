const express = require ( 'express' );
const app = express();
const port = process.env.PORT || 3000 ; 
const bodyParser = require( 'body-parser' ); 
const submissions = []; 
const path = require( 'path' ); 


app.get( '/' , serveIndex );
app.get ( '/contact.html' , serveContact ); 
app.get ( '/submissions' , serveSubmissions ); 

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

function serveSubmissions( request , response ){
    response.json ( submissions );
} 

function contactHandler( request , response ){
    submissions . push ( request . body ); 
    response.redirect( '/' );
}
