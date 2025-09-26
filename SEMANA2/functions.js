// function: 
// Una función es un bloque de código diseñado para realizar una tarea específica. Se ejecuta cuando "se le llama" o "se le invoca".
// Sintaxis básica:
/*
1. función sin parámetros
function nombreFuncion() {
// bloque de instrucciones
}

2. función con parámetros
function nombreFuncion(parametros) {
    // bloque de instrucciones
}

// escribir un programa que solicite al usuario un nombre y lo muestro a traves de un alert:
// método tradicional
let ingresarNombre = prompt("Ingrese su nombre:");
alert("Hola" + " " + ingresarNombre);

// método usando función
function saludarUsuario() {
    let nombre = prompt("Ingrese su nombre:");
    alert("Hola" + " " + nombre);
}

saludarUsuario(); // invocación o llamada a la función
*/
function cuadradoNumero(num) {
    return num * num;
}
alert("El cuadrado de 10 es: " + cuadradoNumero(10));