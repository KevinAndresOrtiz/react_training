
import { useState } from 'react';
import './TodoSearch.css'
export function TodoSearch() {
    const [searchValue, setSearchValue] = useState();
    return (
      <input placeholder="Cortar Cebolla" className="TodoSearch" value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}}/>
    );
  }