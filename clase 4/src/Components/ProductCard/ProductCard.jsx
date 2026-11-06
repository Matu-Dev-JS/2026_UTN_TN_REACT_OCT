//DECLARO EL COMPONENTE
/* 
PARA COMUNICARNOS CON un componente, lo hacemos mediante las props
TODO COMPONENTE RECIBE UNAS PROPS
Propiedades siempre es de tipo de dato objeto
El valor de las propiedades sera determinado en la instancia del componente
LOS COMPONENTES SIEMPRE VAN EN UpperCamelCase
*/

import './ProductCard.css'

export function ProductCard(
    {
        titulo,
        precio,
        descuento = 0 //Si descuento no trae nada, vale 0
    }
) {



    let precio_descontado = precio * (descuento / 100)
    let precio_final = precio - precio_descontado

    let mensaje_descuento = null
    if (descuento) {
        mensaje_descuento = <span> (% {descuento} OFF)</span>
    }

    let className = "texto-verde"
    if(precio_final > 1000){
        className = 'texto-amarillo'
    }

    return (
        <div>
            <h2 className={className}>{titulo}</h2>
            <div>Precio:  ${precio_final} ARS {mensaje_descuento}</div>
            <button>Comprar </button>
            <hr />
        </div>
    )
}

const PI = 3.14

export { PI }