let edad = 0

function guardarEdadUsuario(){
    edad = prompt("¿Qué edad tienes?");
}

function esMayorDeEdad(edadUsuario) {
    return edadUsuario >= 18;
}

function mostrarMensaje() {
    if (esMayorDeEdad(edad)) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

guardarEdadUsuario();
mostrarMensaje();
