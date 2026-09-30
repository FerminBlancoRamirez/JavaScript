//Cadenas de texto
let saludo='hola'
let saludo2="hola"
let saludo3=`hola`
console.log(saludo)

//Enteros
let entero=73
let decimal=3.1416
let negativo=-10
console.log(entero)

//Booleanos
let casada=false
casada=true
console.log(casada)

//Nulo
let nulo=null
console.log(nulo)

//No definido
let indefinido=undefined//declarada pero aun no se le ha asignado valor
console.log(indefinido)

//Objetos //Json-> JavaScript object notation(parecido)
let persona={
    nombre="Maria",
    edad=23,
    insitituto="Cebem"
}
//si fuera un json seria
/**
 * {
 *  "nombre":"Maria",
    "edad":23,
    "insitituto":"Cebem"
 * }
 */

//Array
let enteros=[1,2,3,4,5,6]
let cosas=["hola", 43.5, 45, false, {nombre="Alvaro", apellido="Villaverde", estado="virgen supremo"}]
console.log(cosas[3])

//funciones
function saludo(){
    return "Hola que tal"
}

let saludo2 = () => {
    return "Hola que tal"
}

//symbol
//bigint

//Casteos
let valor = 6
let valor_textual= String(valor) //"6"

let numero= "22"
let numeroEntero=Number(numero)//22
