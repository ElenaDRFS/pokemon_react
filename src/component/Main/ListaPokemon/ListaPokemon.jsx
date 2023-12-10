// coge los datos del estado de main para pintarlos, el array de datos, los mapea y coge lo que le interesa, y eso que coge se lo pasará a las tarjetas para pintarlo


import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card/Card";


const ListaPokemon = ({list}) => {
  

// filtramos el estado del componente main para pintar los datos sin repetir. como los pokemon tiene un id concreto le decimos que si ya exista no le incluya

  const uniqueData = new Set(); //Un Set en JavaScript es una colección de valores únicos, lo que significa que no puede contener elementos duplicados
  const uniqueArray = list.filter(obj => {
    if(!uniqueData.has(obj.id)){
      uniqueData.add(obj.id)
      return true; //true, no está el id en el nuevo set creado así que lo añadimos
    }
    alert('ya has buscado ese pokemon') //ese id ya se encontró por lo que no se añade
    return false
  });
  
   
 
  // una vez filtrado mapeamos ese resultado para poder pasarlo al componente de la tarjeta

  const arrayMap = () => {


    return uniqueArray.map(obj => (
      <Card  
       key = {uuidv4()}
       data ={obj}
       

      />
      
      
    ))
  }



  return <section> 

    
    
    {arrayMap()}
    
    
  
  </section>;
};

export default ListaPokemon;
