// cada tarjeta de pokemon 
import React from "react";
import Swal from "sweetalert2";



// formas de condicionar en react en el return
// {condicion && (<div></div>)}
// {isLoading ? (<div>cargando...</div>) : (<div>datos</div>)}


const Card = ({data}) => {



  

  // const typesClasses = {
  //   normal: 'normal card '
  // }

   // datos no modificar: experience, height, weight, id, name
   // datos a modificar: type, stats, img, items  


  const formatType = () => {

    // FALTA POR TERMINAR
    // const showColor = (type) => {
    //   if (type === 'poison') {
    //     return 'poisonClass';
    //   } else if (type === 'grass') {
    //     return 'grassClass';
    //   } else if (type === 'normal'){
    //     return 'clasePorDefecto';
    //   } else if (type === 'electric') {
    //     return 'grassClass';
    // }else {
    //   return
    // }
    // }
    
    const typeArrray = data.types;

    // recorremos los datos con el map apra así devolver directamente unos divs con los resultados, y no solo el texto, para luego poder darle algún css diferente. El parámetro i, sirve para que react sepa por qué iteracción va ya que es el index único de cada elemento que estamos recorriendo, en vez de crear uno nuevo con el uuid podemos usar este, así solo la tarjeta tendrá un identificar único creado por uuid pero no cada elemento de la tarjeta, sería absurdo. Si se quiere añadir lógica de condicionales se debe de hacer antes del return de HTML. Otra cosa improtante, el paréntesis en el return se usa para indicar que lo que se va a devolver sea tratado como bloque de código, en este caso para devolver HTML. También se puede hacer de la forma normal solo que el return no sería en una sola línea, sino que iría dentro de el map, es decir, mapea los datos (función flecha) y { return HTML }

    // La otra opción es recorrerlo de manera normal y sacar los datos en un array de datos 
    // for(const index of typeArrray){
    //   result.push(index.type.name)
    // }
    // return result;

    return typeArrray.map((index, i) => (  

      <p className="type-p" key={i}>{index.type.name}</p>

    )); 

    
    
    } 
  
  
  
  const formatStats = () => {

    const statsArray = data.stats;
    

    return statsArray.map((index, i)=> (
      <article key={i}>{index.stat.name}: {index.base_stat}</article>
      
    ))

  } 

  const formatItems = () => {
    // consiste en una función para obtener los held items y luego hacerlos clicables 
    // 1. conseguimos con los datos específicos mapeando el array inicial de datos que viene desde props. 
    // 2. al mapearlo hacemos un diseño de etiquetas de cómo queremos verlo, es decir, un p con el título, y un span con la info concreta sacada que queremos, este caso el nombre. 
    // diseño del evento onclick: el evento onclick hará que salte la alerta, pero esa alerta contiene info obtenida de un fetc. primero sacamos los datos de la url que obtenga al clicar en cada elemento, por eso el fetch no tiene una url como tal parametrizada sino que la obtiene directamente en el mapeo de datos. Con esso datos se diseña la alerta y listo. 
    // lo más difícil ha sido ver el tema del fetch y su url

    
    const itemsArray = data.held_items;    


    const getItems = async (url) => {
      try {
        const resp = await fetch(url); 
        const data = await resp.json();
       
        const effect = data.effect_entries[0].short_effect;
        const title = data.name;

        Swal.fire({
              title: title.charAt(0).toUpperCase() + data.name.slice(1),
              text: effect,
              
            });

      } catch (error) {
        console.error('Error:', error);

        
    }


    }

    return itemsArray.map((index, i)=> (
      <section className="item-section" key={i}>    
       <span className="span" onClick={() => getItems(index.item.url)}>
        {index.item.name}
       </span>
      

        
      </section>
      
  
    ))


    
    
  }

  
  formatType();
  formatStats();
  formatItems();



  return <>

  <section className="card">
    <section className="pokemon-info">
      <h2 className="pokemon-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}  <span className="pokemon-id">#{data.id}</span> </h2>
      <img className="pokemon-img" src={data.sprites.other['official-artwork'].front_default} alt="foto"/>
    </section>

    <article className="pokemon-type">TYPE <br />{formatType()} </article>

    <section className="pokemon-body">
      <article className="pokemon-h">Height: {data.height}</article>
      <article className="pokemon-w">Weight: {data.weight}</article>
      

    </section>

    
    <article>Exp: <span className="pokemon-exp">{data.base_experience}</span> </article> 
    
    <article className="pokemon-stats"><p>STATS</p> {formatStats()}</article>
    <article className="pokemon-items"><p>HELD ITEMS</p>{formatItems()}</article>
  


  </section>
  
  </>

};

export default Card;
