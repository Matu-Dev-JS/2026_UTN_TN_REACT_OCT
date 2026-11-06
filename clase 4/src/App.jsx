import React from 'react'


/* 
React utiliza componentes para separar las partes de una aplicacion
Los componentes pueden abarcar otros componentes (como un motor tiene piston y bujias)
Un componente de React es una funcion que retorna JSX
TODA FUNCION QUE RETORNE JSX es entonces un componente
*/

export default function App() {


  return (
    <div>
      <h1>Hola mundo</h1>
      <ProductCard titulo={'TV samsung 42"'} precio={4000}/>
      <ProductCard titulo={'Mesa ratona'} precio={4200} descuento={30}/>
      <ProductCard titulo={'Vaso de vidrio'} precio={200}/>
      <ProductCard titulo={'Microfono'} precio={250}/>
    </div>
  )
}





//DECLARO EL COMPONENTE
/* 
PARA COMUNICARNOS CON un componente, lo hacemos mediante las props
TODO COMPONENTE RECIBE UNAS PROPS
Propiedades siempre es de tipo de dato objeto
El valor de las propiedades sera determinado en la instancia del componente
*/
function ProductCard (propiedades){
  let descuento = 0
  if(propiedades.descuento){
    descuento = propiedades.descuento
  }
  
  let precio_descontado = propiedades.precio * (descuento / 100)
  let precio_final = propiedades.precio - precio_descontado

  let mensaje_descuento = null
  if(descuento){
    mensaje_descuento = <span> (% {descuento} OFF)</span>
  }

  return (
    <div>
      <h2>{propiedades.titulo}</h2>
      <div>Precio:  ${precio_final} ARS { mensaje_descuento }</div>
      <button>Comprar </button>
      <hr/>
    </div>
  )
}