import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:4000',{
    reconnectionDelayMax: 10000,
    auth: {
        token: "123"
    },
    query: {
        "my-key": "my-value"
    }
});

function Sender() {
    const [newWord, setNewWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newWord) {
            socket.emit('newWord', newWord);  // Invia la parola al server
            setNewWord('');  // Resetta l'input
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Invia una Parola</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newWord} 
                    onChange={(e) => setNewWord(e.target.value)} 
                    placeholder="Inserisci una parola"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Invia</button>
            </form>
        </div>
    );
}

export default Sender;
