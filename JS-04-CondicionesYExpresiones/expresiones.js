console.log("vivo pero a que costo");

/*
Operador
Un elemento que nos permite realizar una operación entre dos o mas elementos. 

    -Operadores aritmeticos (+, -, *, /)
    -Operadores de asignación (asignación =)
    -Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat)
    -Operadores lógicos (&&, ||, !) (Dos negaciones son afirmacion !!)
    -Operadores de comparación (<,> , =>, <=, igualdad ==, igualdad estricta ===)

*/

//Operadores Aritmeticos: Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numero unico. Corresponden a operaciones matematicas.

//Ejemplos Operadores Aritmeticos

//suma (+): Se utiliza para sumar dos numeros. 
//let resultado = 5 + 3; //resultado contendrá el valor 8 

//resta (-): Se utiliza para restar un número de otro. 
//let resultado1 = 10 - 4; //resultado contendrá el valor 6

//multiplicacion (*): Se utiliza para multiplicar dos números.
//let resultado2 = 6.3; //resultado contrendra valor 18

//division(/):Se utiliza para divir un numero por otro. La división por cero produce un valor especial llamado "Infinity" (infinito).
//let resultado3 = 15 / 3; //resultado contendrá el valor 5

//Residuo o Módulo (%):Se utiliza para obtener el resto de una división entre dos números.
//let resultado4 = 10 % 3; //resultado contendrá el valor 1 (el resto de 10 dividido por 3)

//otro ejemplo de residuo
/*let numero = 5;
let numero2 = 2;
let residuo = 5 % 2;*/

//Exponenciacion (**) 

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.
//let numeros = 5;
//numeros++; //ahora numero contendrá el valor 6

//Decremento (--):Se utiliza para disminuir en 1 el valor de una variable
//let numero1 = 8;
//numero--; //ahora numero contendra el valor 7

//Doble igual o Igualdad abstaracta
//5 == "5" //true; ya que JavaScript convierte la cadena "5" a un numero antes de la comparación. Compara dos valores para verificar si son iguales. 

//Triple igual o Igualdad estricta
// === "5" //false, porque no son del mismo tipo y los tipos también difieren. Verifica que los valores sean iguales y que tengan el mismo valor


function celsiusToFahrenheit(gradosCelsius) {
    let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32; //formula para convertir grados celsius a fahrenheit sacada de google
    return gradosFahrenheit;
}

let gradosCelsius = 38; // grados celcius a convertir
let gradosFahrenheit = celsiusToFahrenheit(gradosCelsius);
console.log(gradosCelsius + " grados Celsius son " + gradosFahrenheit + " grados Fahrenheit.");

/* 
// Esta es una función que convierte grados Celsius en grados Fahrenheit.
// Le pasamos la cantidad de grados Celsius que queremos convertir como "gradosCelsius".
function celsiusToFahrenheit(gradosCelsius) {
    // Aquí estamos usando una fórmula que encontramos en Google para hacer la conversión.
    // La fórmula es: (gradosCelsius * 9 / 5) + 32.
    // Esto hace que la conversión de Celsius a Fahrenheit sea matemáticamente correcta.
    let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    
    // Devolvemos el resultado de la conversión para que podamos usarlo más adelante.
    return gradosFahrenheit;
}

// Ahora, queremos convertir 38 grados Celsius a grados Fahrenheit.
// Así que definimos una variable llamada "gradosCelsius" y le asignamos el valor 38.
let gradosCelsius = 38;

// Usamos la función "celsiusToFahrenheit" que definimos anteriormente para hacer la conversión.
// Le pasamos "gradosCelsius" como argumento y obtenemos el resultado de la conversión en "gradosFahrenheit".
let gradosFahrenheit = celsiusToFahrenheit(gradosCelsius);

// Finalmente, mostramos el resultado en la consola.
// Esto imprimirá un mensaje que dice "38 grados Celsius son X grados Fahrenheit."
// Donde "X" será el valor calculado en "gradosFahrenheit".
console.log(gradosCelsius + " grados Celsius son " + gradosFahrenheit + " grados Fahrenheit.");


*/

//Variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2; //12
resta = numero1 - numero2; //8
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2;// es pbsoleto porque hay un metodo para esto

//Los valores si se pueden reasignar (suma y reasigna en la misma operacion)
incremento = numero1++; //11
decremento = numero2--; //1

//Impresiones en pantalla
console.log("Suma de 10 + 2", suma); //1era forma de mostrar la suma
console.log("Suma de 10+2", numero1 + numero2); //2nda forma 
console.log("Suma de 10 + 2", 10 + 2); //3era forma
console.log("Resta de 10 - 2", resta);

/*
Operadores de comparacion
Operadores que nos permiten comparar dos datos, y al hacerlo obtendermos un valor booleano (true or false)

    -Mayor que (>)
    -Menor que (<)
    -Mayor o igual que (>=)
    -Menor o igual que (<=)
    -Igual (==)
    -Estrictamente igual (===)
    -No es igual (!=)
    -No es estrictamente igual (!==)

Igual (==)
Sirve para comparar que dos valores sean iguales

*/

let numerocomparacion1 = 23;
let numerocomparacion2 = 13;
let numerocomparacion3 = 13;
let numerocomparacion4 = "13";

//si evaluo 13 == "13" será true, ya que es el mismo numero, no toma en cuenta que uno es string y otro numero
//si evaluo 13 === "13" será falso, ya que un dato es numerico y otro string
//23 > 12 true
//23 < 12 false

let edadFelipe = 31;
if (edadFelipe >= 18) {
    console.log("Puedes ir a la fiesta");
} else {
    console.log("Te quedas en casa");
}

//Dos negaciones es una afirmación
//!vamos a comer = no vamos a comer
//!!vamos a comer =no no vamos a comer (se traduce como SI vamos a comer)

/* Operadores de asignacion
Son operadores que utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31;
let saldo = 0;

*/

/*Operadores logicos
Nos devuelven un resultado a apartir de que se cumpla (o no) una condicion, el resultado es booleando (ture or false).

    -AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.

    - OR ||: Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso. 

    -NOT (!): Regresa lo contrario de lo que evaluamos

*/

//Ejemplo &&
let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere) {
    console.log("Es un sueño :'c")
} else {
    console.log("Hagamos la moricion")
}


//Ejemplo ||
let hayChilaquilesVerdes = false;
let hayCarneEnSuJugo = false;

if (hayChilaquilesVerdes || hayCarneEnSuJugo) {
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido")
}


//Ejemplo !

let esMayorDeEdad = true;  // Felipe es mayor de edad
let tieneSaldoCelular = false;  // Felipe no tiene saldo en su celular

// Verificamos si Felipe NO es mayor de edad O NO tiene saldo en su celular
if (!esMayorDeEdad || !tieneSaldoCelular) {
    console.log("Felipe no puede ir a la fiesta.");
} else {
    console.log("Felipe puede ir a la fiesta.");
}


//Ejemplo con anidacion de operadores (no funciona, solo es visual)
//if ((edadFelipe >= 18 && saldoFelipe = !0) || (edadFelipe >=18 && amigosqueinvien =true)) 
/*Esto tambien se puede hacer declarando la anidacion con variables:
let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0);
let escenario2 = (edadFelipe >=18 && amigosqueinvien =true)
if (escenario1 || escenario2){
}
*/