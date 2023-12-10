// main tiene un estado que guarda la función que lo modifica y la cual cambia el componente search con el setstate y luego el dato del estado que lo usará lista pokemon para hacer el fetch. 

// `https://pokeapi.co/api/v2/pokemon/${name}` URL FETCH

import React, { useState, useEffect } from "react";
import Search from "./Search";
import List from "./ListaPokemon";



const Main = () => {
  
 
  const [name, setPokemon] = useState(""); //guardamos nombre buscado en el input
  const [allPokemon, setAllPokemon] = useState([]); //todos los buscados objetos de pokemon, se setea con los datos del fetch al hacer el useEffect. SIEMPRE TIENE QUE TENER UN VALOR INICIAL PARA QUE SE PUEDA AGREGAR ELEMENTOS

  useEffect(() => {

    if(name){
      const getPokeData = async () => {
        try {
          const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
          const obj = await resp.json();
          
          setAllPokemon([...allPokemon,obj]);
          
          
        } catch (error) {
          alert('introduce un nombre de Pokemon válido');
        }
      }
      getPokeData();

    }

}, [name])  //si se produce un cambio en el name vuelve a ejecutar el useeffect y por tanto el fetch

  return <div>
    <Search set={setPokemon} />
    <List list={allPokemon}/> 

  </div>;
};

export default Main;
