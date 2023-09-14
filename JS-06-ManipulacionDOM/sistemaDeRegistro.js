/*
Sistema para registrar pacientes y mostrarlos en tarjetas 
*/

//Primer paso: Obtener todos los elementos de nuestro HTML y guardarlos en variables de JS

//Inputs seprados, boton, texto confirmacion

const nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
const edadPaciente = document.getElementById("edadPaciente"); //input edad
const botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente"); //boton
const textoConfirmacion = document.getElementById("mensajeConfirmacion"); //container mensaje confirmacion


//Array para almacenar a mis pacientes
let pacientes = [];

//Funcion para rgistrar un nuevo paciente
function registrarPaciente (){
    //obtener el atributo value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    //Array para guardar la información del paciente
    let paciente = {
        nombre : valorNombrePaciente, //tomo el valor del input y lo asigno a esta variable
        edad : valorEdadPaciente, //tomo el valor del input y lo asigno a esta variable
        citas: []
    }

    //Cuando tengo la información del paciente ...
    pacientes.push(paciente); //array.push(valorAAgregar)

    //1. Muestro info en consola
    mostrarInfoPaciente(paciente); //Invocacion de otra funcion para mostrar la info en consola

    //2. Muestro el mensaje de confirmación (textContent)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente";

    //3.Genero la tarjeta
    generarTarjetaPaciente(paciente); //Invocacion de una funcion para generar tarjetas

    return paciente;
} //cierra funcion registrarPaciente


// Funcion para mostrar info del paciente en la consola
// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); 
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
} //Aqui termina mi funcion mostrarInfoPaciente



//Funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){

    //crear
    let tarjetaDiv = document.createElement("div"); //creo un container para mi tarjeta
    tarjetaDiv.className = "col"; //aqui le especifico que es una columna

    //crear contenido de la tarjeta copiando codigo de bootstrap, anteponiendo un backticks
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`

    //Poner
    contenedorTarjetas.appendChild(tarjetaDiv);

} //Cierra funcion crearTarjeta


//evento (para el botón)
botonRegistrarPaciente.addEventListener("click", registrarPaciente);










