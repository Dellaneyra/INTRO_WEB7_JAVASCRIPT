// Funciones para el proceso de limpieza de instrumental dental

// Función para enjuagar el instrumental dental con agua
function enjuagarConAgua(cantidadInstrumental) {
    console.log("Enjuagando " + cantidadInstrumental + " piezas de instrumental dental con agua.");
    let instrumentalLimpio = cantidadInstrumental;
    console.log("Se obtuvieron " + 10 + " instrumentales limpios");
    return instrumentalLimpio;
}

// Función para aplicar desinfectante al instrumental dental
function aplicarDesinfectante(cantidadInstrumental, Desinfectante) {
    console.log("Aplicando " + Desinfectante + " a " + cantidadInstrumental + " piezas de instrumental dental.");
}

// Función para esterilizar el instrumental dental
function esterilizarInstrumental(cantidadInstrumental) {
    console.log("Esterilizando " + cantidadInstrumental + " piezas de instrumental dental.");
    instrumentalLimpio = true;
}

// Función principal que lleva a cabo el proceso de limpieza y esterilización
function limpiarYEsterilizarInstrumental(cantidadInstrumental, Desinfectante) {
    enjuagarConAgua(cantidadInstrumental);
    aplicarDesinfectante(cantidadInstrumental, Desinfectante);
    esterilizarInstrumental(cantidadInstrumental);
}

// Llamamos a la función principal para limpiar y esterilizar el instrumental dental
var instrumentalLimpio = false;
limpiarYEsterilizarInstrumental(10, "desinfectante");
