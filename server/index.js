const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Importa CORS

const app = express();
app.use(cors()); // Abilita CORS

const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: "http://localhost:3000", // Permetti il frontend su localhost:3000
		methods: ["GET", "POST"]
	}
});

// Memorizza le parole
let words = [];

io.on('connection', (socket) => {
	console.log('Un nuovo utente si è connesso');

	socket.on('viewer', () => {
		socket.emit('updateWords', words);
	});

	socket.on('newWord', (word) => {
		words.push(word);
		io.emit('updateWords', words);
	});

	socket.on('disconnect', () => {
		console.log('Un utente si è disconnesso');
	});
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`));