
let mayorEdad = true;

if (mayorEdad) {
    console.log("Puedes agendar tu cita");
} else {
    console.log("Ve a la chiza de los pequeñines");
}


/*
Lista doctores
Dr. Jairo Campos
Dra. Laura Martínez
Dr. Alejandro López
Dra. María Rodríguez
Dr. Carlos Hernández
*/


/*
Limpieza Dental
Tratamiento de Caries
Blanqueamiento
Ortodoncia
Extracciones
Estética Dental
Endodoncia
Radiografía
 */

let servicio = parseInt(prompt("¿Que servicio requiere? \n1. Limpieza Dental \n2. Tratamiento de Caries \n3. Blanqueamiento \n4. Ortodoncia \n5. Extracciones \n6. Estética Dental \n7. Endodoncia \n8. Radiografía"));

if (servicio == 1) {
    console.log("Servicio de Limpieza dental.");
} else if (servicio == 2) {
    console.log("Servicio de tratamiento de caries.");
} else if (servicio == 3) {
    console.log("Servicio de Blanqueamiento.");
} else if (servicio == 4) {
    console.log("Servicio de Ortodoncia.");
} else if (servicio == 5) {
    console.log("Servicio de Extracciones.");
} else if (servicio == 6) {
    console.log("Servicio de Estetica Dental.");
} else if (servicio == 7) {
    console.log("Servicio de Endononcia.");
} else if (servicio == 8) {
    console.log("Servicio de Radiografia.");
} else {
    console.log("Error, servicio no existe");
}


let disponibiladDoctor = parseInt(prompt("¿Que doctor deseas consultar? \n1. Dr. Jairo Campos \n2. Dra. Laura Martínez \n3. Dr. Alejandro López \n4. Dra. María Rodríguez \n5. Dr. Carlos Hernández"));


switch (disponibiladDoctor) {
    case 1:
        console.log("Cita registrada con exito");
        break;
    case 2:
        console.log("Cita registrada con exito");
        break;
    case 3:
        console.log("Cita registrada con exito");
        break;
    case 4:
        console.log("Cita registrada con exito");
        break;
    case 5:
        console.log("Cita registrada con exito");
        break;
    default:
        console.log("Error respuesta incorrecta");
        break;
}
