/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('titolo').innerHTML = 'Esercizi Javascript';
document.getElementById('testo').innerHTML = '<ul><li> <b> String</b> = Testo tra apici in cui posso inserire numeri e lettere </li><li><b>Number</b> = Dato numerio cioè posso inserire solo numeri</li><li><b>Boolean</b> = Questo dato puo assumere solo i valori di vero o falso</li><li><b>Date</b> = Questo dato definisce ora e la data</li><li><b>Null</b> = Indica l\'assenza intenzionale di un valore ad una variabile che ho assegnato</li><li><b>Undefined</b> = Indica una variabile a cui non è sato asseganto un valore oppure non è stata proprio definita</li></ul>';

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = 'Giuseppe';
console.log(name);
document.getElementById('cognome').innerHTML = name

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 12;
var numero2 = 20;
console.log(numero1 + numero2);
document.getElementById('somma').innerHTML = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
document.getElementById('incognita').innerHTML = x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = 'Petrucci';
console.log(name);
document.getElementById('cognome').innerHTML = name

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero3 = 4;
console.log(x - numero3);
document.getElementById('sottrazione').innerHTML = x - numero3;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = 'john';
var name2 = 'John';
console.log(name1 != name2);

if (name2 == name2.toLocaleLowerCase()) {
  document.write('Le stringhe sono diverse');
}else {
  name1 == name2
  document.write('Le stringhe sono uguali');
}
