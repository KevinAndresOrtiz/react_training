import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
// import App from './App.jsx'
// import './index.css'
// import { FirstApp } from './FirstApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp counter={100} />
  </React.StrictMode>,
)
