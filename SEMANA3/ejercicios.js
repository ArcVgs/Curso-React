//* Listas en JavaScript
/*
// function forEach
// sintáxis
// array.forEach(function());
 
// Teniendo en cuenta el siguiente array;
const numbersArray = [10, 20, 30, 40, 50];
 
// utilizando el método tradicional for para recorrer el array
for (let i = 0; i < numbersArray.length; i++) {
       console.log(numbersArray[i]);
}
 
//* 1 para recorre el array utilizando el método forEach, se necesita pasar una función como argumento (callback)
// sintáxis
numbersArray.forEach(function(parameter){
    // bloque de código a ejecutar  
});
 
//* 2 El parámetro que se pasa a la función representa cada uno de los elementos del array
numbersArray.forEach(function(number){
    console.log(number);  
});
 
//* 3 También se puede utilizar una función flecha (arrow function) como callback
numbersArray.forEach( number => console.log(number) );
 
//* Function Map() : se utiliza para transformar los elementos de un array y crear uno nuevo con los resultados, sin modificar el array original.
// sintáxis
array.map(function(element, index, array){
    // bloque de código a ejecutar
});
 
// example 1: Transformar números
const numbersArray = [10, 20, 30, 40, 50];
const dobles = numbersArray.map(function(number){
    return number * 2;
});
const dobles2 = numbersArray.map( number => number * 2 );
console.log(dobles2); // [20, 40, 60, 80, 100]
 
// example 2: Extraer propiedades de objetos
let users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];
let names = users.map( user => user.name );
console.log(names); // ['Alice', 'Bob', 'Charlie']
 
// example 3: Modificar objetos
let products = [
    {name: 'Laptop', price: 1000},
    {name: 'Phone', price: 500},
    {name: 'Tablet', price: 300}
];
let conIGV = products.map( product =>({
    name: product.name,
    price: product.price * 1.18 // Aplicar el igv 18%
}));
console.log(conIGV);
 
// example 4: Agregar indices
let conIndices = numbersArray.map( (number, i) =>
    `el indice es ${i} : del numero ${number}` // interpolación de cadenas o de strings
);
console.log(conIndices);
*/
//* Function Filter(): Permite filtrar los elementos de un array según una condición específica y crear un nuevo array con los elementos que cumplen esa condición, no modifica el array original.
// sintáxis
// array.filter(function(element, index, array){
    // bloque de código a ejecutar
// });
// example 1:
// const numbersArray = [10, 20, 30, 40, 50];
// const pares = numbersArray.filter(function(number){
//     return number % 2 === 0;
// });
// console.log(pares); // [10, 20, 30, 40, 50]
 
// //Reduce()

// const pintar = numbersArray.forEach(function(number){
//     console.log(number)
// })

// 1. Dado un arreglo de nombres `['Juan', 'Pedro', 'Luis', 'Ricardo']`, crear un nuevo arreglo con todos en mayúsculas
// 2. Dado un arreglo de palabras `["anticonstitucionalmente", "electroencefalograma", "desoxirribonucleico", "otorrinolaringólogo", "paralelepípedo"]`, devolver un nuevo arreglo con la cantidad de letras de cada palabra
// 3. Dado un arreglo de precios, devolver un nuevo arreglo aplicando un 10% de descuento a cada precio
// 4. Dado un arreglo de números, filtrar solo los que sean pares
// 5. Dado un arreglo de palabras, devolver solo las que tengan más de 5 letras
// 6. Dado un arreglo de objetos `[..., { nombre, edad }, ...]`, devolver solo los que tengan 18 años o más
// 7. Dado un arreglo de números, obtener la suma de todos
// 8. Dado un arreglo de números, calcular el resultado de multiplicarlos todos
// 9. Dado un arreglo de palabras, devolver un objeto con la cantidad de veces que aparece cada palabra
// 10. Dado un arreglo de objetos `[..., { nombre, edad }, ...]`, usar `reduce` para obtener la persona con mayor edad

//Ejercicio 1
let nombres =  ['Juan', 'Pedro', 'Luis', 'Ricardo']
const nombresM = nombres.map( nom => nom.toUpperCase())
console.log(nombresM)

//Ejerccio 2
let objetos = ["anticonstitucionalmente", "electroencefalograma", "desoxirribonucleico", "otorrinolaringólogo", "paralelepípedo"] 
const cantidad = objetos.map(obj => obj.length)
console.log(cantidad)

//Ejercicio 3
let precios = [100,40,60,150,110]
const pre = precios.map(prec => prec * 0.9)
console.log(pre)

//Ejercicio 4
let numeros = [100,41,60,157,110]
const pares =  numeros.filter(num => num % 2 === 0)
console.log(pares)

//Ejercicio 5
let palabras = ['casa', 'celular', 'olla', 'mouse', 'vaso']
const mayorCinco = palabras.filter(pal => pal.length > 5)
console.log(mayorCinco)

//Ejercicio 6
let alumnos = [
    {nombre: 'Luis', edad: 14},
    {nombre: 'Jose', edad: 19},
    {nombre: 'Claudia', edad: 23},
    {nombre: 'Graciela', edad: 11},
    {nombre: 'Sofia', edad: 20},
]

const mayorEdad = alumnos.filter(alumn => alumn.edad > 18)
console.log(mayorEdad)

//Ejercicio 7
let numer = [10,30,52,21,63,2]
const sum = numer.reduce((count, currentValue) => count + currentValue,0)
console.log(sum)

//Ejercicio 8
let multi = [5,2,3,6]
const prod = multi.reduce((count, currentValue) => count * currentValue,1)
console.log(prod)

//Ejercicio 9
let fraces = ['casa', 'pelota', 'casa', 'avion', 'cuchara'] 
let contador = fraces.reduce((acc,palabra)=>{
    acc[palabra] = (acc[palabra]||0) + 1;
    return acc
},{});

let result = Object.entries(contador).map(([palabra,cantidad])=>{
    return {palabra, cantidad}
})
console.log(result)

//Ejercico 10
let listaPersona = [
    {nombre: 'Juan', edad: 33},
    {nombre: 'Sofia', edad: 31},
    {nombre: 'Briana', edad: 29},
    {nombre: 'Eduardo', edad: 34},
    {nombre: 'Fiorella', edad: 30},
]

let mayor = listaPersona.reduce((acumulador, persona) => (acumulador.edad > persona.edad ? acumulador : persona), listaPersona[0])
console.log(mayor)