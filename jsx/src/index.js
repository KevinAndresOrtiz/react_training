import React from "react";
import ReactDOM  from "react-dom/client";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
    const inputType = 'number';
    const message = 'Enter age';
    const minValue = 5;
    return (
            <>
            <input type={inputType} min={minValue} max={100} />
            <input type={inputType} min={minValue} max={100} list={[1, 2, 3]} style={{color: 'red'}} alt={message} />
            </>
            );
}

root.render(<App />);