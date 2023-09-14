/*
Un array es un conjunto de datos que se pueden almacenar en uan sola variable. 
Un arreglo es una estructura de datos que podemos definir como una colección de variable (que pueden ser diferentes, pero con un mismo contexto).

*/


//Variables que estan "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";


//Usar un array (arreglo) para "juntar" nuestras variables
//Agragamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof (cosasRandom)); //objeto
//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un objet porque los arrays son objetos(despues veremos que tenemos muchos tipos de objetos)

//Los arreglo, al ser objetos, cuentan con metodos que nos permiten manipularlos


//Ya que tengo mi arreglo, como podemos acceder a esa información?
// para mostrar la cantidad de elementos que tengo en un arreglo usamos un metodo llamado length 
console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en especifico 
console.log(personasDeLaCH31[0]); //mostrara al elemento que este en la primera posicion. 
console.log(personasDeLaCH31[25]); //da undefined porque no esta definido este elemento, aun no existe. 

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable. 

//Declaro el indice en una variable
let index = 4;
//Paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //

//Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra.Garcia", "Dr.House", "Dr. Simi"];
//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos
dentistas[3] = "Similares"
dentistas[8] = "Dr. Strange"

console.log(dentistas)

/////////////////////////////////////////////////////////////////

//Metodos de arrays 
let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduras"];

//Metodo length para comocer la longitud del array
console.log("La cantidad de elementos en esta lista fea de super es: " + listaDelSuper.length);

//Metodo push() para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");
console.log(listaDelSuper)

//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop(); //siempre se deben poner parentesis para llamar una funcion
console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el metodo unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);


//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posicion de un elemento del array las verduritas
console.log(listaDelSuper.indexOf("Verduras"));

//Metodo splice para agregar, eliminar, o remplazar elementos
//nombreArreglo.splice (inicio, cantidadDeElementosAEliminar, elementoInsertar1, elementoInsertar2, ...);
listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");
console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "Platano");
console.log(listaDelSuper);



//Metodo .map()
let numeros = [1, 2, 3, 4, 5];
//crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, ..] 

let numerosPorDos = numeros.map(function (numero) {
    return numero * 2;
});

console.log(numerosPorDos);

/* 
Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atención especial

    Aspectos a considerar 
    -2 arreglos (original y el modificado)
    -condicion if
    -funcion para agregar el nuevo dato a cada elemento
    -metodo map()
*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Felipe", edad: 31,
    },
    {
        nombre: "Fatima", edad: 26,
    },
    {
        nombre: "Jesus", edad: 51,
    }
]

//Funcion para agregar el texto necesita atención especial
function agregarEstadoSalud(paciente) {
    let estado = "Saludable";

    //Si el paciente tiene mas de 40 años
    if (paciente.edad > 40) {
        estado = "Necesita atención especial";
    }
    return {
        ...paciente, //copia del paciente
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };

}
//vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);



/*En una carrera se tienen los siguientes corredores con su respectiva posicion:
- Primer lugar: Roberto
-Segundo lugar: Andrea
-tercer lugar: Jorge
-Cuarto lugar Ramiro
-Quinto lugar Sofía

Despues de 3 vueltas, Jorde adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro mantiene su lugar y el quinto es reemplazado por José. ¿Cómo quedan las posiciones después dde esas 3 vueltas? */


