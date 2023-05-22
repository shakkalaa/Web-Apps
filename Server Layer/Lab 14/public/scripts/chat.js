const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const chat = document.getElementById('chat');
form.addEventListener('submit', submitEvent);

function submitEvent(event){
    event.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}

socket.on('chat message', appendMessage);

function appendMessage(message){
    chat.innerHTML += `<li> ${message} </li>`
    window.scrollTo(0, document.body.scrollHeight);
}