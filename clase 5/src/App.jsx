import React, { useState } from 'react'
import EstaPrendidoBoton from './Components/EstaPrendidoBoton/EstaPrendidoBoton'
import Contador from './Components/Contador/Contador'

export default function App() {

  const listaProductosEstado = useState([])
  const listaProductosValor = listaProductosEstado[0]
  const setListaProductos = listaProductosEstado[1]

  function manejarFormularioAltaProducto(evento){
    console.log("Producto nuevo enviado")

    //Deshabilitar el comportamiento por defecto de los formularios, el cual es recargar la pagina
    evento.preventDefault()

    //evento.target es el elemento de donde se disparo el evento
    const form = evento.target
    const nuevo_producto = {
      titulo: form.titulo.value, 
      precio: form.precio.value
    }

    //Clonar el valor del estado
    //Agregar el nuevo producto al clone
    //settear como nuevo de estado al clone
    
    let cloneListaProductosValor = [...listaProductosValor]
    cloneListaProductosValor.push(nuevo_producto)
    setListaProductos(cloneListaProductosValor)
    
    
  }


  console.log(listaProductosValor)

  let listado_productos_jsx = []

  for(let producto of listaProductosValor){
    listado_productos_jsx.push(
      <div>
        <h2>{producto.titulo}</h2>
        <div>Precio: ${producto.precio} ARS</div>
        <hr/>
      </div>
    )
  }
  return (
    <div>
      <h1 className='titulo'>Alta de producto</h1>
      <form onSubmit={manejarFormularioAltaProducto}>
        <div>
          <label htmlFor="titulo">Titulo del producto</label>
          <input type="text" placeholder='ejemplo' id='titulo' name='titulo' />
        </div>
        <div>
          <label htmlFor="precio">Precio del producto</label>
          <input type="number" placeholder='123' id='precio' name='precio' />
        </div>
        <button type='submit'>Dar de alta</button>
      </form>

      <Contador/>

      <h2>Lista de productos:</h2>
      {listado_productos_jsx}
    </div>
  )
}


/* TIPOS DE DATOS PRIMITIVOS */
/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_1 = 'juan'

console.log(nombre_2) */


/* Array o objeto */
/* 
Los tipos de dato objeto y array se asignan por referencia, mientras que los primitivos se asignan por valor
*/
/* 
let nombres_1 = ['pepe']
let nombres_2 = nombres_1

nombres_1.push('juan')

console.log(nombres_2) */