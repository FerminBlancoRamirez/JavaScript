class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log("Hola soy "+this.nombre)
    }

}

let Rosario=new Persona("Rosarito", 45)
Rosario.edad=20
Rosario.saludar()