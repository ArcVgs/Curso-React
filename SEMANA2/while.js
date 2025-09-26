// while : bucle o ciclo que se repite mientras una condición sea verdadera
/*
// Sintaxis básica:
while (condición) {
    // bloque de instrucciones mientras la condición sea true o verdadera
} 
 
// Escribir un programa que solicite una clave y no permita continuar hasta que la clave sea correcta. La clave es "123456".

let password = 123456;
let clave = parseInt(prompt("Ingrese la clave:"));

while(clave !== password){
    
    clave = parseInt(prompt("Clave incorrecta. Ingrese la clave nuevamente:"));
    if (clave === password){
        alert("Clave correcta. Bienvenido.");
    }
}
*/
// Escribir un programa que solicite al usuario ingresar un número, el programa nos mencionará cuantas veces hay que sumar ese número consigo mismo para obtener un resultado mayor o igual a 100.

let sum = 0;
let count = 0;

let number = parseInt(prompt('Ingrese el número en cifras :'));

sum = number;

while (sum < 100){
    sum += number; // sum = sum + number
    count += 1; // count = count + 1
} 
alert('la suma se ha realizado del número' +' '+number + ' ' + count + ' veces.');  