import { useEffect, useState } from "react"
import { getUsuarios } from "../services/userService"

/* 
Los hooks seran los encargados de manejar LA LOGICA del componente, es su responsabilidad
*/
export function useUsuarios() {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)

    async function cargarUsuarios() {

        setLoading(true)
        setResponse(null)

        const usuarios = await getUsuarios()

        setLoading(false)
        setResponse(usuarios)
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
            cargarUsuarios()
        },
        // Dependencias Significa que se ejecuta 1 sola vez el efecto
        []
    )

    return {
        loading, 
        response
    }
}