// Herencia

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

class Alumno extends Persona {
    static maxNumAlumnos = 7
    #notaPorDefecto = 4
    constructor(nombre, edad, nota) {
        super(nombre, edad)
        this.nota = nota + this.#notaPorDefecto
    }
}

let estudiante1 = new Alumno("Alvaro", 21, 5)
let estudiante2 = new Alumno("Manu", 19, 3)
estudiante1.nota
//estudiante1.#notaPorDefecto -> no se puede porque es privado
estudiante1.maxNumAlumnos = 55
console.log(estudiante2.maxNumAlumnos)

console.log(estudiante1 instanceof Alumno)
console.log(estudiante1 instanceof Persona)
console.log(estudiante1 instanceof Object)
console.log(estudiante1 instanceof Array)