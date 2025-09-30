//* Listas en JavaScript

// function forEach
// sintáxis
// array.forEach(function());

// Teniendo en cuenta el siguiente array;
// const numbersArray = [10, 20, 30, 40, 50];

// utilizando el método tradicional for para recorrer el array
// for (let i = 0; i < numbersArray.length; i++) {
//        console.log(numbersArray[i]);
// }

//* 1 para recorre el array utilizando el método forEach, se necesita pasar una función como argumento (callback)
// sintáxis
// numbersArray.forEach(function(parameter){ 
    // bloque de código a ejecutar   
// });

//* 2 El parámetro que se pasa a la función representa cada uno de los elementos del array
// numbersArray.forEach(function(number){ 
//     console.log(number);  
// });

//* 3 También se puede utilizar una función flecha (arrow function) como callback
//numbersArray.forEach( number => console.log(number) );

//* Function Map(): Se utiliza para trasformar los elementos de un arrat y crear uno nuevo, sin modificar el array original

// array.map(function(element, index, array){
//     //bloque de codigo a ejecutar
// });

// const numbersArray = [10, 20, 30, 40, 50];

// // const dobles = numbersArray.map(function(number){
// // return number * 2;
// // });

// const doblesArrow = numbersArray.map(number => number * 2);

// console.log(doblesArrow)

// let users = [
//     {name: 'Alice' , age: 20},
//     {name: 'Pablo' , age: 30},
//     {name: 'Maria' , age: 35}
// ];


// let names = users.map(function(name){
//     return name.name
// })

// let namesArrow = users.map(user => user.name);
// console.log(namesArrow);

// let producto = [
//     {name: 'Lapto', precio: 1000},
//     {name: 'Phone', precio: 500},
//     {name: 'Table', precio: 300}
// ];

// let conIGV = producto.map(function(produc){
//     return {
//             nombre: produc.name,
//             conIGV: produc.precio * 1.18
//             };
// })

// let conIGVArrow = producto.map(produ => {
//     return {
//         nombre: produ.name,
//         conIgvA:produ.precio * 1.18
//         };
//     }
//     )
    
// let conIndices = numbersArray.map(function(number, index){
//     return `${index}: ${number}`
// })    

// let conIndicesArrow =  numbersArray.map( (num, index) => `${index} : ${num}`)

// console.log(conIndicesArrow)

//* Function Filter(): Permite filtrar los elementos de un array segun una condicion especifica y crear un nuevo array con los elementos que cumplen esa condicion, no modifica el array principal.

// const numbersArray = [10, 20, 30, 40, 50, 67];
// const pares = numbersArray.filter(function(number){
//     return number % 2 === 0;
// }) 

// const paresArrow = numbersArray.filter(num => num % 2 === 0);

// const impares = numbersArray.filter(function(num){
//     return num % 2 !== 0;
// })

// const imparesArrow = numbersArray.filter(num => num % 2 !== 0);


// let users = [
//     {name: 'Carlos', active: true},
//     {name: 'Lucia', active: false},
//     {name: 'Karolina', active: true}
// ]

// let activos = users.filter(function(user){
//     return user.active === true
// })

// let activosArrow = users.filter(user => user.active)


// let inactivos = users.filter(function(user){
//     return !user.active
// })

// let inactivosArrow = users.filter(user => !user.active)

// let productos = [
//     {name: 'Laptop', precio: 1000},
//     {name: 'Celular', precio: 2000},
//     {name: 'Tablet', precio: 400}
// ]

// let menor = productos.filter(function(produ){
//     return produ.precio < 600
// })

// let menorArrow = productos.filter(produ => produ.precio < 600);
// console.log(menorArrow)


//* Function Reduce(): Se utiliza para reducir un array a un unico valor, aplicando una funcion acumulativa a cada elemento del array, desde el promer al ultimo.

//Sintaxis
//array.reduce(function(counter, element, index, array){
//bloque de codigo a ejecutar 
//}, initialValue);
//counter: es el valor acumulado que se va a actualizar como punto de partida para la acumulacion
//initialValue: es un valor opcional que se utiliza como punto de partida para la acumulacion
// con arrow function
// array.reduce((counter, element, index, array)=>{
//  bloque de codigo a ejecutar
//}, initialValue);
// Example 1: Sumar numeros

// const numbersArray = [10, 20, 30, 40, 50];
// const suma = numbersArray.reduce(function(count, currenValue){
//     return count + currenValue;
// },0);

// const sumaArrow = numbersArray.reduce((count, currenValue) => count + currenValue, 0);

// const maximo = numbersArray.reduce(function(contenedor, currenValue){
// return {currenValue: contenedor > currenValue ? contenedor: currenValue}
// },numbersArray[0])

// const maximoArrow = numbersArray.reduce((contenedor, currentValue) => (contenedor > currentValue ? contenedor : currentValue) , numbersArray[0])

// console.log(maximoArrow)

// Map()
// Filter()
// Reduce()

//* Escribir un programa en el cual se proporcione una serie de objetos que representen estudiantes, cada uno con un nombre y una serie de puntuaciones de examenes. Se solicita usar map, filter y reduce para calcular el puntaje promedio del examen de cada estudiante y devulver un array de objetos que contengan solo a los estudiantes que tienen un puntaje mayor a 15

const estudiantes = [
    {nombre: 'Juan', puntuacion : [15,13,19]},
    {nombre: 'Pepe', puntuacion : [13,19,11]},
    {nombre: 'Marcia', puntuacion : [15,16,12]},
    {nombre: 'Ivon', puntuacion : [14,13,19]},
]

   
    
const promedios = estudiantes.map( estu => {
const suma = estu.puntuacion.reduce((contenedor, currentValue) => contenedor + currentValue,0)
promedio = suma / estu.puntuacion.length;
return { 
    alumno: estu.nombre,
    nota : promedio.toFixed(2)
}
})

const mayor = promedios.filter(pro => pro.nota > 15)
console.log(mayor)