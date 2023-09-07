//EJEMPLO #1 Consultorio Dental

let cantidadVecesUtilizadoInstrumento = 20;

function usoInstrumental(usos) {

    for (let i = 1; i <= cantidadVecesUtilizadoInstrumento; i++) {
        if (i < 20) {
            console.log("Se ha utilizado " + i + " veces");
        } else {
            console.log("Se descompuso el instrumento");
        }
    }
}

usoInstrumental(cantidadVecesUtilizadoInstrumento);


//EJEMPLO #2 LinkGameIn 

let cantidadMaximaJuegosFavoritos = 10;
let contadorJuego = 0;

function juegosFavoritos(contador, juegosMaximos) {
    do {
        let juego = prompt("Ingresa tu juego favorito");
        console.log("Juego favorito: " + contador + ": " + juego);
        contador++;
    } while (contador <= juegosMaximos);
    console.log("Ya no puedes agregar más juegos");
}

juegosFavoritos(contadorJuego, cantidadMaximaJuegosFavoritos);