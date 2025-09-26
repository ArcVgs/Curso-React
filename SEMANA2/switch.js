// * Switch: Es usado para hacer decisiones, es una alternativa al if...else cuando se tienen múltiples condiciones basadas en el mismo valor o expresión.
// Sintaxis básica:
/*
switch (expresión) {
    case valor1:
        // bloque de instrucciones
        break;
    case valor2:
        // bloque de instrucciones
        break;
    default:
        // bloque de instrucciones
        break;
} */

// Escribir programa en el cual se ingrese el tipo de usuario para poder determinar los permisos a una interfaz de una aplicación web. Los tipos de usuario son: "admin", "editor", "viewer". Dependiendo del tipo de usuario, se mostrarán diferentes mensajes:
// - "admin": "Tienes acceso completo a la aplicación."
// - "editor": "Puedes editar contenido."
// - "viewer": "Solo puedes ver el contenido."
// - Cualquier otro valor: "Tipo de usuario no reconocido."

let userRole = prompt("Ingrese su tipo de usuario (admin, editor, viewer):");
switch (userRole) {
    case "admin": 
        alert("Tienes acceso completo a la aplicación.");
        break;
    case "editor":
        alert("Puedes editar contenido.");
        break;
    case "viewer":
        alert("Solo puedes ver el contenido.");
        break;
    default:
        alert("Tipo de usuario no reconocido.");
        break;
}