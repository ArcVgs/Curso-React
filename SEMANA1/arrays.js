console.log('arrays')
// arrays

// declarar un array vacio:
let array1 = [];
//console.log('que tipo de dato es:', typeof(array1))

// declarar un array días:
let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log('que tipo de dato es:', Array.isArray(dias));

// accediendo a los valores del array:
console.log(dias[0]);
console.log(dias[4]);

// length : muestra la cantidad de elementos del array:
console.log(dias.length);

// recorrer un array bucle for clásico :
for(let i=0; i < dias.length; i++){
    console.log(dias[i]);
}

// for(let i= dias.length-1; i > 0; i--){
//     console.log(dias[i]);
// }

// for ... of
for (let dia of dias){
    console.log(dia)
} 

// forEach()
dias.forEach((dia, index)=>{
    console.log(index, dia)
})

// métodos comunes para trabajar con arrays:
// push: agregar elementos al final del array.
dias.push('dia 8');
console.log(dias);

// unshift: agregar elementos al inicio del array.
dias.unshift('dia antes del lunes');
console.log(dias);

//shift: eliminar el primer elemento del array:
dias.shift();
console.log(dias);

// pop: elimina el último elemento del array:
dias.pop();
console.log(dias);

// splice: elimina y agrega nuevos elementos:
dias.splice(3,1, 'nuevo dia');
console.log(dias);

// delete: elimina el valor del elemento del array:
delete(dias[2]);
console.log(dias);
