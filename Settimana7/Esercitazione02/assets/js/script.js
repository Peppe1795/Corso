let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let indirizzo = document.getElementById("indirizzo");
let telefono = document.getElementById("telefono");
let salva = document.getElementById("salva");
let rimuovi = document.getElementById("rimuovi");
let lista = document.getElementById("listaDati");
let contatore = document.getElementById("contatore");
let listaSalvata = [];
let numero = 0;

const visualizzaLista = () => {
  lista.innerHTML = "";

  listaSalvata.forEach((item) => {
    const nuovaLista = document.createElement("li");
    nuovaLista.innerText = `Nome: ${item.name} Cognome: ${item.surname} Indirizzo: ${item.address} Telefono: ${item.phone}`;
    lista.appendChild(nuovaLista);
  });
};

salva.addEventListener("click", (event) => {
  event.preventDefault();

  const nuovoUtente = {
    name: nome.value,
    surname: cognome.value,
    address: indirizzo.value,
    phone: telefono.value,
  };

  listaSalvata.push(nuovoUtente);

  const listaStorage = JSON.stringify(listaSalvata);
  localStorage.setItem("datiSalvati", listaStorage);

  nome.value = "";
  cognome.value = "";
  indirizzo.value = "";
  telefono.value = "";

  visualizzaLista();
});

rimuovi.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("datiSalvati");
  lista.innerHTML = "";
});

const tempo = () => {
  if (sessionStorage.getItem("timer")) {
    numero = Number(sessionStorage.getItem("timer"));
  } else {
    numero = Number(contatore.innerHTML);
  }
  contatore.innerHTML = numero;
  setInterval(() => {
    numero++;
    sessionStorage.setItem("timer", numero);
    contatore.innerHTML = numero;
  }, 1000);
};

window.onload = () => {
  tempo();
  if (localStorage.getItem("datiSalvati")) {
    let arrayStringa = localStorage.getItem("datiSalvati");

    let nuovoarray = JSON.parse(arrayStringa);

    listaSalvata = nuovoarray;

    visualizzaLista();
  }
};
