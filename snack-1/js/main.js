/* STRICT MODE */
"use strict";

console.log("Script caricato correttamente!")

const biciclette = [
    { nome: 'Bici1', peso: 7 },
    { nome: 'Bici2', peso: 6 },
    { nome: 'Bici3', peso: 8 },
    { nome: 'Bici4', peso: 7.5 },
];

// Funzione per trovare la bici con il peso minore
function trovaBiciPiuLeggera(biciclette) {
    // Inizializzare la bici più leggera con la prima bici nell'array
    let biciPiuLeggera = biciclette[0];

    // Iterare attraverso ogni bici nell'array
    biciclette.forEach(bici => {
        if (bici.peso < biciPiuLeggera.peso) {
            biciPiuLeggera = bici;
        }
    });

    // Restituire la bici con il peso minore
    return biciPiuLeggera;
}

// Trovare la bici con il peso minore utilizzando la funzione
const biciPiuLeggera = trovaBiciPiuLeggera(biciclette);

// Stampare la bici con il peso minore utilizzando un template literal
console.log(`La bici più leggera è ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso} kg.`);