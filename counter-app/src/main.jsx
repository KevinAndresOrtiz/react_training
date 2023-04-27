import React from 'react';
import ReactDOM  from 'react-dom/client';

function App() {
    return (<h1>First hello world in react!</h1>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);