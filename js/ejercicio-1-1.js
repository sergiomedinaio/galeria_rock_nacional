'use strict';

// src y alt para no perder tiempo redactando:
const srcCharly = 'items/charly-garcia.jpg';
const altCharly = 'Carlos Alberto García Moreno tocando el piano';
const txtCharly = '<em>Charly</em> García tocando el piano';
const srcFlaco = 'items/flaco-spinetta.jpg';
const altFlaco = 'Luis Alberto Spinetta tocando la guitarra';
const txtFlaco = 'El <em>flaco</em> Spinetta tocando la guitarra';

// La imagen:
let img = {};
img = document.getElementById("imagen");

// El texto:
let txt = {};
txt = document.getElementById("texto");

// Colocamos el color en red:
txt.style.color = 'red';

// Asignamos un escuchador de eventos para el click de la imagen:
img.addEventListener('click', (e) => {
    // Debo saber cuál es el src actual:

    console.log(e.target.dataset.musico);
    if (e.target.dataset.musico == 'charly') {
        // Cambio al Flaco:
        img.dataset.musico = 'spinetta';
        img.src = srcFlaco;
        img.alt = altFlaco;
        txt.style.color = 'blue';
        txt.innerHTML = txtFlaco;
    } else {
        // Cambio a Charly:
        img.dataset.musico = 'charly';
        img.src = srcCharly;
        img.alt = altCharly;
        txt.style.color = 'red';
        txt.innerHTML = txtCharly;
    }
});
