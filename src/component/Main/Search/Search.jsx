// tendrá un estado en el que se guarda el pokemon buscado para luego resetearlo tras hacer la búsqueda
// comunicación sibling sibling con lista pokemon, es decir comparten el estado de main 
import React, {useState} from "react";



const Search = ({set}) => {

  const[input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!event.target.pokemonName.value){
      alert("Introduce el nombre de un pokemon")
    }else{
    set(event.target.pokemonName.value) //rellenamos el estado de main con lo que se ponga en el input
    setInput("")
    
    
    }

   
}

  return <form onSubmit={handleSubmit}>

    <input required type="text" placeholder="Nombre del Pokemon" name="pokemonName" value={input} onChange={(e) => setInput(e.target.value)}/>
    <button type="submit">Buscar</button>

  </form>;
};

export default Search;


// RESETEAR INPUT, el problema que había era que no tenía "sincronizado" el estado con los cambios que se hacían en el input, porque no había onchange, de esa forma siempre le decimos que el value es el input, es decir "" por eso no escribía. Sin embargo, con el onchange, sincronizamos lo que escrinimos con el estado del componente, y así, se rellena, y cuando hacemos el submit le decimos oye no, que quiero que el estado sea vacío, y al ser vacío el estado también lo será el input, ya que van de la mano sincronizados. 