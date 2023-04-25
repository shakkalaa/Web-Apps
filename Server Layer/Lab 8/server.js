const http = require ( 'http' );
const hostname = '127.0.0.1' ; //or 'localhost'
const port = 3000 ; 

const server = http . createServer ( httpHandler )
server . listen ( port , hostname , serverMessage ) 


function httpHandler ( request , response ){
    response . statusCode = 200 ; //Status Code: 200 - Success
    response . setHeader ( 'Content-Type' , 'text/plain' ); //Response Content Type: text
    response . end ( 'Hello World \n ' ); //End Response, pass data
} 

function serverMessage (){
    console . log ( `Server running at http:// ${ hostname } : ${ port } /` )
} 