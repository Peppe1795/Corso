/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

//Soluzione

var concatenazione = (str1, str2) => {
  let ciao = str1.slice(0, 2);
  let ciao2 = str2.slice(str2.length - 2);
  let nuovaStringa = ciao + ciao2;
  return nuovaStringa.toUpperCase();
}

console.log(concatenazione('ciao', 'bello ciao'));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

//Soluzione

var casuale = () => {
  var array2 = [];
  for (let i = 0; i < 10; i++) {
    array2.push(Math.floor(Math.random() * 100 + 1));
  }
  return array2;
}
console.log(casuale());

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

//Soluzione

var array2 = [1, 4, 6, 7, 8, 10, 17, 15, 16];

var newArray2 = array2.filter(element => element % 2 === 0);

console.log(newArray2);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

//Soluzione
var array3 = [1, 4, 6, 7, 8, 10, 17, 15, 16, 45, 50, 18];

var somma1 = (arr) => {
  let somma3 = 0;
  arr.forEach(element => {
    somma3 += element;
  });
  return somma3;
}

console.log(somma1(array3));

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

//Soluzione

var somma2 = array2.reduce((total, valore) => total + valore, 0);
console.log(somma2);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

//Soluzione

var incremento = (array4, n) => {
  return array4.map((element) =>
    element + n);
}
console.log(incremento([1, 5, 10, 7, 55, 75, 44], 12));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

//Soluzione

var array5 = ['Peppe', 'Antonio', 'Giustino'];

var lunghezza = array5.map((element) => {
  return element.length;
})

console.log(lunghezza);

/* ESERCIZIO 9

  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

//Soluzione
var array6 = [];

var dispari = () => {
  for (i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array6.push(i);
    }
  }
}
dispari();
console.log(array6);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

//Soluzione

var vecchio = () => {
  for (let i = 0; i < movies.length; i++) {
    let vec = parseInt(movies[i].Year);
    Math.min(vec);
  }

}

console.log(vecchio());

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

//Soluzione

var filmTotali = (arr) => {
  return arr.length;
}

console.log(filmTotali(movies));

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

//Soluzione

var titoli1 = (titoli) => {
  return titoli.map((element) => element.Title);
}

console.log(titoli1(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

//Soluzione
var rec = [];
var recenti = () => {
  for (k = 0; k < movies.length; k++) {
    let uscita = parseInt(movies[k].Year);
    if (uscita >= 2000) {
      rec.push(movies[k]);
    }
  }
}
recenti();

console.log(rec);

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

//Soluzione

var specifico = (arr, id) => {
  let filmTrovato = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].imdbID === id) {
      filmTrovato = arr[i];
    }
  }
  return filmTrovato;
}
console.log(specifico(movies, "tt0077869"));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

//Soluzione

var somma6 = (anniTotali) => {
  let somma5 = 0;
  for (k = 0; k < anniTotali.length; k++) {
    somma5 += parseInt(anniTotali[k].Year);
  }
  return somma5;
}

console.log(somma6(movies));