/* Arreglo con las posiciones iniciales 

let posicionesIniciales = [
    "Roberto", // Primer lugar
    "Andrea",  // Segundo lugar
    "Jorge",   // Tercer lugar
    "Ramiro",  // Cuarto lugar
    "Sofía"    // Quinto lugar
];

// Jorge adelanta a Roberto
posicionesIniciales = posicionesIniciales.map(nombre => {
    if (nombre === "Roberto") return "Jorge";
    if (nombre === "Jorge") return "Roberto";
    return nombre;
});

// Ramiro adelanta a Jorge
posicionesIniciales = posicionesIniciales.map(nombre => {
    if (nombre === "Jorge") return "Ramiro";
    if (nombre === "Ramiro") return "Jorge";
    return nombre;
});

// Roberto se lesiona y sale de la carrera (usando pop)
posicionesIniciales.pop(); // Eliminar a Roberto

// Andrea baja una posición
posicionesIniciales = posicionesIniciales.map(nombre => {
    if (nombre === "Andrea") return "Jorge";
    if (nombre === "Jorge") return "Andrea";
    return nombre;
});

// El quinto es reemplazado por José (usando push)
posicionesIniciales.pop(); // Eliminar al quinto (Sofía)
posicionesIniciales.push("José"); // Agregar a José al final

// Mostrar las posiciones finales
console.log("Posiciones después de las 3 vueltas:");

// Usar map para crear un nuevo array de cadenas de posiciones finales
let posicionesFinales = posicionesIniciales.map((nombre, posicion) => `Lugar ${posicion + 1}: ${nombre}`
);

// Usar console.log para mostrar el nuevo array
console.log(posicionesFinales.join('\n'));   


//Método "map()" para crear un nuevo array con los resultados de la función indicada aplicados a cada uno de sus elementos
/*
let nuevoArreglo = arregloOriginal.map(
    function(elemento, indice, arreglo) {
        //Código para procesar el elemento y devolver un nuevo valor
        return nuevoValor;
    }
);
    * arregloOriginal
Este es el arreglo en el que deseas iterar y aplicar una función a cada elemento.
    * elemento
Es el valor del elemento actual en el arreglo durante la iteración.
    * indice (opcional)
Es el índice del elemento actual en el arreglo durante la iteración.
    * arreglo (opcional)
Es el arreglo original que se está recorriendo. Este argumento es opcional y generalmente no se usa con mucha frecuencia.
    * nuevoArreglo
Es el nuevo arreglo que se crea como resultado de aplicar la función a cada elemento del arreglo original. Este nuevo arreglo contendrá los valores devueltos por la función en lugar de los valores originales del arreglo original.
    * function(elemento, indice, arreglo) { ... }
Este es el argumento de función que defines para especificar cómo se procesará cada elemento del arreglo original. Debes proporcionar el código dentro de esta función que realice alguna operación en el elemento y devuelva el nuevoValor, que será el valor correspondiente en el nuevo arreglo resultante.
*/

/*
let numeros = [1, 2, 3, 4, 5];
//Crear otro arreglo con los números multiplicados x2 [2, 4, 6, 8, 10]
let numerosPorDos = numeros.map(function (numero) { return numero * 2; })
console.log(numerosPorDos);
*/

/*
let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(corredores);

function jorgeAdelantaRoberto() {
    corredores.splice(2, 1);   //Eliminamos a Jorge de su posición original
    corredores.unshift("Jorge"); //Agregamos a Jorge en la primera posición
}
function ramiroAdelantaJorge() {
    corredores.splice(3, 1); //Eliminamos a Ramiro de su posición original
    corredores.unshift("Ramiro"); //Agregamos a Ramiro a la primera posición delante de Jorge
}
function robertoByeBye() {
    let indexRoberto = corredores.indexOf("Roberto"); //obtenemos el indice de Roberto
    corredores.splice(indexRoberto, 1); //eliminamos a Roberto de su posición actual
}
function andreaBajaPosicion() {
    let indexAndrea = corredores.indexOf("Andrea"); //obtenemos indice de Andrea
    corredores.splice(indexAndrea, 1); //Eliminamos a Andrea de su posicion actual
    corredores.splice(indexAndrea, + 1, 0, "Andrea") //agregamos a Andrea en la posicion siguiente 
}
function entraJose() {
    corredores.push("José"); //agregamos a josé al final de la lista en la ultima posición
}

jorgeAdelantaRoberto();
ramiroAdelantaJorge();
robertoByeBye();
andreaBajaPosicion();
entraJose();
console.log(corredores);
*/

let corredores = ["Roberto", 
"Andrea", 
"Jorge", 
"Ramiro", 
"Sofía"];
console.log(corredores);

function jorgeAdelantaRoberto() {
    corredores.splice(2, 1);   // Eliminamos a Jorge de su posición original
    corredores.unshift("Jorge"); // Agregamos a Jorge en la primera posición
}

function ramiroAdelantaJorge() {
    corredores.splice(3, 1); // Eliminamos a Ramiro de su posición original
    corredores.unshift("Ramiro"); // Agregamos a Ramiro a la primera posición delante de Jorge
}

function robertoByeBye() {
    let indexRoberto = corredores.indexOf("Roberto"); // Obtenemos el índice de Roberto
    corredores.splice(indexRoberto, 1); // Eliminamos a Roberto de su posición actual
}

function andreaBajaPosicion() {
    let indexAndrea = corredores.indexOf("Andrea"); // Obtenemos el índice de Andrea
    corredores.splice(indexAndrea, 1); // Eliminamos a Andrea de su posición actual
    let newIndex = indexAndrea + 1; // Calculamos la nueva posición
    corredores.splice(newIndex, 0, "Andrea"); // Agregamos a Andrea en la nueva posición
}

function entraJose() {
    corredores.push("José"); // Agregamos a José al final de la lista en la última posición
}

// Utilizando un bucle for each para mostrar los corredores
function mostrarCorredores() {
    corredores.forEach(function(corredor) {
        console.log(corredor);
    });
}


console.log("Lista de corredores después de las operaciones:");
mostrarCorredores();


