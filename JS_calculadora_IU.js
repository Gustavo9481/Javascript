// Calculadora con interfaz gráfica

var cifra = ""
var op_display = ""
var op_signo = ""
var valor_1 = ""
var valor_2 = ""
var total = 0


// Funciones de botones
function pulsar_boton(valor){
  document.getElementById("texto").value = cifra + valor
  cifra = document.getElementById("texto").value
}

// Borrar todo boton C
function borrar_todo(){
  cifra = ""
  document.getElementById("texto").value = cifra
  document.getElementById("operation").value = ""
}


// Borrar útimo caracter
function borrar_ultimo(){
  cifra = cifra.slice(0,-1)
  document.getElementById("texto").value = cifra
}

// Operación - pulsado del operador
function operacion(signo){
  op_signo = signo
  valor_1 = document.getElementById("texto").value
  op_display = cifra + op_signo
  document.getElementById("operation").value = op_display
  cifra = ""
  document.getElementById("texto").value = cifra
}

// Resultado - pulsado de igual
function resultado(){
  valor_2 = document.getElementById("texto").value
  document.getElementById("operation").value = op_display + valor_2
  if (op_signo == "+"){
    total = parseFloat(valor_1) + parseFloat(valor_2); 
  }
  if (op_signo == "-"){
    total = parseFloat(valor_1) - parseFloat(valor_2);   
  }
  if (op_signo == "*"){
    total = parseFloat(valor_1) * parseFloat(valor_2);
  }
  if (op_signo == "/"){
    total = parseFloat(valor_1) / parseFloat(valor_2);
  }
  cifra = ""
  op_signo = ""
  document.getElementById("texto").value = total.toFixed(2)
}
