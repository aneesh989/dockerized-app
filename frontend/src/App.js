import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Make an API call to the backend
        fetch('http://localhost:5000/api')  // Assuming your backend is running on port 5000
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>{message || "Loading..."}</h1>
        </div>
    );
}

export default App;
