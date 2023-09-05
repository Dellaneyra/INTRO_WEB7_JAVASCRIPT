//funciones
//programa para hacer limonada 
function exprimirLimones(cantidad) {
    console.log("Exprimiendo " + cantidad + "Limónes.");
    let jugoExtraido = cantidad * 10; //considerando obtener 10 ml de jugo por cada limón.
    console.log("Se obtuvo " + jugoExtraido + "ml de jugo de limón ");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo de limón con agua y azucar.
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log("Mezclando " + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua " + cantidadDeAzucar + "gramos de azucar.");
}
//Funcion para servir Limonada
function servirLimonada() {
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Funcion principal que prepare limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //cantidades ficticias de jugo de limon, de agua, y de azucar.
    servirLimonada();
}

//Llamamos a la funcion princial para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5);