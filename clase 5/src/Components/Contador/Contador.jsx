function Contador() {
    /* 
  ESTADOS de react
  */

    /* 
    CONTADOR
    */
    /* Los estados en react lo ultilizamos para actualizar valores en pantalla */
    /*
    useState es la funcion que permite crear estados
    Le pasamos como parametro el valor inicial del estado
    useState retorna un array de 2 valores
      el primer valor es el valor del estado
      el segundo valor es la funcion de cambio (setter) del estado
        Esta funcion la vamos a usar para modificar el valor del estado
        Cuando se usa el setter se re-renderiza el componente
  
    LOS ESTADOS SON INMUTABLES, si queres modificar el valor de un estado la forma correcta es hacerlo por medio del setter
    */
    const contador_estado = useState(100) // [valorDelEstado, setEstado]
    const contador_valor = contador_estado[0]
    const setContador = contador_estado[1]

    function incrementarContador() {
        setContador(contador_valor + 1)

    }
    return (
        <div>
            <span>{contador_valor}</span>
            <button onClick={incrementarContador}>+</button>
        </div>
    )

}