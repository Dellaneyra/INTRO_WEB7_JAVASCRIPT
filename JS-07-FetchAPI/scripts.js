/* 
Retomando las API
    -APIs internas (API DOM, LocalStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.
    -APIs externas (GoogleMaps, FakeStore API, API Paypal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

    EJEMPLO de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

    Ventajas de utilizar una APIs
        -Restructurar y organizar los sistemas de forma que sean mas sencillos de usar.
        -Permiten que los sistemas sean mas robustos
        -Reducen los costos de mantenimiento
        -Permiten que los sistemas sean escalables

*/

/* 
sincronía 
Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta).

*/
//Ejemplo de una operacion sincronica
console.log("Inicia mi operacion sincronica")

function dosSincronica (){ //se declara la funciona, pero no la invoca
    console.log("Dos");
}

function unoSincronico (){
    console.log("Uno");  //declara valor de funcion
    dosSincronica ();   //aqui invoca la funcion de arriba
    console.log("Tres"); //declara valor de funcion
}
unoSincronico(); //imprime funcion donde se invocaron todas las funciones
console.log("Finaliza mi operacion sincrona");

//Los casos donde me conviene tener operaciones sincronas son (Lectura de arrays, yso de algunos métodos de arrays, condicionales, ciclos, ejecución de funciones "nomales"). 






/* 
Asincronía
Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo, sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada)
*/
//Ejemplo de operacion asincronica 
console.log("Incia mi operacion asincronica");
function dosAsync(){
    console.log("Uno");
    setTimeout(function(){ //setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos");
    }, 3000); //cierra la funcion dentro de la funcion principal
}

function unoAsync(){
    dosAsync(); //se invoca funcion de arriba (dosAsync)
    console.log("Tres");
}

unoAsync(); //se invoca funcion unoAsyn
console.log("Finaliza mi operacion asincronica");



//Mecanismos para manejar la asincronia

/*Para controlar la asincronia en JS, podemos usar algunos de estos mecanismos:
    -Callback: La forma mas clasica de manejar la asincronia. Se le conoce como (llamada de vuelta), basiacmente es pasar una funcion como parametro de otra funcion, y se ejecutam una vez ue se cumpla la condicion esperada. 
        //Metodo.map de los arrays


    -Promesas: son objetos que representan un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las promesas es que no se anidan, en una sola funcion podemos manejarambas situaciones.
        //Las promesas tienen 3 estados posibles:
        -Pending; estado inicia, cuando se crea la promesa/operación asincrona. Aquí aun no hay resultados.
        -Fullfiled: cuando la promesa/operacion asincrona se resuelve con exito(resolve)
        -Rejected: cuando la operacion asincrona falla (reject)

    -Async/await

*/



//Funcion especial para consumir APIs y manejar promesas 
fetch("https://fakestoreapi.com/products/1")
//Dos esenarios (obtengo respuesta o no obtengo respuesta)
.then(datos => {  // cuando la promesa se resuelve, ejecuto esta funcion
    console.log(datos);
    return datos.json();  //convertir la respuesta
})
.catch(error =>{
    console.log("Error, no encontramos el producto");
    console.log(error.message);
})




/*
Sintaxis del fetch (con promesas)

    fetch(url a consumir)
        .then(response => response.txt()) //manejo la respuesta
        .then (datos => console.log(datos)) //manejo el dato

        .catch(error => console.log(error));

*/

//asigno el fetch desde una variable
const conexion = fetch("https://fakestoreapi.com/products/1")

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

//usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
.then (function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})

//uso el metodo then para manejar el producto(Lo relleno con la info del producto)
.then(function(producto){
    console.log("Información del producto: ", producto);
})

//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function(error){
    console.log("Error", error)
})

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);


//Objeto JSON que voy a madar a un servidor 
let paciente = {
    nombre: "Felipe", 
    edad: 31, 
    estatus: "Registrado" 
}

console.log(paciente);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea
let pacienteConString = JSON.stringify(paciente);
console.log(pacienteConString);

let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"registrado"}';

let pacienteJson = JSON.parse(pacienteServidor);
console.log(pacienteJson);

//Si mando un JSON al servidor, lo hago string
//Si recibo un string del servidor, lo parseo

function generarTarjetaProducto (producto){
    //crear elemento
    createElement(img);
    img.src = producto.image;
}


//Metodo POST para enviar un nuevo producto a nuestra base de datos de la FakeStoreAPI

fetch('https://fakestoreapi.com/products',{  //endpoint (primero revisar a donde va la ruta)
            method:"POST",   //especificar el tipo de metodo
            body:JSON.stringify(  //instruccion para serializar el cuerpo de mi solicitud (para la interpretaacion del servidor)
                {
                    title:'Sopa Maruchan Habanero',
                    price: 15.5,
                    description: 'Deliciosa sopa maruchan de habanero',
                    image: 'https://modeloramanow.vtexassets.com/arquivos/ids/155905/maruchan_camaron-y-habanero.png?v=637638069704570000',
                    category: 'Sopas instantaneas'
                }
            )
        })
            .then(res=>res.json())  //metodo para la respuesta (para saber que el producto llego bien al servidor)
            .then(json=>console.log(json)) //impresion en consola para revisar la info




fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info