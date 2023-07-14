// Bucle while

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

let contador = 0;

while(contador < meses.length){
    document.write(`<p class="resultado_inline">${meses[contador]}</p>`);
    contador++;
};