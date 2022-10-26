

/* PEDIR PON PANTALLA SU NOMBRE, EN OTRO PROMPT
PEDIMOS EL NUMERO DE VECES QUE DESEAMOS IMPRIMIR SU NOMBRE */


var nombre=window.prompt("Introduce su nombre");
var veces=window.prompt("¿Número de veces que deseas ver su nombre?");

for (var mostrar=0;mostrar<veces;mostrar++){
    document.write(nombre + "<br>");
}