import React from 'react'
import {ProductCard} from './Components/ProductCard/ProductCard'



/* 
React utiliza componentes para separar las partes de una aplicacion
Los componentes pueden abarcar otros componentes (como un motor tiene piston y bujias)
Un componente de React es una funcion que retorna JSX
TODA FUNCION QUE RETORNE JSX es entonces un componente

Expresiones JSX:
  Expresiones similares a HTML pero con la posibilidad de incorporar sintaxis de JS
  Toda expresion JSX solo puede tener 1 elemento padre
  Algunos atributos cambian su nombre:
    EJ:
      class => className
      for => htmlFor
*/

export default function App() {


  return (
    <div>
      <h1 className='titulo'>Hola mundo</h1>
      <form>
        <div>
          <label htmlFor='nombre'>Nombre:</label>
          <input type="text" name="" id="nombre" />
        </div>
      </form>
      <ProductCard titulo={'TV samsung 42"'} precio={4000} />
      <ProductCard titulo={'Mesa ratona'} precio={4200} descuento={30} />
      <ProductCard titulo={'Vaso de vidrio'} precio={200} />
      <ProductCard titulo={'Microfono'} precio={250} />
      <ProductCard titulo={'Camara'} precio={4500} descuento={40}/>

      <WspContactOption nombre="Joe" ultimo_mensaje="Hola" fecha="17:40" cantidad_mensajes_no_leidos={3} />
      <WspContactOption nombre="Jane" ultimo_mensaje="¿Cómo estás?" fecha="17:15" cantidad_mensajes_no_leidos={1} />
      <WspContactOption nombre="Bob" ultimo_mensaje="Bien!" fecha="16:20" cantidad_mensajes_no_leidos={0} />
    </div>
  )
}






function WspContactOption(propiedades) {
  let mensajes_no_leidos = null
  if (propiedades.cantidad_mensajes_no_leidos > 1) {
    mensajes_no_leidos = <span>Cantidad mensajes no leidos: {propiedades.cantidad_mensajes_no_leidos}</span>
  }
  return (
    <div>
      <h2>{propiedades.nombre}</h2>
      <p>{propiedades.ultimo_mensaje}</p>
      <span>{propiedades.fecha}</span>
      {mensajes_no_leidos}
    </div>
  )
}