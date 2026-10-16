// paradigma de programacion imperativo(COMO)
//Funciones de orden superior
//Dado un array de numeros quedarnos solo con los positivos

const numeros = [2, -4, 3, 52, -32]
/*for(numero of numeros){
    if(numero>0){
        console.log(numero)
    }
}*/

//paradigma de programacion declarativa(QUE)
//map,  foreach, filter, some, reduce, find...

const resultado = numeros.filter((numero) => numero >= 0)
console.log(resultado)

const valores = [3, 5, 21, 6, 9, 8]
const pares = valores.filter((numero) => numero % 2 === 0)
console.log(pares)

//Mostrar el cuadrado de los numeros que hay en el siguiente array
const enteros = [2, 6, 1]

const cuadrados = enteros.map((numero) => numero * numero)
console.log(cuadrados)

const nombre = ["Antonio", "Angel", "Pepe", "Daniel"]
const mayusculas = nombre.map((nombre) => nombre.toUpperCase())
console.log(mayusculas)

//Mostrar los positivos duplicados
const datos = [-2, 6, -7, 7, 5]
const duplicados = datos.filter((numero) => numero >= 0).map((numero) => numero * 2)
console.log(duplicados)

//Mostrar cada hobbi entre las etiqueta <li> y </li>
const hobbies = ["Cantar", "Comer", "Dormir", "Programar"]
const actividadesHTML = hobbies.map(hobbie => `<li>${hobbie}</li>`)
console.log(actividadesHTML)

//Dados los siguientes numeros sumalos
const nums = [2, 5, 1, 2]
const suma = nums.reduce((num1, num2) => num1 + num2, 0)
console.log(suma)

//ForEach
const usuarios = ["Antonio", "Pepe", "Daniel"]
//usuarios.forEach(guardarBD)

//const guardarBD = (usuario) => {
//guardo en BD
//insert into xxx values()
//  console.log("Se guardo el usuario " + usuario + " en la base de datos")
//}

//find -> encuentra la primera ocurrencia
const numeros3 = [3, 4, 5, 1]
const encontrado = numeros3.find(num => num > 2)
console.log(encontrado)

//some(si alguno de los elementos cumple con la condicion) y every (todos los elementos cumplen la condicion)

const notas = [2, 5, 8, 9]
const aprobado = notas.some(nota => nota >= 5)
console.log(aprobado)

const aprobadasTodas = notas.every(nota => nota >= 5)
console.log(aprobadasTodas)

//sort
const puntos = [4, 8, 5, 6, 3, 9]
puntos.sort((a, b) => a - b)
console.log(puntos)

//flat, concat

//slice
const valores_alumnos = [6, 4, 3, 2, 1]
const subconjunto = valores_alumnos.slice(1, 3 + 1)
console.log(subconjunto)

//splice
const valores_profesores = [5, 6, 8, 2, 3]
const subconjuntoProfesores = valores_profesores.splice(1, 2, "a", "b")
console.log(subconjuntoProfesores)

//indexof
const nombres_alumnos = ["Ana", "Juana", "Laura", "Rosario"]
const index = nombres_alumnos.indexOf("Laura")
console.log(index)

//key, values, entries
const notas_globales = ["suspenso", "aprobado", "suspenso"]
for(let key of notas_globales.keys()){
    console.log(key)
}

for(let key of notas_globales.values()){
    console.log(valor)
}

for(let key of notas_globales.entries()){
    console.log(key+" "+valor)
}