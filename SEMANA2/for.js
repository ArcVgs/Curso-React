// for: se utiliza para iterar sobre un bloque de código un número específico de veces
// sintaxis básica:
/*
for (inicialización; condición; incremento) {
    // bloque de instrucciones
}
*/
// Crear un programa que muestre los números del 1 al 10 en la consola
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// escribir un programa que simule el recorrido por todos los pisos de un edificio de dos pisos, visitando todos los departamentos en cada piso. El edificio tiene 2 pisos y cada piso tiene 3 departamentos (A, B, C). El programa debe imprimir el piso y el departamento que se está visitando.

for (let piso = 1; piso < 3; piso++) {
    for (let puerta =1; puerta < 4; puerta++) {
        console.log('Piso' + ' ' + piso + ' ' + 'Departamento' + ' ' + puerta);
    }
}