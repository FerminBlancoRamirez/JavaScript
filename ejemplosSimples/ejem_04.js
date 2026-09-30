let hermano={
    nombre:"Alvaro",
    edad:20,
    casado:true
}

console.log(hermano.edad)
console.log(hermano['edad'])

hermano.casado=true
console.log(hermano)
console.table(hermano)

hermano.delete(edad)
hermano.altura=1.85

console.table(hermano)

let coche={
    marca:"Citroen",
    estado:"parado",
    caracteristicas:{
        elevalunas:true,
        pintura_metalizada:true,
        numero_puertas:4
    },
    arrancar: function(){
        this.estado="arrancado"
    }
}

console.log(coche.estado)
coche.arrancar()
console.log(coche.estado)

console.log(coche.caracteristicas.numero_puertas)



let producto1={
    nombre:"Peras",
    info:{
        caducidad:"1/10/2027",
        peso:1
    }
}

let producto2= producto1

producto1.nombre="Jose"