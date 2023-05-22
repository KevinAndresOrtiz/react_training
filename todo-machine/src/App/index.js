import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de react.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Curso 2 de react.js', completed: false },
//   { text: 'Tomar cursos de cloudguru', completed: false },
// ];


function App() {

  return (
  <TodoProvider>
    <AppUI  />
  </TodoProvider>
  );
}


export default App;
