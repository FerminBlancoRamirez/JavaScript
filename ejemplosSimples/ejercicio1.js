/**
 * Crea un array de alumnos
 * Cada alumno (objeto) tiene nombre y nota
 */

let alumnos = [
    { nombre: "Juan", nota: 5 },
    { nombre: "Alvaro", not: 10 },
    { nombre: "Carla", nota: 8 }
]

//Añade un nuevo elemento llamado "Roberto" con nota 2.5

alumnos.push(
    { nombre: "Roberto", nota: 2.5 }
)

//Muestra la nota de Carla
console.log(alumnos.at(2).nota)

//Muestra cuantos alumnos hay
console.log(alumnos.length)

//Crea una funcion que admita un array de alumnos como parametro y que devuelva el numero de alumnos aprobado
//Usa un for
function numeroAprobados(alumnos) {
    let contador = 0
    for (let alumno of alumnos) {
        if (alumno.nota >= 5) {
            contador++
        }
    }
    return contador
}

console.log(numeroAprobados(alumnos))

console.log(alumnos.filter(a => a.nota >= 5).length)

//Calcula la nota media de los alumnos
//crea una funcion que admita un array de alumnos
// y devuelve la nota media de todos ellos

function notaMedia(alumnos) {
    let nota = 0
    for (let a of alumnos) {
        nota += a.nota
    }
    return nota / alumnos.length
}

console.log(notaMedia(alumnos))

const media = alumnos.reduce((total, alumno) => total + alumno.nota, 0) / alumnos.length
console.log(media)