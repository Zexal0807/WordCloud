import React from 'react';
import Sender from './Sender';
import Viewer from './Viewer';

function App() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');  // 'viewer' o 'sender'

    return (
        <div>
            {role === 'viewer' ? <Viewer /> : <Sender />}
        </div>
    );
}

export default App;
