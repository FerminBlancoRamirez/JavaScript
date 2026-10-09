//Crear clases usando funciones
/**
 * Class Persona{
 *  String nombre;
 *  int edad;
 * 
 *  public Persona(String nombre, int edad){
 *      this.nombre=nombre;
 *      this.edad=edad;
 *  }
 *  
 *  public saludar(){
 *      sout("Hola")
 *  }
 * }Esto en java
*/
function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad

    //metodo
    this.saludar = function (){
        console.log("Hola soy "+this.nombre)
    }
}

let manolo = new Persona("Manolo", 23)
manolo.edad = 20
manolo.saludar()

//funcion compartida por todos los objetos del sistema
//Importante para optimizar
Persona.prototype.gritar = function (){
    console.log("HOLA SOY "+this.nombre)
}

manolo.gritar()