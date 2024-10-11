/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bici = [
    {
        nome : "bici 1",
        peso : 43,
    },
    {
        nome : "bici 2",
        peso : 23,
    },
    {
        nome : "bici 3",
        peso : 63,
    },
    {
        nome : "bici 4",
        peso : 98,
    },
    {
        nome : "bici 5",
        peso : 19,
    },
    {
        nome : "bici 6",
        peso : 33,
    },
    {
        nome : "bici 7",
        peso : 3,
    },
    {
        nome : "bici 8",
        peso : 5,
    },
];

let biciLeggera = bici[0].nome;
let pesoMinore = bici[0].peso;

function calcolaPeso() {
    for (let i = 0; i < bici.length; i++) {
        if(pesoMinore > bici[i].peso){
            pesoMinore = bici[i].peso;
            biciLeggera = bici[i].nome;
        }   
    }
    return pesoMinore , biciLeggera;
}

calcolaPeso();
console.log(`La bici più leggera è la ${biciLeggera} con un peso di ${pesoMinore} kg`);

