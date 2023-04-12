/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {

    return l1 * l2;
}

var risultato = area(5, 7);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (numero1, numero2) {
    if (numero1 !== numero2) {
        return numero1 + numero2;
    } else if (numero1 === numero2) {
        return (numero1 + numero2) * 3;
    }
}

var numeriDiversi = crazySum(3, 5);
var numeriUguali = crazySum(6, 6);

console.log(numeriDiversi);
console.log(numeriUguali);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n, n1) {

    if (n < n1) {
        return Math.abs((n - n1));
    } else if (n > n1) {
        return Math.abs((n - n1) * 3);
    }
}
var risultato1 = crazyDiff(10, 19);
var riusltato2 = crazyDiff(50, 19);

console.log(risultato1);
console.log(riusltato2);
/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
    if (n > 20 && n <= 100) {
        return true;
    } else if (n === 400) {
        return true;
    } else {
        return false;
    }
}

var numero3 = boundary(50);
var numero4 = boundary(400);
var numero7 = boundary(120);

console.log(numero3);
console.log(numero4);
console.log(numero7);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var y = String;
const epify = function (y) {
    if (y.startsWith('EPICODE')) {
        return y;
    } else {
        return 'EPICODE ' + y;
    }
}

var aggiunta = epify('giuseppe');
var aggiunta2 = epify('EPICODE giuseppe')

console.log(aggiunta);
console.log(aggiunta2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (t) {
    if (t % 3 === 0) {
        return t / 3;
    } else if (t % 7 === 0) {
        return t / 7;
    } else if (t % 3 !== 0 || t % 7 !== 0) {
        return console.log('errore');
    }
}
var risultato3 = check3and7(9);
var risultato4 = check3and7(91);
var risultato5 = check3and7(5);

console.log(risultato3);
console.log(risultato4);
console.log(risultato5);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (stri) {
    let stringa = stri.split('');
    let arrayinv = stringa.reverse();
    let array1 = arrayinv.join('');
    return array1;
}

var invertita = reverseString('EPICODE');

console.log(invertita);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = String;
const upperFirst = function (x) {
    let array5 = x.split(' ');
    let array4 = [];
    for (let i = 0; i < array5.length; i++) {
        let prima = array5[i].charAt(0);
        let seconda = prima.toUpperCase();
        let terza = array5[i].slice(1);
        let maiuscola2 = seconda + terza;
        array4.push(maiuscola2);
    }
    console.log(array4.join(' '));
}
upperFirst('giuseppe epicode');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (s) {
    let taglio = s.substring(1, s.length - 1);
    return taglio;
}

var taglia = cutString('Giuseppe')

console.log(taglia);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const giveMeRandom = function (n) {
    var array3 = [];
    for (let i = 0; i < n; i++) {
        array3.push(Math.floor(Math.random() * 10));
    }
    return array3;
}

console.log(giveMeRandom(4));