/*
Bucle For
sintaxis = for(inicio de variable; condicion; incremento o decremento de variable){
  codigo a ejecutar por cada vuelta
}
*/
document.write("<p class='resultado_inline'>Impresión de nombre ---------- </p>")

for (var i = 0; i < 5; i++){
  document.write(`<p class="resultado_inline">Gustavo vuelta ${i}</p>`)
}

document.write("<p class='resultado_inline'>Impresión de meses ---------- </p>")

const meses = [
    "enero", 
    "febrero", 
    "marzo", 
    "abril", 
    "mayo", 
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"];

for (var x = 0; x < meses.length; x++){
    document.write(`<p class="resultado_inline">${meses[x]}</p>`)
}