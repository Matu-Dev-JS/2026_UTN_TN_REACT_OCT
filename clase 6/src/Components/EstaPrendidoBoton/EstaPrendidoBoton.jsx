import { useState } from "react"

function EstaPrendidoBoton() {
    const estaPrendidoEstado = useState(true)
    const estaPrendidoValor = estaPrendidoEstado[0]
    const setEstaPrendido = estaPrendidoEstado[1]

    function alternarEstaPrendido() {
        setEstaPrendido(!estaPrendidoValor)
    }

    return (
        <div>

            {
                estaPrendidoValor
                    ? <button onClick={alternarEstaPrendido}>Prendido</button>
                    : <button onClick={alternarEstaPrendido}>Apagado</button>
            }

        </div>
    )
}

export default EstaPrendidoBoton