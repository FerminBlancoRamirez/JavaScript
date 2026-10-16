const datos = ["Antonio", 20]

const nombre = datos[0]
const edad = datos[1]

console.log(nombre + " " + edad)

const [nombre2, edad2] = datos
console.log(nombre2 + " " + edad2)

const numeros = [3, 5, 4, 7, 8, 9, 6, 3, 2, 4]
const [primero, segundo, ...resto] = numeros
console.log(primero)
console.log(segundo)
console.log(resto)

function suma(...numeros) {
    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total
}

console.log(suma(2, 3, 5, 6, 7, 5, 2, 96, 8, 4, 396))