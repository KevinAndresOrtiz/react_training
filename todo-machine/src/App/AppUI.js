import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


export function AppUI() {
    const {
            loading,
            error,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
    } = useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
                        <TodoList >
                            {loading && (
                                <>
                                    <TodosLoading />
                                    <TodosLoading />
                                    <TodosLoading />
                                </>
                            )}
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
            <CreateTodoButton setOpenModal={setOpenModal} />
            {
                openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
        </>
    );
}