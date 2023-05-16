import './App.css';import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de react.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Curso 2 de react.js', completed: false },
//   { text: 'Tomar cursos de cloudguru', completed: false },
// ];



function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);

  }
  parsedTodos = JSON.parse(localStorageTodos);
  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter((value) => value.completed === true).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((value) => value.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    setTodos(newTodos);
  }; 

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

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}/>
      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
          />)
          )
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
