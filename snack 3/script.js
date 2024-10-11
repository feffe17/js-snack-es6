/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 */

// const numeriVari = [];
// let numA;
// let numB;

function confrontoNumeri(array , numeroA , numeroB) {
    const numeriCompresi = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > numeroA && array[i] < numeroB){
            numeriCompresi.push(array[i])
        }
        
    };
    return numeriCompresi;
}

console.log(confrontoNumeri([62 , 9 , 43 , 15 , 12 , 13 , 32 , 25 ,] , 11 , 35));
