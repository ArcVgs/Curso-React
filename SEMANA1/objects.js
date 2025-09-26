// Object(objeto)

// declarando un objeto
let object1 = { };
console.log('nuestro objeto es : ', object1);
console.log('nuestro objeto es : ', typeof(object1));

// declarar un objeto persona con propiedad nombre y edad:
let person1 = {
    //key : value
    name : 'Luis Miguel',
    age : 30,
}
console.log('nuestro objeto es : ', person1);
console.log('el valor del nombre es: ', person1.name);
console.log('el valor de la edad es: ', person1.age);

// Crear un objeto para contener información acerca de una receta, debe tener propiedades de cadena de texto, numérico y un array de strings

let receta ={
    title : 'Arroz con Pollo',
    porciones : 5,
    ingredientes : ['pollo', 'arroz', 'zanahoria', 'culantro'],
}
console.log('nuestra receta es : ', receta.title);
console.log('las porciones de nuestra receta es : ', receta.porciones);
console.log('los ingredientes son : ', receta.ingredientes);
