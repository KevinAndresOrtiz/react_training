import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { FirstApp } from './FirstApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Mi name is Kevin' 
              subTitle='Estoy aprendiendo React' 
              name='Kevin Andres Ortiz Merchan' />
  </React.StrictMode>,
)
