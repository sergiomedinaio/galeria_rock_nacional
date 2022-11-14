'use strict';

// Variables:
let cl1,
    cl2,
    btn,
    msj,
    // Contador de errores:
    err = 1;

// Obtengo todos los objetos:
cl1 = document.getElementById("clave1");
cl2 = document.getElementById("clave2");
btn = document.getElementById("boton");
msj = document.getElementById("mensaje");

// Asigno una función anónima al evento onclick del botón:
btn.addEventListener('click', (e) => {
    // Obtengo los values:
    let pw1 = cl1.value;
    let pw2 = cl2.value;
    if (pw1 == '' || pw2.length == 0) {
        // Falta ingresar:
        msj.innerHTML = "Falta ingresar algún dato";
        msj.style.color = "blue";
    } else if (pw1 != pw2) {
        msj.innerHTML = "No coinciden";
        msj.style.color = "red";
        // No coinciden:
        // Banderita de error:
    } else {
        // Coinciden:
        msj.innerHTML = "Las contraseñas coinciden.";
        msj.style.color = "green";
    }
});
