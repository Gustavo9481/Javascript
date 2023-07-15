/*
Calculadora simple de funciones
Bucle Do while
Condicionales
*/

// Funciones Generales de operaciones

function suma (num1, num2){
    alert(`Resultado suma = ${num1 + num2}`)
}

function resta (num1, num2){
    alert(`Resultado resta = ${num1 - num2}`)
}

function multiplica (num1, num2){
    alert(`Resultado multiplicación = ${num1 * num2}`)
}

function divide (num1, num2){
    alert(`Resultado división = ${num1 / num2}`)
}

// Bucle de Ejecución
do {
    var opciones = ["sumar", "restar", "multiplicar", "dividir"]
    var operacion = prompt("Qué operación desea realizar? sumar - restar- multiplicar - dividir").toLowerCase()
    if (opciones.includes(operacion)) {

        var num1 = parseInt(prompt("ingrese el primer valor"))
        var num2 = parseInt(prompt("ingrese el segundo valor"))

        if (operacion == "sumar"){
            suma(num1, num2)
        }

        if (operacion == "restar"){
            resta(num1, num2)
        }

        if (operacion == "multiplicar"){
            multiplica(num1, num2)
        }
    
        if (operacion == "dividir"){
            divide(num1, num2)
        }

        operacion = prompt("Quiere realizar otra operación?").toLowerCase()
    }
    
    else {
        alert("Ingrese una operación válida")
    }

} while (operacion != "no")
