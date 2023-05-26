let numeroDachiamare = document.getElementById(
  "numeroDachiamare"
) as HTMLInputElement;
let numeroPersonale = document.getElementById(
  "numeroPersonale"
) as HTMLInputElement;
let ricarica = document.getElementById("ricarica") as HTMLInputElement;
let btn = document.getElementById("form") as HTMLButtonElement;
let riga = document.getElementById("riga") as HTMLDivElement;
let chiama = document.getElementById("chiama") as HTMLButtonElement;
let resetta = document.getElementById("resetta") as HTMLButtonElement;

interface Smartphone {
  credito: number;

  getRicarica(ricarica: number): void;
  getChiamata(durata: number): void;
  getNumero404(): number;
}

class Utente implements Smartphone {
  credito: number;
  constructor(_credito: number) {
    this.credito = _credito;
  }

  getRicarica(ricarica: number): number {
    return (this.credito += ricarica);
  }

  getChiamata(durata: number): number {
    return durata * 0.2;
  }

  getNumero404(): number {
    return this.credito;
  }
}

let numero: number = 0;
let numeroChiamate2 = 1;
chiama.addEventListener("click", () => {
  riga.innerHTML = "";
  setInterval((): number => {
    numero++;
    return numero;
  }, 1000);
});

btn.addEventListener("submit", (event) => {
  event.preventDefault();
  let FirstUser = new Utente(50);
  const valoreRicarica: number = Number(ricarica?.value);
  const valorenum1: number = Number(numeroPersonale.value);
  const valorenum2: number = Number(numeroDachiamare.value);
  riga.innerHTML = `<ul>
  <li>Il tuo numero: ${valorenum1}</li>
  <li>Numero chiamato: ${valorenum2}</li>
  <li>Importo ricarica: ${valoreRicarica}</li>
  <li>Credito dopo ricarica: ${FirstUser.getRicarica(valoreRicarica)}</li>
  <li>Durata chiamata: ${numero}</li>
  <li>Costo chiamata: ${FirstUser.getChiamata(numero)}</li>
  <li>Numero chiamate: ${numeroChiamate2++}</li>
  <li>Credito residuo dopo chiamata: ${
    FirstUser.credito - FirstUser.getChiamata(numero)
  }</li>
</ul>`;
  numero = 0;
  return numero;
});
  
resetta.addEventListener('click', () => {
    let FirstUser = new Utente(50);
    numeroChiamate2 = 0
})