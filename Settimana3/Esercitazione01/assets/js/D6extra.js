// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var nuovoArray = [5, 3, 10, 15, 4, 8, 7];

function checkArray() {
    for (let i = 0; i < nuovoArray.length; i++) {
        let num = nuovoArray[i];
        let somma = 0;
        if (num < 5) {
            console.log(`${num} è  minore di 5`);
        } else if (num > 5) {
            console.log(`${num} è  maggiore di 5`);
        } else {
            let totale = nuovoArray.reduce((sum, current) => sum + current, 0);
            console.log(totale);
        }
    }
}
checkArray();

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var shoppingCart = [
    {
        price: 20,
        name: 'Chianti',
        id: 'dop',
        quantity: 35
    },
    {
        price: 25,
        name: 'Prosecco',
        id: 'dop',
        quantity: 15
    },
    {
        price: 35,
        name: 'Whisky',
        id: 'dop',
        quantity: 10
    }
]

var cassa = 0;

var shoppingCartTotal = () => {
    shoppingCart.forEach((element) => {
        cassa += element.price * element.quantity;
    });
    console.log(cassa);
}

shoppingCartTotal();


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var shoppingCart2 = {
    price: 60,
    name: 'Falanghina',
    id: 'dop',
    quantity: 50
}

var addToShoppingCart = (add) => {
    shoppingCart.push(add);
    console.log(shoppingCart);
}

addToShoppingCart(shoppingCart2);


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var maxShoppingCart = (arr) => {
    let costoso = 0;
    for (let i = 0; i < arr.length; i++) {
        costoso = Math.max(arr[i].price);
    }
    return costoso;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var latestShoppingCart = (arr) => {
    return arr[arr.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var loopUntil = (x) => {
    let blocco = 0;

    do {
        let intero = Math.floor(Math.random() * 10)
        console.log(intero);
        blocco++;
    }
    while (x < 3)
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 var arrayMix = ['Giuseppe', 5, 6, 'Lorenzo', 7, 8, 10];
var average = (arr) => {
    let somma = 0;
    let media = 0;
    arr.forEach((element) => {
        if (typeof(element) === 'number') {
            media += element;
            somma++;
        }
    });
    media = media / somma;
    return media;
}
 console.log(average(arrayMix));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var longest = (arr) => {
let stringa = 0;
let parola;
arr.forEach((element) => {
   if (element.length > stringa) {
    stringa = element.length;
    parola = element;
   }
});
console.log(`Parola più lunga è ${parola}, lunghezza parola ${stringa}`)
}
var stringaPiuLunga = ['Giuseppe', 'Francesco', 'Antonio', 'Luca', 'Andrea'];
longest(stringaPiuLunga);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
