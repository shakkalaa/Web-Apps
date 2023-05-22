const express = require('express'); //import module: express
const app = express(); //express fxn to create app
const http = require('http'); //import module: http
const server = http.createServer(app); //create http server for app
const socketio = require('socket.io') //import module: socket.io
const io = socketio(server); //initialize web socket server

app.use( express.static('public') ); //use public dir to serve static files
io.on('connection', onConnection); //bind 'connection' event to callback
server.listen(3000, () => console.log('listening on *:3000') ); //server listens on port 3000

function onConnection(socket){ //handler fxn for a web socket connect
    console.log('a user connected');
    socket.on('disconnect', onDisconnect);
    socket.on('chat message', onChatMessage);

}

function onDisconnect(){
    console.log('user disconnected');
}
  
function onChatMessage(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);

}