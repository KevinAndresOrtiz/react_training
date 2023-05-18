import './App.css';
import React, {  useState } from 'react';
import {useLocalStorage} from './useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de react.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Curso 2 de react.js', completed: false },
//   { text: 'Tomar cursos de cloudguru', completed: false },
// ];


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter((value) => value.completed === true).length;
  const totalTodos = todos.length;

  useState(() => {
    console.log('looooooog2');
    console.log(totalTodos);
  }, [totalTodos]);
  const searchedTodos = todos.filter((value) => value.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));


  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  };

  const deleteTodos = (text) => {
    const todosDeleted = todos.filter((todo) => todo.text !== text);
    saveTodos(todosDeleted);
  };

  return (<AppUI setSearchValue={setSearchValue} completedTodos={completedTodos} totalTodos={totalTodos} searchedTodos={searchedTodos} completeTodos={completeTodos} deleteTodos={deleteTodos}   />);
}


export default App;
