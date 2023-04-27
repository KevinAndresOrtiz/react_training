import React from 'react';
import ReactDOM  from 'react-dom/client';
import { App } from './FirstApp';
import { HelloWorld } from './HelloWorld';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <HelloWorld />
    </React.StrictMode>
);

