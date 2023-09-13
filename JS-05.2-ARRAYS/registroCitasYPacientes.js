/*
Sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de arrays
Lista de cosas para hacer / coas por tomar en cuenta

-Un array para pacientes
-Un array para citas 

-Prompt para registrar los datos
-Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
-funcion registrarPaciente
-funcion registrarCita
-Metodos para modificar arrays (push, forEach, splice)
*/

//Crear un array para almacenar mis pacientes

//La var pacientes esta declarada e inicializada (tiene un nombre y tiene un valor, a pesar de que su arreglo esté vacío) 
//Los indices del arreglo estan UNDEFINED, porque no hay elementos, pero si hay espacios disponibles. Null siempre es intencional, Undefined abarca que no contemplo.
let pacientes = [];  //se crea como valor vacio
let citas = [];

//Funcion para registrar un nuevo paciente
//Paso 1. Ejecucion de mi funcion. Pido dos datos
function registrarPaciente(nombre, edad) {


    //Crear un array dentro de otro array
    //Paso 2. Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas: []
    };

    //Agregar paciente el array
    //Paso 3. Ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
    pacientes.push(paciente);
    return paciente;
}


////////////////////////////////////////////////////////
//console.log("Felipe el 'amante numero 1'de los chilaquiles verdes"); 

//Funcion para registrar citas de un paciente

//Cuando ejecuto mi funcion, necesito un paciente, una hora y una fecha para registrar la cita
function registrarCita(paciente, fecha, hora) {

    //Cuando tenga estos datos, buscare dentro del paciente el apartado citas para hacerle un push ahi
    paciente.citas.push(
        {
            fecha,
            hora
        }
    );
}


// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); // 31
    console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
    } //cierra la llave que contiene console.log
    ); //cierra forEach

}
/* Funcionamiento del forEach anterior:
► Definir una variable temporal llamada cita y otra variable temporal llamada índice
► Cada que se ejecuta un forEach, busca y encuentra una cita, asigna esa información a las variables temporales e imprime la información
► Vuelva a buscar y encontrar otra cita, y reasigna esa información a las variables temporale
*/


//Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr.Simi", 50);


//Registrar la cita de un paciente desde la invocacion de la funcion registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

//Mostrar informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);





////////////////////////////////////////////////////////////////////////////////
//For Each
/*
Es un metodo de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida. 

Generalmente el ForEach se utiliza para imprimir la información del arreglo 

Sintaxis ForEach
array.forEach(function(elemento, indice, arreglo))

-elemento: el elemento actual del arreglo que se esta procesando
-indice: la posicion del elemento actual en el array
-arreglo: el array que esta recorriendo (opcional)

    EJEMPLO DEL SUPERMERCADO:
    -elemento: producto que compre y que eta en el carrito
    -indice: la posicion de ese producto
    -arreglo: carrito del super (opcional)

*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabón de trastes", "pan"];

//Oye JS, para cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "caritoSuper", vas a hacer algo 

carritoSuper.forEach(function (producto, indice) {
    console.log("Producto: " + producto + "con la posicion: " + indice);
} //cierra la llave dentro de function
); //cierra function 





