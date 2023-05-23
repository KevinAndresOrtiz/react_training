import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar Cebolla para el almuerzo" onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button  type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    );
}