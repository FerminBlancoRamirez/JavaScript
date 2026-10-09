// sets
let numeros = new Set([1, 2])

numeros.add(6)
numeros.add(1)
console.log(numeros)

numeros.delete(2)
numeros.has(8)
numeros.has(1)
console.log(numeros.has(8))