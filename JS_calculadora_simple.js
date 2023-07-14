// Calculadora simple de condicionales 

// Solicitud de los datos al ususario

var num1 = prompt("Ingrese el primer valor:");
var num2 = prompt("Ingrese el segundo valor:");

// Si los valores son numéricos procede la solicitud de operación
if(!isNaN(num1) && !isNaN(num2)){
var operacion = prompt("Qué operación desea realizar?: sumar - restar - multiplicar - dividir").toLowerCase();


if (operacion == "sumar"){
    var resultado = parseInt(num1) + parseInt(num2)
    alert(`El resultado de la suma es: ${resultado}`);
    document.write(`<p class="resultado_inline">El resultado de la suma es: ${resultado}</p>`);
}
else if (operacion == "restar"){
    var resultado = parseInt(num1) - parseInt(num2)
    alert(`El resultado de la resta es: ${resultado}`);
    document.write(`<p class="resultado_inline">El resultado de la resta es: ${resultado}</p>`);
} 
else if (operacion == "multiplicar"){
    var resultado = parseInt(num1) * parseInt(num2)
    alert(`El resultado de la multiplicación es: ${resultado}`);
    document.write(`<p class="resultado_inline">El resultado de la multiplicación es: ${resultado}</p>`);
}
else if (operacion == "dividir"){
    var resultado = parseInt(num1) / parseInt(num2)
    alert(`El resultado de la división es: ${resultado}`);
    document.write(`<p class="resultado_inline">El resultado de la división es: ${resultado}</p>`);
}
else {
    alert("Ingrese una operación válida");
};
}
else {
    alert("Ingrese sólo valores numéricos");
};

// función isNaN() verifica si no es número, acá se implementa negada con ! (operador negado)
// función parseInt() para convertir dato en número entero
// método toLowerCase() para convertir el string a minúsculas