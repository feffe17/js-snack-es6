/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const squadre = [
    {
        nome : "roma",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        nome : "atalanta",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        nome : "lazio",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        nome : "juventus",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        nome : "inter",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        nome : "milan",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
];

const squadreAggiornate = [];

function generaValori() {
    for (let i = 0; i < squadre.length; i++) {
        squadre[i]["punti fatti"] = Math.floor(Math.random() * 100) + 1;
        squadre[i]["falli subiti"] = Math.floor(Math.random() * 100) + 1;
        squadreAggiornate.push(squadre[i]);
        
    }
    return squadreAggiornate;
}

console.log(generaValori());
