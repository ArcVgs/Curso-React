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
const numbersArray = [10, 20, 30, 40, 50];
const pares = numbersArray.filter(function(number){
    return number % 2 === 0;
});
console.log(pares); // [10, 20, 30, 40, 50]
 
//Reduce()

const pintar = numbersArray.forEach(function(number){
    console.log(number)
})