let datos=["Pepe", "Angel", "Antonio", "Daniel", "Marta"]

console.log(datos[1])
console.log(datos.at(-1))
console.log(datos[datos.length-1])

datos.push("Miguel")

for(let profe of datos){
    console.log(profe)
}

datos.forEach( function trabaja(profe){  console.log(profe)  })


let valores = [4, 6, 2, 7, -8, 2]
console.log(valores.filter(esPositivo))
//crea una funcion que devuelva true si es positivo y false si es negativo
//si es negativo lo que le pasas como parametro
function esPositivo(num){
    return num >=0
}

let nombres= ["Alvaro", "Manuel", "Anxo", "Sergio", "Alejandro", "Pablo", "David"]//Menudo campo de navos
//Mostramos por pantalla los nombres que tiene mas de cuatro letras
//Usa la funcion de orden superior filterl
//crea una funcion para filtrar el array
console.log(nombres.filter(letras))
function letras(nombre){
    return nombre.length>4
}

console.log( nombres.filter(nombre=>nombre.length>4))