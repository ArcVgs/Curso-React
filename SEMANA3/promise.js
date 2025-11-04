//*Promise (promesa): Un promise es una excelente forma de manejar oparaciones asincronas en javascript. Permite que el codigo se ejecute de manera no bloqueante y maneje eventos o resultados de operaciones que pueden tardar un tiempo e completarse

//* Un promise puede estar en uno de los siguientes estados
// Pendiente(pending): Estado inicial, ni cumplido, ni rechazado.
// Exitoso(fullfilled): La operacion se completo con exito
// Rechazado(reject): la operacion fallo

//*Un promise se crea utilizando un constructor Promise, que toma una funcion como argumento. Esta funcion recibe doa parametros: resolve y reject
  // Resolve: Se llama cuando la operacion se completa con exito
  // Reject: Se llama cuando la operacion fallo

//Sintaxis
let promise = new Promise(func());

let  promiseArrow = new Promise((resolve, reject)=>{
    //simulamos una operacion asincrona
    const success = true
    if(success){
        resolve("operacion exitosa")
    }else{
        reject("operacion fallida")
    }
})

//*Manejo o conreol del resultado de la promesa: Se utiliza el metodo then(), para manejar el resultado exitoso y el metodo catch(), para manejar el error. Tambiense puede utilizar el metodo finally()para ejecutar codigo independientemente del resultado de la promesa
//El metodo then() recibe dos funciones como argumentos: La primera se ejecuta si la promesa se resuelve exitosamente y la segunda se ejecuta si la promesa es rechazada. Sin embargo, es comun usar solo la primera funcion y manejar los errores con el metodo catch()

//Sintaxis
myPromise.then(callback)

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Operacion Finalizada")
})

//Ejemplo de uso de un promise con una funcion asincrona
let myPromise = new promise((result, reject)=>{
    setTimeout(()=>{
        const success = true;
        if(success){
            result("Operacion exitosa luego de 5 segundos");
        }else{
            reject("Operacion fallida luego de 5 segundos");
        }
    }, 5000)
})

myPromise.then((result)=>
    {
        console.log(result);
    })
    .catch(()=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("operacion finalizada")
    })