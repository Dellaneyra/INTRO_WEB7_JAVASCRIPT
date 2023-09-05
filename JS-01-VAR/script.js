//alert("Hola mundo"); las dobles diagonal son para comentar
/*para comentar varias lineas se utiliza el mismo parametro que en CSS*/

/*var frasco = "pastillas";
var frasco = "pastillas con chocolate";
var frasco = "shampoo";

console.log(frasco);*/

/*Tipos de datos (primitivos y no primitivos) 

string
number
boolean
undefined
null
symbol
object (no es primitivo)

*/

/*
//String es una cadena de TextDecoder, que siempre debe ir entre comillas simples o dobles 
var vaso = "un monton de cosas";

//number no lleva comillas, y se refiere a un numero con el cual podemos hacer aperaciones
var edad = 26;

//Boolean solamente tiene dos salidas que es true or false
var cuentasPremium = false;

//undefined es un tipo de dato que existe pero no esta definido o inicializado
var proxCita =;

//null es un valor que no tenemos pero que declaramos 
var asistenciaInvitado = null;
*/

var edad = "31"
var peso = 66;
console.log(typeof (edad));

//typeof es una palabra reservada que nos ayuda a saber que tipos de datos tenemos

//var es una variable con alcance global (tiene mayor alcance)
//let es una variable con alcance local (solo se utiliza dentro de un bloque de codigo)
//const es una constante, es decir que es una variable que no cambia


//EJEMPLOS PARA CAMBIAR VAR NUM A STRING

var pesoCadena = peso.toString();
console.log((pesoCadena.toString)); //esto es un ejemplo para ver el cambio que se esta realizando
console.log(typeof (pesoCadena));

var pesoCadena = peso.toString(); //para convertir la var de num a string
console.log(pesoCadena); //esta es la manera correcta de imprimir el cambio a sting de este ejemplo
console.log(typeof (pesoCadena)); //para verificar el cambio 



//EJEMPLO PARA CAMBIAR VAR STRING A NUM

var edadNumero = parseInt(edad); //para convertir la var string a num
console.log(edadNumero); //para imprimir la variable num de este ejemplo
console.log(typeof (edadNumero)); //para verificar el cambio




//EJEMPLOS EN EQUIPO


//var nombreMedico = "";
var nombrePaciente = "Della";

var edad = 52;
//var cantidadProducto = ;

//var cuponDescuento = false;
//var pacienteNuevo = true;

//var fechaCita = undefined;
//var horaCita = undefined;

//var edad = null;
//var nombreMedico = null;


var edadTexto = edad.toString(); //para convertir la var de num a string
console.log(edadTexto); //esta es la manera correcta de imprimir el cambio a sting de este ejemplo
console.log(typeof (edadTexto)); //para verificar el cambio 

var nombre = parseInt(nombrePaciente); //para convertir la var string a num
console.log(nombre); //para imprimir la variable num de este ejemplo
console.log(typeof (nombre)); //para verificar el cambio



