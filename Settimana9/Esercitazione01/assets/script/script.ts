const btn = document.getElementById("bottone") as HTMLFormElement;
const input1 = document.getElementById("giocatore1") as HTMLInputElement;
const input2 = document.getElementById("giocatore2") as HTMLInputElement;
const estratto = document.getElementById("estratto") as HTMLParagraphElement;
const risultato = document.getElementById("risultato") as HTMLParagraphElement;
const resetto = document.getElementById("resetto") as HTMLButtonElement;

window.onload = () => {
  btn.reset();
};

const controlla = (x: number, y: number) => {
  if (x < 1 || x > 100) {
    alert("Attenzione !! Giocatore1 inserisci un numero compreso tra 1 e 100");
  } else if (y < 1 || y > 100) {
    alert("Attenzione !! Giocatore2 inserisci un numero compreso tra 1 e 100");
  } else if (x === y) {
    alert("Attenzione i due giocatori devoni inserire numeri diversi");
  }
};

const vincitore = (x: number, y: number) => {
  let randomNumer: number = Math.floor(Math.random() * (100 - 1) + 1);
  estratto.innerHTML = `${randomNumer}`;
  if (x === randomNumer) {
    risultato.innerHTML = "Giocatore1 ha indovinato il numero";
  } else if (y === randomNumer) {
    risultato.innerHTML = "Giocatore2 ha indovinato il numero";
  } else if (Math.abs(x - randomNumer) < Math.abs(y - randomNumer)) {
    risultato.innerHTML =
      "Nessuno ha indovinato ma Giocatore 1 si è avvicinato di più";
  } else if (Math.abs(y - randomNumer) < Math.abs(x - randomNumer)) {
    risultato.innerHTML =
      "Nessuno ha indovinato ma Giocatore 2 si è avvicinato di più";
  }
};

btn.addEventListener("submit", (event) => {
  event.preventDefault();
  const giocatore1: number = Number(input1?.value);
  const giocatore2: number = Number(input2?.value);
  controlla(giocatore1, giocatore2);
  vincitore(giocatore1, giocatore2);
});

resetto.addEventListener("click", () => {
  estratto.innerHTML = "";
  risultato.innerHTML = "";
});
