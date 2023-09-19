/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

Objeto: Materalizacion de la informacion o los datos con los que cuenta mi plantilla o clase.. 
    //mostrar un objeto similar a este 
let Felipe = {
    nombre : "Felipe", 
    apellido : "Maqueda", 
    edad : 31,
    email : "felipemaqueda@mail.com", 
    telefono : "55123456"
} 
*/



//PARA QUE UNA PLANTILLA FUNCIONE DEBE TENER METODOS Y CONSTRUCTORES

//Creando mi primera clase 

class persona {
//1. Propiedades o atributos de mi clase de forma general
    nombre= ""; 
    apellido = ""; 
    edad= 0; 
    email = ""; 
    telefono = ""; 
//3. Defino un constructor que tomara los atributos como "material" para la instancia o creación de mis objetos.
//el constructor es una funcion especial, cuya funcion es la construir o instanciar objetos
//al pasar los atributos como parámetros, es importante cuidar el orden en el que fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono; 
    }
//2. Metodos o comportamientos (funciones) van dentro de la misma clase 
//Para definir los metodos de mi objeto ya no utilizo la palabra function. 
    hablar(){
        console.log("Hola estoy hablando"); 
    }
    dormir () {
        console.log("zzzz");
    }
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    } //cierra el metodo mostrar info
} //cierre de mi clase persona


/*
//Instancia de objetos del tipo persona
Sintaxis basica de una instancia 
variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)
*/


//matertialización de una persona a partir de la clase creada arriaba
let persona1 = new persona ("Felipe" , "Maqueda", 31, "felipemaqueda@mail.com", "5512345678"); 

let persona2 = new persona ("Naruto", "Uzumaki", 22, "naruto@hokage.com", "12345678");

let persona3 = new persona ("Della", "Vazquez", 26, "dellaneyravazquez@gmail.com", "8124196670");

//imprimir el objeto completo
console.log(persona2);

//imprimir un atributo de un objeto (tenemos que apuntar primero al objeto y con un punto a su atributo)
console.log(persona3.apellido);

//invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();


//imprimir dos datos en una misma consola
console.log(persona2.nombre, persona3.apellido);




/*
Existen 4 pilares de la programación orientada a objetos, que nos permiten ampliar las caracterisitias y dotar en funcionalidades y operaciones a nuestro codigo. 
    -Herencia
    -Polimorfismo
    -Encapsulamiento
    -Abstracción
*/ 

//Creando nueva clase para aplicar la herencia 
class paciente extends persona{
//1.Definicion de atributos o propiedades 
    doctorAtiende = "";   //nombre del doctor que atiende
    historialMedico = "";   //si o no el historial
    alergias = "";  //alergias existentes

//3.Generación de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super(nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior (la que hicimos arriba)
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias= alergias; 
    }

//2. Metodos
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial medico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }

}

//instancias de un paciente 
let paciente1 = new paciente("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "55987654321", "Doctor Simi", "No tiene", "Penicilina");

//imprimir objeto paciente
console.log (paciente1);

//Uso del metodo mostrarInfo
paciente1.mostrarInfo();










//diferencias entre un objeto literal (normal) y un objeto del tipo JSON 
//todas las claves y valores van dentro de comillas
//envio de informacion a servidores
//usualmente los objetos JSON se trabajan con fetch
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//tratar la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

//Cuando tenemos un objeto serializado (enviar a un servidor)
let objetoJSONSerializado = `{
    
}`




//EJEMPLO: 

/*Realizar un programa que conste de una clase llamada Alumno, que tenga como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.
    Atributos:
        -nombre
        -nota (calificacion)

    Metodos:
        -Constructor
        -Metodo evaluacion (si aprueba o no)
        -Metodo imprimirInfo (nombre y la nota)

    Logica del negocio:
        -If para evaluar la nota(si la nota es menor a 6, esta reprobado)
        -Recuperamos la información por medio de un prompt
        -Generamos 3 instancias para probar mi codigo(la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)
*/

//Creacion de la clase (3 pasos)
class alumno {
    //1.Atributos o propiedades
    nombre;
    nota;

    //3.Constructor donde le di identidad a mi objeto (this)
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota; 
    }

    //2.Metodos
    //metodo general, un metodo que no requiere personalizacion porque aplica para cualquier objeto.
    evaluacion(nota){
        if (nota >= 6) {
            console.log("Aprobado");
        }else{
            console.log("Reprobado");
        }
    } //cierra evaluacion
    imprimirInfo(){
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);
    }//cierra imprimir info

}//cierre de clase alumno

//instancias de alumnos (3 escenarios)
let alumno1 = new alumno("Felipe", 3); 
let alumno2 = new alumno("Felipe", 8); 
let alumno3 = new alumno("Felipe", 7); 

//Invocando metodos
alumno1.evaluacion(alumno1.nota); //reprobado
alumno2.evaluacion(alumno2.nota); //aprobado
alumno3.evaluacion(alumno3.nota); //aprobado