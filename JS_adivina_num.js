// Adivina el número 

var numeroAleatorio = Math.round(Math.random() * 10);
var numero = 0, intentos = 0;
var numEs = document.getElementById("n_es");
var numIntentos = document.getElementById("intentos");

do {
    numero = prompt("Introduce un número entre 0 y 10");

    if (numeroAleatorio > numero){
        numEs.value = "Más alto";
    }

    if (numeroAleatorio < numero){
        numEs.value = "Más bajo";
    }
    intentos++;
    numIntentos.value = intentos;

} while(numeroAleatorio != numero);

numEs.value = "ADIVINASTE !!!";