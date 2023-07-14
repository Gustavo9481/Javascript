/* Condicional if
Se comporobará si el presupuesto del usuario es suficiente
para comprar un carro */

var carro = 30000;
var presupuesto = prompt("cuál es su presupuesto?");
var edad = prompt("Ingrese su edad");

if (presupuesto >= carro && edad >= 18){
    document.write(`<p class="resultado_inline">Puede Comprar su carro!! <i class="ph ph-car-profile" style="color: green; font-size: 2em;"></i></p>`);
} 
else{
    document.write(`<p class="resultado_inline">Su presupuesto o edad no es suficiente para comprar un carro <i class="ph ph-smiley-sad" style="color: red; font-size: 2em;"></i></p>`);
}

// != => ~~~> <!-- coment -->
//
//
