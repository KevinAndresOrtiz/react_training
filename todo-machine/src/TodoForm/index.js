import './TodoForm.css';
export function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar Cebolla para el almuerzo" />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button  type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    );
}