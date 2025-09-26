// do while: se ejecuta al menos una vez y luego verifica la condición

// sintaxis básica:
/*
do {
    // bloque de instrucciones
} while (condición);
*/
// Crear un programa de un juego de adivinanza donde el usuario tiene que adivinar un número entre 1 y 10. Usaremos algún método matemático para generar un número aleatorio entre  1 y 10. luego solicitaremos al usuario que adivine el número. Si acierta el juego termina, podemos obtener la entrada del usuario usando prompt(). Si no acierta, el programa le dirá que intente nuevamente. El juego continuará hasta que el usuario adivine el número correcto.

// Math.random() : genera un número aleatorio entre 0 y 1 (excluyendo el 1)
// Math.ceil() : redondea un número hacia arriba al entero más cercano

let numeroAleatorio = Math.ceil(Math.random() * 10); // número aleatorio entre 1 y 10
let numero;

do {
    numero = parseInt(prompt("Adivina el número entre 1 y 10:"));
    if (numero === numeroAleatorio){
        alert("el número advinado es correcto.");
    }else{
        alert("Intenta nuevamente.");
    }
} while (numero !== numeroAleatorio);

  