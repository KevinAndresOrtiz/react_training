import React from 'react';
import ReactDOM  from 'react-dom/client';
// import { App } from './FirstApp';
// import { HelloWorld } from './HelloWorld';
import './style.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp counter={0} />
    </React.StrictMode>
);

