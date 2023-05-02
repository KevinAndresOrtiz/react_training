import React from 'react';
import ReactDOM  from 'react-dom/client';
import { App } from './FirstApp';
// import { HelloWorld } from './HelloWorld';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title='Hola Soy Goku'/>
    </React.StrictMode>
);

