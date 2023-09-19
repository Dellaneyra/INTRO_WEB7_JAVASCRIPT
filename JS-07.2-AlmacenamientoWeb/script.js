/*
API de almacenamiento web
Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.

*/


/*Almacenamiento local(localStorage)
La información que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo, o borrada del navegador.

Caso de uso: Articulos de un carrito de compras, guardamos un perfil de configuración, historial de uso. 
*/ 

//Guardando mi primer dato en local storage 
//localStorage.setItem(key, value)
localStorage.setItem("Nombre", "Pistachito");
localStorage.setItem("Apellido", "Vazquez");
localStorage.setItem("Edad", "1");

let carritoComprasDella = ["Chettos", "Cocon", "kraken", "Paletas"];

localStorage.setItem("Carrito", carritoComprasDella);

//Obtener la información almacenada en mi localStorage
//localStorage.getItem(key);


//localStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando el carrito de compras
let carrito = localStorage.getItem("Carrito");
console.log(carrito);

//borrar un elemento del localStorage
//localStorage.removeItem(key)
localStorage.removeItem("Edad");

//conocer el largo o longitud del localStorage
//localStorage.length
let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//para modificar datos con set
localStorage.setItem("Apellido" , "Guerra");