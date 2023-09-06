//flujo de control

/*
-Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo - izquierda/derecha). Estas instrucciones pueden ser una funcion, un console.log, un ciclo, etc.
-La importancia que tien el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instruccion detonante)


*Condicionales:
Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipuados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false. (boolean)

Ejemplo:
    -Tengo la camisa limpia?
        Si: voy a la fiesta
        No: me quedo en casita

    -Tengo esta variable?
        Si: ejecuto la linea 57 de mi codigo;
        No: ejecuto la linea 58 de mi codigo;


-Condicional if (si)
Nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condicion mas sencilla, pero la mas limitante porque solo da una opcion.

Ejemplo:
    if (condicion){
        bloque de codigo que se ejecuta si la condicion es verdadera (se cumple);
    }


*/
//EJEMPLO: Felipe va a ir a una fiesta y necesia tener su camisa favorita limpia para poder ir
if (camisaLimpia = true) {  //siempre tiene que ser true para que se ejecute el codigo
    console.log("Felipe va a la fiesta");
}

/*
-Condicional else (de otro modo)

if(condicion detonante){
    bloque de codigo que se ejecuta si la condicion es verdadera (se cumple);
}
else{
    bloque de codigo que se ejecuta si la condicion es falsa
}
*/
//MISMO EJEMPLO AGREGANDO ELSE:
if (camisaLimpia = false) {
    console.log("Felipe va a la fiesta"); //este se ejecuta si es verdadero
} else {
    console.log("Felipe se queda en su casa"); //este se ejecuta si es falso
}

/*
-Condicional else if
Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. Para lograr esto, vamos a unir el "else" con el "if".

if(condicion detonante){
    bloque de codigo que se ejecuta si la condicion es verdadera
} else if (condicion detonante 2){
    bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
}else{
    bloque de codigo i las dos condiciones son falsas
}

*/
//EJEMPLO: Felipe tiene hambre, y quiere comer chilaquiles verdes 
//-detonante: Felipe tiene hambre. condiciones: quiere comer chilaquiles verdes. que pasa si no hay chilaquiles?
if (hambre = true) {
    console.log("Felipe va a comer");
} else if (chilaquiles = verdes) {
    console.log("Felipe come chilaquiles");
} else {
    console.log("Felipe no come y se pone tite");
}

//EJEMPLO: escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a descanso" el segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer" y el tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir "lo siento mi ciela, seguimos programanding"


let hora = prompt("Hola, dime una hora"); //Prompt es una forma de ingresar datos y poder hacer uso de ellos. 

if (hora == 13) {
    console.log("vamos a descanso");
} else if (hora == 14) {
    console.log("vamos a comer");
} else {
    console.log("lo siento mi ciela, seguimos programanding")
}

/*
-Condicional Switch (cambiar, intercambiar, segun sea el caso)
Esta condicional nos permite hacer multiples operaciones y tener decisiones en funcion de la opcion deseada (estado de la variable)
Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con este caso, asi como los casos que siguen. 

Elementos principales del switch: un valor a evaluar, un detonante para cada cosa, una salida para cada caso, y una salida en general.

Expresion con un valor:
switch(expresion){
    case1:
    bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1. 
    break;

    case2: 
    bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2.
    break;

    case3: 
    bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3.
    break;
    
    default:
    bloque de codigo que se ejecuta si ninguna opcion coincide

}

*/

//Elevador con else if

let piso = 5;

if (piso == 1) {
    console.log("Llegamos al piso 1");
} else if (piso == 2) {
    console.log("Llegamos al piso 2");
} else if (piso == 3) {
    console.log("Llegamos al piso 3");
} else if (piso == 4) {
    console.log("Llegamos al piso 4");
} else if (piso == 5) {
    console.log("Llegamos al piso 5");
} else {
    console.log("Piso no encontrado");
}

//Elevador con switch
let pisoSwitch = prompt("A que piso vas?")
switch (pisoSwitch) {
    case "1":
        console.log("Llegamos al piso 1");
        break;

    case "2":
        console.log("Llegamos al piso 2");
        break;

    case "3":
        console.log("Llegamos al piso 3");
        break;

    default:
        console.log("Piso no encontrado");
}


//funciones aplicables a un consultorio dental
//funcion calcular costo de una consulta (condicionales)

//UN EJEMPLO MAS SENCILLO


function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente) {
    let costoTotal = duracionMinutos * costoPorMinuto;

    if (clienteFrecuente) {
        costoTotalConDescuento = costoTotal * .9;
    }
    return costoTotalConDescuento;
}
console.log(calcularCostoConsultaDos(45, 15, true));



// //Variables para mis datos 
// let tipoServicio;
// let tiempoConsulta;
// let emergencia;
// let promocion;
// let clienteFrecuente;
// let costo;

// function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {
//     tipoServicio = "extraccion";
//     tiempoConsulta = 120;
//     emergencia = true;
//     promocion = .10;
//     clienteFrecuente = true;
//     costo = 5000;
//     promocionClienteFrecuente = .10;

//     let costoTotal = costo - promocion; //calcular el costo total (antes de validar si es cliente frecuente)

//     if (clienteFrecuente == true) {
//         costoTotal * promocionClienteFrecuente;
//     }
// }


function registrarPaciente() {
}



/*
lista para consultorio

Servicios:
Examen Bucodental Inicial
Procedimientos de obturación o llenado dental
Extracciones dentales
Servicios de limpieza dental
Ortodoncia
Tratamientos de blanqueamiento

Doctores:
Dr. Jairo Campos
Dra. Laura Martínez
Dr. Alejandro López
Dra. María Rodríguez
Dr. Carlos Hernández

*/

//Ejemplo de if
let mayorEdad = true;

if (mayorEdad == true) {
    console.log("Puedes agendar tu cita");
} else {
    console.log("Ve a la choza de los pequeñines");
}

//Ejemplo else if

let disponibilidadDoctor = parseInt(prompt("Que doctor deseas consultar? \n1 Dr. Jairo Campos \n2 Dra. Laura Martínez \n3 Dr. Alejandro López \n4 Dra. María Rodríguez \n5 Dr. Carlos Hernández"));

switch (disponibilidadDoctor) {
    case 1:
        console.log("Cita registrada con éxito");
        break;
    case 2:
        console.log("Cita registrada con éxito");
        break;
    case 3:
        console.log("Cita registrada con éxito");
        break;
    case 4:
        console.log("Cita registrada con éxito");
        break;
    case 5:
        console.log("Cita registrada con éxito");
        break;
    default:
        console.log("Error respuesta incorrecta");
}



