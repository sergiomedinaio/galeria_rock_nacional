'use strict';

// La imagen:
// let img = document.querySelector('#imagen');
// console.log('Imagen:', img);
// console.log('Imagen alt:', img.alt);
// console.info('Imagen src:', img.src);
// console.info('Imagen attributes.src.value:', img.attributes.src.value);
// console.log('Imagen title:', img.title);

// El texto:
// let txt = document.querySelector('#texto');
// console.info('Párrafo:', txt);
// console.log('Párrafo contenido:', txt.innerHTML);

// Ul y lis y recorrida::
// let ulBandas = document.querySelector('#bandas');
// let lisBandas = document.querySelectorAll('#bandas li');
// for (let li of lisBandas) {
//     console.log(li.innerHTML);
// }

// Modificación del alt y src de la imagen:
// img.src = 'items/flaco-spinetta.jpg';
// img.alt = 'Luis Alberto Spinetta tocando la guitarra';
// img.title = 'Te cuento lo que hace el Flaco';

// Modificación del title y contenido del texto:
// txt.innerHTML = 'El <em>flaco</em> Spinetta tocando la guitarra';

// Estilos:
// for (let li of document.querySelectorAll('.impar')) {
//     li.style.color = 'red';
// }
// for (let li of document.querySelectorAll('.par')) {
//     li.style.color = 'blue';
// }
// Otra forma:
// for (let li of lisBandas) {
//     li.style.color = li.className == 'par' ? 'blue' : 'red';
// }

const padresDelRock = document.getElementById("imagen");
let cambioDeImagen = true;

padresDelRock.addEventListener("click", (e) => {
    padresDelRock.src = cambioDeImagen ?  
        "./items/flaco-spinetta.jpg" : "./items/charly-garcia.jpg";
    cambioDeImagen = !cambioDeImagen;
});

