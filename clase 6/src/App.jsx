import React, { useEffect, useState } from 'react'
import EstaPrendidoBoton from './Components/EstaPrendidoBoton/EstaPrendidoBoton'
import Contador from './Components/Contador/Contador'

export default function App() {

  /* 
  Consumo de APIS
  Nos interesa consumir APIS para poder traer/integrar datos externos a nuestro frontend con un servidor.
  Ejemplo: 
    - Me conecto a la API del banco central para saber las distintas cotizaciones del dolar
    - Me conecto a la API de Mercado Libre para traer un listado de productos
    - Me contecto a la API de ARCA para poder generar una factura
    - Me conecto a una API privada 

  Para conectarnos a una API via internet debemos usar la funcion fetch
  Para que sirve fetch?
    - fetch sirve para emitir consultas HTTP desde el navegador, basicamente ORDENA al nevegador a emitir una consulta via HTTP al servidor. Es una funcion de JS.

  JS soporta asincronia, las funciones normalmente se ejecutan de forma sincronica
  EJ sincronico:
    1. Lavo la taza
    2. La lleno de cafe
    3. Pongo agua caliente

  EJ ASINCRONICO:
    - Pongo a calentar la pava 1
    - Prendo el microondas para recalentar medialuna 2
    - Voy prendiendo la tele para ver netflix 3

  Como se mide la eficiencia en programacion:
    Mayor cantidad de outputs por inputs: Mas respuestas en el menor tiempo posible
  Justamente buscando la eficiecia se determino que fetch es una funcion que DEBE resolverse de forma asincronica.
  Porque comunicarse con un servidor puede variar mucho dependiendo del servidor al que te comunicas
  No es lo mismo traer 300 productos, que procesar un pdf de 50MB o traer los datos de perfil.

  JS es un lenguaje MONOHILO, solo puede tener una linea de procesamiento a la vez
  Por ende la asincronia en JS deberia ser IMPOSIBLE, pero JS emula la "concurrencia" subdelegando las tareas complejas a otras aplicaciones/procesos permitiendo OPTIMIZAR AL MAXIMO el unico hilo de procesamiento y dando la sensacion/resultado de concurrencia

  JS para manejar los procesos asincronicos creo el tipo de dato Promise (que es un objeto con 3 estados posibles).
  Las promesas tienen un estado interno:
    - pending Pendiente: Cuando la operacion aun esta pendiente de resolverse
    - resolved Resuelto: Cuando la operacion se logro resolver correctamente
    - reject Rechazado: Cuando la operacion no se logro completar (hubo un error)
  */

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  async function traerUsuarios(){

    setLoading(true)
    setResponse(null)
    const response_HTTP = await fetch(
      'https://jsonplaceholder.typicode.com/users', 
      {
        method: "GET"
      }
    )
  
    const result = await response_HTTP.json()
    setLoading(false)
    setResponse(result)
  }

  /* 
  useState => Controla la recarga de un componente
  useEffect => Controla la recarga de una funcion
  Recibe 2 parametros:
    1. La funcion/Efecto a controlar
    2. el array de dependencias (si es [] significa que ejecuta 1 sola vez)
  */
  useEffect(
    //El efecto
    () => { 
      traerUsuarios()
    },
    // Dependencias Significa que se ejecuta 1 sola vez el efecto
    [] 
  )
  

  console.log({response, loading})




  return (
    <div>
      <h1>Hola mundo</h1>
      {
        loading 
        ? <span>Cargando...</span>
        : <div>
          {
            response.length === 0
            ? <span>Lista vacia</span>
            : <div>
              {response.map((user) => {
                return (
                  <div key={user.id}>
                    <span>ID: #{user.id}</span>
                    <h2>Nombre: {user.name}</h2>
                    <span>Email: {user.email}</span>
                    <hr/>
                  </div>
                )
              })}
            </div>
          }
        </div>
      }
    </div>
  )
}
