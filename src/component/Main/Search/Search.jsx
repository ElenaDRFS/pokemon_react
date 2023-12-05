// tendrá un estado en el que se guarda el pokemon buscado, además almacenará en otro estado todos los pokemon que se busquen.
// comunicación sibling sibling con lista pokemon, es decir comparten el estado de main 
import React from "react";



const Search = ({set}) => {


const handleSubmit = (event) => {
  event.preventDefault();
  if(!event.target.pokemonName.value){
    alert("Introduce el nombre de un pokemon")
  }else{
  set(event.target.pokemonName.value) //rellenamos el estado con lo que se ponga en el input

  }
  
}


  return <form onSubmit={handleSubmit}>

    <input type="text" placeholder="Nombre del Pokemon" name="pokemonName"/>
    <button type="submit">Buscar</button>

  </form>;
};

export default Search;
