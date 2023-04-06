/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maggiore() {
  let numero1 = 10;
  let numero2 = 25;

  if (numero1 > numero2) {
    console.log(numero1 + ' è piu grande di ' + numero2);
  } else if (numero1 < numero2) {
    console.log(numero2 + ' è piu grande di ' + numero1);
  }else{
    console.log('I numeri sono uguali')
  }
}

maggiore();

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function diverso() {
  let numero3 = 5;
  let numero4 = 6;
  if (numero3 == numero4) {
    console.log('il numero 5 = al numero 6');
  } else if (numero3 != numero4) {
    console.log('not equal');
  }
}

diverso();

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function divisibile() {
  let numero5 = 15;
  let numero6 = 5;
  let numero7 = 7
  if (numero7 % numero6 == 0) {
    console.log('il numero non è divisibile per 5');
  } else if (numero5 % numero6 == 0) {
    console.log('il numero è divisibile per 5');
  }
}

divisibile();

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function valore() {
  let numero8 = 8;
  let numero9 = 0;

  if (numero8 != 8 || numero8 + numero9 != 8) {
    console.log('hai sbagliato valori');
  } else if (numero8 == 8 || numero8 + numero9 == 8) {
    console.log('il valore dei due numeri è giusto poichè il risulatato è sempre 8');
  }
}

valore();

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 50;
var spesa1 = 20;
var spesa2 = 35;
var totale = spesa1 += spesa2;
var costiSpedizione = 10;

function carrelllo() {
  
  if (totale <= totalShoppingCart) {
    console.log('Spedizione gratis');
  } else if (totale > totalShoppingCart) {
    console.log('devi pagare i costi di spedizione quindi ' + totale + ' + ' + costiSpedizione);
  }
}

carrelllo();

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function sconto() {

  let spesa3 = 20 - (20 / 100) * 20;
  let spesa4 = 35 - (35 / 100) * 20;
  let totale2 = (spesa3 += spesa4);

  if (totale2 <= totalShoppingCart) {
    console.log('Spedizione gratis');
  } else if (totale2 > totalShoppingCart) {
    console.log('devi pagare i costi di spedizione quindi ' + totale2 + ' + ' + costiSpedizione);
  }
}

sconto();

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero11 = 200;
var numero12 = 300;
var numero13 = 500;

function ordine() {
  if (numero11 > numero12 && numero12 > numero13) {
  console.log(numero11, numero12, numero13);
}else if (numero12 > numero11 && numero11 > numero13) {
  console.log(numero12, numero11, numero13);
}else if (numero13 > numero11 && numero11 > numero12 ) {
  console.log(numero13, numero11, numero12);
}else if (numero13 > numero12 && numero12 > numero11) {
  console.log(numero13, numero12, numero11);
}
}
 
ordine();

  /* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

  /* SCRIVI QUI LA TUA RISPOSTA */

  function tipo() {
    let stringa = 'Giuseppe';
    if (stringa == Number) {
      console.log('questa non è una stringa')
    } else if (stringa == String) {
      console.log(typeof (stringa));
    }
  }

tipo();

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function pari() {
  let numero10 = 20;

  if (numero10 % 2 != 0) {
    console.log('il numero 20 dispari');
  } else if (numero10 % 2 == 0) {
    console.log('il numero 20 è pari')
  }
}

pari();

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val - 3 < 5) {
    console.log("Meno di 5");
  } else if (val + 3 >= 10) {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me['city'] = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var primoArray = [];
primoArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(primoArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

primoArray.splice(9, 1, 100);
console.log(primoArray);
//primoArray[9] = 100