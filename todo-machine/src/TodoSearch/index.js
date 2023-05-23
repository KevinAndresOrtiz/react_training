import { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
export function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    return (
      <input placeholder="Cortar Cebolla" className="TodoSearch" value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}}/>
    );
  }