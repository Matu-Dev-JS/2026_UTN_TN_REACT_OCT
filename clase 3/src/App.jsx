import React from 'react'



export default function App() {

  let a = 30
  let b = 50

  let nombre_usuario = null

  function sumar (a, b){
    return a + b
  }

  let titulo = null

  if(nombre_usuario){
    titulo = <h1>Bienvenido {nombre_usuario}!</h1>
  }
  else{
    titulo = <h1>Bienvenido desconocido, quien eres?</h1>
  }

  return (
    <div>
      {titulo}
      <span>El resultado de {a} + {b} = {sumar(a, b)}</span>
      <button>Click</button>
    </div>
  )
}
