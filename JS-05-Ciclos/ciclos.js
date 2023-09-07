/*
Condiciones : alteran el orden natural del codigo
Estructura de control: controlar la ejecucion del codigo

Ciclos o bucles (loops)
Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas. 

En JS existen los siguiente ciclos:
    -while
    -do while
    -for

Iterar: proceso de repetir una secuencia de instrucciones.
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles. 
*/

/*
While: Ejecuta un bloque de codigo mientras se cumpla una condicion epecifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion. 
while (condicion){
    //codigo que se ejecuta
}

*/
//Este ejemplo no funcionara ya que no tiene una variable definida
//while (miCrushMeQuiere) {
//  console.log("Sere Feliz");
//}

/*NOTA esto significa peligro. Esto es un ciclo sin fin (infinito), porque la condicionque se evalua siempre es true, significa que no hay nad que nos diga que se va a detener.

while(true){
}

Analogía: Seguir una receta para preparar sopa
Lista de ingredientes:
    -Zanahoria
    -Papas
    -Chayote
    -Limon
    -Agua
Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.
Paramos cuando ya no tengamos ingredientes.

*/
//Ejemplo de un consultorio dental
let capacidadPacientes = 5;
let pacientesEnConsultorio = 1;

while (pacientesEnConsultorio < capacidadPacientes) { //mientras 15 sea menor a 50 ...
    console.log("Seguimos dando servicio"); //seguimos dando servicio hasta que sea mayor que 50
    pacientesEnConsultorio++; //punto de final, aumento en mis pacientes 
}

/* Do while (hacer mientras)
Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)

do{
    //codigo a ejecutar
}while (condicion);

El bucle do while se diferencia del while ya que aqui se ejecuta la instrucciion al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

Analogía: Cuando preparamos un pastel.

*/
//Ejemplo de un consultrio dental

var contadorPacientes = 0;
var maxPacientes = 15; // Número máximo de pacientes permitidos

do {
    if (contadorPacientes >= maxPacientes) {
        // Si se alcanza el límite de pacientes salimos del bucle con el break.
        break;
    }

    var nombre = prompt("Ingresa nombre del paciente");

    if (nombre) {
        contadorPacientes++;
    }
} while (confirm("¿Desea registrar otro paciente?"));

console.log("Número total de pacientes: ", contadorPacientes);


//EJEMPLO MAS SENCILLO
// var contadorPacientes = 0;

// do {
//     var nombre = prompt("Ingresa nombre del paciente");

//     if (nombre) {
//         contadorPacientes++;
//     }
// } while (contadorPacientes<5);

// console.log("Número total de pacientes: ", contadorPacientes);

/*
For (para)
Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar
Consiste de 3 partes fundamentales:
    -Inicializacion: Se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    -Condicion: Es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    -Expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for (inicializacion; condicion; espresion de iteracion){
        //bloque de codigo a ejecutar
    }
*/

//Crea un codigo que imprima los numeros del 0 al 4

for (var valorInicial = 0; valorInicial < 5; valorInicial++) {
    console.log(valorInicial);
}

//version mas "comercial"
for (var i = 0; i < 5; i += 5) {
    console.log(i);
}

//Consultorio dental registro de citas con un for
let cantidadDeCitasDiarias = 5;

for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("Ingrese nombre del paciente" + i);
    console.log("Paciente con cita " + nombre + i);
}






