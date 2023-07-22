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
  document.getElementById("display_principal").value = cifra
  document.getElementById("display_ecuacion").value = ""
}


//Borrar útimo caracter
function borrar_ultimo(){
  cifra = cifra.slice(0,-1)
  document.getElementById("display_principal").value = cifra
}


// Operación - pulsado del operador
function operacion_1(signo){
  if (op_signo == ""){
    op_signo = signo
    valor_1 = document.getElementById("display_principal").value
    op_display = cifra + op_signo
    document.getElementById("display_ecuacion").value = op_display
    cifra = ""
    document.getElementById("display_principal").value = cifra
  } 
  else {
    let op_signo_2 = signo
    valor_2 = document.getElementById("display_principal").value
    console.log(valor_2)

    let tarea_2 = {
    '+': parseFloat(valor_1) + parseFloat(valor_2),
    '-': parseFloat(valor_1) - parseFloat(valor_2),
    '*': parseFloat(valor_1) * parseFloat(valor_2),
    '/': parseFloat(valor_1) / parseFloat(valor_2)}
    
    total = parseFloat(tarea_2[op_signo_2])
    console.log(total)
    valor_1 = total
    valor_1 = String(total)
    console.log(valor_1)
    op_signo = op_signo_2
    cifra = ""
    document.getElementById("display_ecuacion").value = valor_1 + op_signo
    document.getElementById("display_principal").value = cifra    
  }
}


// Resultado - pulsado de igual
function resultado(){
  valor_2 = document.getElementById("display_principal").value
  document.getElementById("display_ecuacion").value = op_display + valor_2

  let tarea = {
    '+': parseFloat(valor_1) + parseFloat(valor_2),
    '-': parseFloat(valor_1) - parseFloat(valor_2),
    '*': parseFloat(valor_1) * parseFloat(valor_2),
    '/': parseFloat(valor_1) / parseFloat(valor_2)}


  total = parseFloat(tarea[op_signo])
  cifra = ""
  op_signo = ""
  document.getElementById("display_principal").value = total.toFixed(2)
} 

