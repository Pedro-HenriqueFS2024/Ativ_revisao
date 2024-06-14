document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('message', event => {
        const message = document.createElement('div');
        message.textContent = event.data;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            socket.send(message);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
