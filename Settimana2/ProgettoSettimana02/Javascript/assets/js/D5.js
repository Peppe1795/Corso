/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
//soluzione:

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  const stampaArray = pets[i];
  console.log(stampaArray);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
//soluzione:

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//soluzione:

for (let k = pets.length - 1; k >= 0; k--) {
  const invertito = pets[k];
  console.log(invertito);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
//soluzione:

var ultimo = pets.shift();
pets.push(ultimo);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

//soluzione:

for (let j = 0; j < cars.length; j++) {
  const targa = cars[j];
  targa.licensePlate = 'AZN9590';
  console.log(cars);
}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//soluzione:

const miaAuto = {
  brand: 'bmw',
  model: 'serie3',
  color: 'black',
  licensePlate: "AZN9590",
  trims: ['life', 'style', 'r-line'],
}

cars.push(miaAuto);

console.log(cars);

/* ESERCIZIO 7
   Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
//soluzione:

const justTrims = []

for (let x = 0; x < cars.length; x++) {

  justTrims.push(cars[x].trims[0]);
  console.log(justTrims);
}
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let z = 0; z < cars.length; z++) {
  const condizione = cars[z];
  if (condizione.color.charAt(0) == 'b') {
    console.log('Fizz');
  } else if (condizione.color.charAt(0) != 'b') {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
var f = 0;

while (numericArray[f] !== 32) {
  console.log(numericArray[f]);
  f++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

const alfabeto = [];

for (let n = 0; n < charactersArray.length; n++) {
  switch (charactersArray[n]) {

    case 'a':
      alfabeto.push(1);
      break;
    case 'b':
      alfabeto.push(2);
      break;
    case 'c':
      alfabeto.push(3);
      break;
    case 'd':
      alfabeto.push(4);
      break;
    case 'e':
      alfabeto.push(5);
      break;
    case 'f':
      alfabeto.push(6);
      break;
    case 'g':
      alfabeto.push(7);
      break;
    case 'h':
      alfabeto.push(8);
      break;
    case 'i':
      alfabeto.push(9);
      break;
    case 'l':
      alfabeto.push(10);
      break;
    case 'm':
      alfabeto.push(11);
      break;
    case 'n':
      alfabeto.push(12);
      break;
    case 'o':
      alfabeto.push(13);
      break;
    case 'p':
      alfabeto.push(14);
      break;
    case 'q':
      alfabeto.push(15);
      break;
    case 'r':
      alfabeto.push(16);
      break;
    case 's':
      alfabeto.push(17);
      break;
    case 't':
      alfabeto.push(18);
      break;
    case 'u':
      alfabeto.push(19);
      break;
    case 'v':
      alfabeto.push(20);
      break;
    case 'z':
      alfabeto.push(21);
      break;

  }
}

console.log(alfabeto);