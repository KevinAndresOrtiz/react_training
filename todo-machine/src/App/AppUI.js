import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

export function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos
}){
    return (
        <>
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
        </>
      );
}