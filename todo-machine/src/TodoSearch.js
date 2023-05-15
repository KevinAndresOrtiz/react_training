import './TodoSearch.css'
export function TodoSearch() {
    return (
      <input placeholder="Cortar Cebolla" className="TodoSearch" onChange={(event) => {
                                                                        console.log('Escribiste en el todoSearch')
                                                                        console.log(event.target.value);
                                                                        }}/>
    );
  }