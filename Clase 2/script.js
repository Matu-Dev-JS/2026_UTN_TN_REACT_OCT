/* 
Temas necesarios de JS

- Tipos de datos: string, number, boolean, array, object, null, undefined
- Variables: let y const
- Operadores aritmeticos: +, -, *, /
- Comparadores: >, <, >=, ==, ===, !==
- Operadores Logicos: NOT (!), AND (&&), OR (||)
- Condiciones (IF, ELSE, ELSE IF)
- FOR/ FOR OF
- metodos de array (.push, splice, indexOf, filter, map, find, findIndex)
- funciones
*/

/* 
Tipos de datos:
    Son las categorias de datos que tenemos en JS:
        string: cadena de texto
            EJ: "hola" 'adios' `hola` '1'
    
        number: numeros
            EJ: 1 -1 1.3
        
        boolean: Representan el verdadero y el falso
            EJ: true false

        null: Nulidad
            EJ: null

        undefined: JS lo usa cuando cierto dato no es definido

        arrays: Listas ordenadas de elementos
            EJ: 
                ['pepe', 'maria', 'jose']
                [1, 3, 4]
                [
                    {id: 1, nombre: 'pepe'},
                    {id: 2, nombre: 'jose'},
                    {id: 3, nombre: 'maria'}
                ]
        
        Objetos: Los usamos para describir entidades de nuestra app
            EJ:
                {id: 1, nombre: 'pepe', edad: 50}
*/

/* const usuarios = [
    {id: 1, nombre: 'pepe'},
    {id: 2, nombre: 'jose'},
    {id: 3, nombre: 'maria'}
]


const nombres_usuarios = usuarios.map(
    (usuario) => {
        return usuario.nombre
    }
)

console.log(nombres_usuarios) */


/* 
LET se usa para variables que son dinamicas, es decir que varian su valor a lo largo de la ejecucion del programa

CONST se usan para variables que NO van a variar su valor a lo largo de la ejecucion del programa
*/

/* const IVA = 21
const APP_VERSION = '1.0'


let edad = 40

function cumplirAños(){
    edad = edad + 1
} */


//const nombres = ['pepe', 'maria', 'jose']

//metodos de array: Sirven para hacer acciones con los arrays
//JS los define, por ende son nativos

//Agrega al final de la lista a 'juan'
//nombres.push('juan')

//indexOf -> traer el indice de cierto elemento

/* for(let nombre of nombres){
    if(nombre === 'jose'){
        let indice_maria = nombres.indexOf(nombre)
        console.log("jose esta en la posicion " + indice_maria)
    }   
    
}
 */
//splice -> eliminar, agregar o remplazar un elemento del array

//Remplazar a 'pepe' por 'adrian'

/* for(let nombre of nombres){
    if(nombre === 'jose'){
        let indice_pepe = nombres.indexOf(nombre)
        nombres.splice(indice_pepe, 1, 'adrian')
    }   
    
}

 */

//Eliminar a 'pepe' 

/* for(let nombre of nombres){
    if(nombre === 'pepe'){
        let indice_pepe = nombres.indexOf(nombre)
        nombres.splice(indice_pepe, 1)
    }   
    
} */


//agregar a 'julieta' donde esta jose

/* for(let nombre of nombres){
    if(nombre === 'jose'){
        let indice_jose = nombres.indexOf(nombre)
        nombres.splice(indice_jose, 0, 'julieta')
        break
    }   
    
}

console.log(nombres) */


/* 
la funcion sumar recibe a 2 numeros y devuelve la suma de ellos
*/
function sumar (a, b){
    return a + b
}

console.log(sumar(1, 1))

/* 
- Crear la funcion calcularIva que reciba el precio por parametro y retorne el valor del iva. (asumiendo que el iva es 21% del precio)
*/

/* const iva = 0.21;

function calcularIva (producto) {
    
    return producto * iva;
}
console.log(calcularIva(100)); */


/* 
- Dado un numero de dia ustedes deben decir por consola que dia es
1 = lunes
2 = martes (...etc)
*/
let dia_seleccionado = 3

//Ejemplo de mensaje
//console.log('El dia de la semana es miercoles')