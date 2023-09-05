//Funciones

/*

*Una funcion es un bloque de codigo que realiza una tarea especifica, cuando se le llama.
*Cada funcion de JS en un objeto llamado Funcion. 

*/

/* Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */


function saludar() {
    console.log("Hola soy una función");
}

saludar();

/*
*Declarar funciones:
-La palabra reservada function, que nos indica que estamos definiendo una función.
-El nombre de la función, dependiendo de la acción a realizar.
-Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno.
-Seguido de un juego de llaves {} para cerar el bloque de código. 
-Dependiendo de las instrucciónes dentro del cuerpo de la función y del propósito de la misma, se determina si la función retorna un valor.
*/

//Llamamos una funcion y le vamos a almacenar un resultado 
function suma(a, b) {
    return a + b;
}

var resultado = suma(5, 3); //almacenar funcion en una variable
console.log(resultado); //funcion
/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//funcion que muestre un mensaje en la consola
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

//llamamos a la función saludar a alguien
saludar("Della"); // Imprime el saludo

/*
 * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. 
*/

/*
//Hoisting:
Es fundamental en el entendimiento de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para variables como para funciones. Como tal, la traduccion de Hoisting es elevación, a partir de aquí, su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
*Yo puedo invocar una funcion antes de siquiera declarla
*/

console.log(miVariable); //no da error, pero si la imprime "undefined"
var miVariable = 10;
//SCOPE = ALCANCE
/*hace referencia al alcance que tendra una variable en el codigo de JS.
el scope puede ser global, y quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo.
-var: no es tan recomendable, por el comportamiento de la variable y la poca adaptabilidad.
-let: es preferible e incluso es mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local.
-const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.

*/

//VARIABLE LOCAL

function funcionConVariableLocal() {
    var mensaje = "Esta es una variable local";
    console.log(mensaje);
}

//funcionConVariableLocal();  //para poder acceder a ella es necesario declararla primero

//var mensaje = "holis";
//console.log(mensaje);

/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//VARIABLE GLOBAL

var mensajeGlobal = "Esta es una variable global"
function funcionConVariableGlobal() {
    console.log(mensajeGlobal);
}

funcionConVariableGlobal(); //llamamos a la variable

/*
-En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. 
*/

///////////////////////////
//Funciones anónimas//
//////////////////////////
/*Estas funciones pueden ser declaradas sin un nombre, y luego asignadas a variables o pasarse como parametros en otras funciones.
*La diferencia principal de estas funciones es que se declaran sin un nombre. */

//function () {
//console.log("Hola");  //esto es una funcion anónima 
//}
const saludo = function () {
    console.log("Hola");
}
saludo();

/////////////////////////
//Funciones flecha//
////////////////////////
/*una forma mas concisa de definir funciones anonimas. Se le llama flecha debio a la sintaxis que utiliza (=>)
Basicamanete se trata de reemplazar la palabra function y añadir => antes de abrir nuestras llaves*/

const resta = (a, b) => a - b;
console.log(resta(5, 3));

//esta funcion flecha es una forma mas corta de: 
/* const resta = function (a,b){
    return a-b;
}
*/