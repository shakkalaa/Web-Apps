const express = require ( 'express' );
const app = express ();
const port = 3000 ;
const userRoutes = require ( './routes/user-routes' );

function setupApp (){
    app.use( '/' , userRoutes );
}
setupApp ();
app.listen ( port , () => console . log ( `listening on... ${ port } ` ) ); 