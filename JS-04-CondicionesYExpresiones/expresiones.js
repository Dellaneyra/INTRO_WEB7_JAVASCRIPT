console.log("vivo pero a que costo");

/*
Operador
Un elemento que nos permite realizar una operación entre dos o mas elementos. 

    -Operadores aritmeticos (+, -, *, /)
    -Operadores de asignación (asignación =)
    -Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat)
    -Operadores lógicos (&&, ||, !)
    -Operadores de comparación (<,> , =>, <=, igualdad ==, igualdad estricta ===)

*/

//Operadores Aritmeticos: Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numero unico. Corresponden a operaciones matematicas.

//Ejemplos Operadores Aritmeticos

//suma (+): Se utiliza para sumar dos numeros. 
let resultado = 5 + 3; //resultado contendrá el valor 8 

//resta (-): Se utiliza para restar un número de otro. 
let resultado1 = 10 - 4; //resultado contendrá el valor 6

//multiplicacion (*): Se utiliza para multiplicar dos números.
let resultado2 = 6.3; //resultado contrendra valor 18

//division(/):Se utiliza para divir un numero por otro. La división por cero produce un valor especial llamado "Infinity" (infinito).
let resultado3 = 15 / 3; //resultado contendrá el valor 5

//Módulo (%):Se utiliza para obtener el resto de una división entre dos números.
let resultado4 = 10 % 3; //resultado contendrá el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.
let numero = 5;
numero++; //ahora numero contendrá el valor 6

//Decremento (--):Se utiliza para disminuir en 1 el valor de una variable
let numero1 = 8;
numero--; //ahora numero contendra el valor 7

//Doble igual o Igualdad abstaracta
5 == "5" //true; ya que JavaScript convierte la cadena "5" a un numero antes de la comparación. Compara dos valores para verificar si son iguales. 

//Triple igual o Igualdad estricta
5 === "5" //false, porque no son del mismo tipo y los tipos también difieren. Verifica que los valores sean iguales y que tengan el mismo valor


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