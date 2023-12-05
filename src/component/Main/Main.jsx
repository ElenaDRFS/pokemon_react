// main tiene un estado que guarda la función que lo modifica y la cual cambia el componente search con el setstate y luego el dato del estado que lo usará lista pokemon para hacer el fetch. 

import React from "react";
import Search from "./Search";
import List from "./ListaPokemon";
import { useState } from "react"

const Main = () => {

  const [pokemon, setPokemon] = useState(""); //guardamos nombre buscado en el input
  const [allPokemon, setAllPokemon] = useState([]); //todos los buscados objetos de pokemon, se setea con los datos del fetch al hacer el useEffect

  

  return <div>
    <List input={pokemon} list={allPokemon}/> 
    <Search set={setPokemon} />

  </div>;
};

export default Main;
