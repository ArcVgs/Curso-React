// conditional
/*
// * Un programa de estructura condicional tiene lo siguiente:
   // * - Una condición que puede ser true o false.
   // *  - Si la condición es true(verdad) se ejecuta un bloque de instrucciones.
   // * - Si la condición es false(falsa) se ejecuta un bloque de instrucciones o finaliza.

// Sintáxis:
1. 
if (condition) {
    // bloque de instrucciones
}

2.
if (condition) {
    // bloque de instrucciones
} else {
    // bloque de instrucciones
}

//* Escribir un programa que tome un número del usuario como entrada, si es entre 10 y 99 o ambos inclusive, entonces mostrará "Dos dígitos", de lo contrario se mostrará "no son dos dígitos".

// parseInt() : convierte(parsea) un valor y devuelve un entero
let numero = parseInt(prompt("Ingrese el número de 10 hasta 99:"));
if (numero >= 10 && numero <=99){
    alert("Dos dígitos", numero);
    console.log("Dos dígitos", numero);
}else{
    alert("no son de dos dígitos", numero);
}

// Escribir un programa que tome un número de entrada y muestre la suma de sus dígitos. Asumimos que el usuario ingresará un número positivo de hasta de cuatro dígitos.

// operadores Lógicos
// && AND (y) : true si ambas condiciones son true
true && true = true;
true && false = false;
false && true = false;
false && false = false;

// || OR (o) : true si al menos una condición es true
 alt + 124 = ||
true || true = true;
true || false = true;
false || true = true;
false || false = false;

// ! NOT (no) : invierte el valor de verdad
*/
let numero = parseInt(prompt("Ingrese un número positivo de hasta cuatro dígitos:"));
let suma = 0;
// % = modulo o residuo de la división
// Ejemplo: 1234 % 10 = 4 (residuo de la división entre 10)
// Ejemplo: 123 % 10 = 3 (residuo de la división entre 10)
// Ejemplo: 12 % 10 = 2 (residuo de la división entre 10)
// Ejemplo: 1 % 10 = 1 (residuo de la división entre 10)

if (numero >0 && numero <=9999){
    suma += numero % 10; // (suma = suma + numero%10) agregando el residuo de la división entre 10 
    numero = parseInt(numero / 10); // actualizando el valor de numero dividiéndolo entre 10 y quitando los decimales
    
    
    if (numero >0){
        suma += numero % 10;
        numero = parseInt(numero / 10);
    }

    if (numero >0){
        suma += numero % 10;
        numero = parseInt(numero / 10);
    }

   if (numero >0){
        suma += numero % 10;
        numero = parseInt(numero / 10);
    } 
    
    console.log(numero, `la suma es ${suma}`); // alt+96 = ``
    
} else {
    alert("El número no es válido");
    console.log("El número no es válido");
}

/*
let numero1 = prompt("Ingrese un número positivo de hasta cuatro dígitos:");
let suma1 = 0;
for (let i = 0; i < numero1.length; i++) {
    suma1 += parseInt(numero1[i]);
}

console.log(`la suma es ${suma1}`);*/