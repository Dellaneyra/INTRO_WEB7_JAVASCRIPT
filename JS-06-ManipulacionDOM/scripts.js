/*
DOM (Document Object Model / Modelo de Objetos del Documento)
Cuando creamos paginas que usan HTML + CSS estamos creando paginas estaticas(porque no tienen interactividad), cuando agregamos JS nuestas paginas se convierten en sitios dinámicos (tienen interactividad). 

El navegador lee el documento HTML de arriba a abajo y de izquierda a derecha (renderizacion)

Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc. 

Cuando el documento se denderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas, y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del Dom y entendemos que se representa como un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas son un nodo. 

QUE ES UN NODO?
Representación más basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede er un texto, incluso un comentario.
    -Document: Nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos se derivan de este. 

    -Element: Son nodos definidos por etiquetas HTML (div, h1, p, meta, head, script, etc), ya sea que se vean o no (etiquetas que interpreta el navegador), 

    -Text: el texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo. 

    -Atribbutes: los atributos de las etiquetas tambien se convierten en nodos. Son nodos que estan asociados a un elementoy se pueden considerar tambien nodos hijos. 

    -Comment: los comentarios tambien son un nodo, porque forma parte del documento. 


    ¿PARA QUE UTILIZAMOS JS EN UN DOM (en un documento modelado?
        -Para agregar elementos HTML
        -Modificar elementos HTML
        -Borrar elementos HTML

*/

//Comenzamos a trabajar con los nodos de mi documento HTML

//1. Paso: Guardar los elementos HTML en variables de JS (let, var, const)
/*Metodos de seleccion de elementos: Permiten traer una etiqueta HTML y guardarla para su uso posterior.


*/ 

//Aqui obtengo mi elemento por ID
const nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente)

//Aqui obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);

/*
Metodos actuales 

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los ID)
        -document.querySelector
        -document.querySelectorAll
*/

//Aqui obtengo un elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtengo varios elementos por el selector .
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Metodos para modificar elementos en su texto
        -innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)

        -textContent:Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)
*/

//Modificando el texto de un h1 con innerHTML:

let titulo= document.getElementById("titulo");

//titulo.innerHTML = "<p>Bienvenido(a)</p>" //crea dentro del h1 un parrafo

//creando un nuevo texto con innetHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmación</p>";


/*
Crear elementos debe ser en este orden
    -Crear el elemento
        *createElement
        *createTextNode
        *createComment
    -Poner el elemento
        *append (mismo nivel)
        *appendChild (como"hijo" de alguien mas)
*/


//Creando un elemento con createElement
let imagen = document.createElement("img");

//Crear los atributos de un elemento
//imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
//imagen.alt = "Foto de perrito feliz";

//obtener el lugar donde quiero poner mi imagen
//mensajeConfirmacion.appendChild(imagen);












