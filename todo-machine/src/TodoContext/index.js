import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = createContext();

export function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const completedTodos = todos.filter((value) => value.completed === true).length;
    const totalTodos = todos.length;
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
  
    return (
       <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos
       }}>
        {
            children
        }
       </TodoContext.Provider> 
    );
}