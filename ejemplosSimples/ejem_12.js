//for each
let producto={
    nombre : "Naranja",
    precio : 1.2
}
for(let propiedad in producto){
    console.log(propiedad+" = "+producto[propiedad])
}

//for of
let nombresPersonas=["Angel", "Pepe", "Antonio", "Marta", "Daniel"]
for(let persona of nombresPersonas){
    console.log(persona)
}