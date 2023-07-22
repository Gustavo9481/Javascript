// Refactorización de Calculadora con interfaz

var valor_1 = ""
var total = 0
var expresion =""


// Presionar número 
function pulsar_numero(numero){
  
  document.getElementById("display_principal").value += numero
  valor_1 = numero
  expresion = expresion + valor_1
  console.log("exp " + expresion)

}


// Presionar boton igual 
function calcular_resultado(){ 

  document.getElementById("display_ecuacion").value = expresion 
  total = new Function('return ' + expresion)()
  document.getElementById("display_principal").value = parseFloat(total).toFixed(2);
  valor_1 = ""
  expresion = ""

}


// Presionar un signo < pulsar_signo >
function pulsar_signo(signo){

  expresion = expresion + signo
  document.getElementById("display_ecuacion").value = expresion
  valor_1 = ""
  document.getElementById("display_principal").value = valor_1
  console.log("exp " + expresion)
  console.log("val " + valor_1)

}


// Borrar todo - presionar C
function borrar_todo(){

  valor_1 = "" 
  expresion = ""
  total = 0
  document.getElementById("display_ecuacion").value = ""
  document.getElementById("display_principal").value = ""

}


// Borrar último caracter  ###
function borrar_ultimo(){

  expresion = expresion.slice(0, -1)
  document.getElementById("display_principal").value = expresion
  console.log(expresion)

}
