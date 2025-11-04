function saludo(name, callback){
    console.log("Hola, ", name);
    callback();
}

function llamame(){
    console.log("Esta es una funcion callback")
}

saludo("Alice", llamame)

//Example 2
console.log("Inicio de la funcion principal");

function timeOutCallBack(){
    console.log("Esta es una funcion de callback con setTimeOut!");
}

setTimeout(timeOutCallBack, 5000)
console.log("Fin de la funcion principal")

//Example 3 Escribor programa que recibe como parametro dos numeros y una funcion de operaciones que aplicara a ellos

function operarNumero(numero1, numero2, operacion){
    return operacion(numero1, numero2)
}

//funcion de operacion
function add(a,b){
    return a + b
}

function muntiply(a, b){
    return a * b
}

console.log(operarNumero(5,4,add));
console.log(operarNumero(5,4,muntiply));