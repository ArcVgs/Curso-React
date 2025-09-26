//* Listas en JavaScript

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

Map()
Filter()
Reduce()