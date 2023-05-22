let btn = document.getElementById("bottone") as HTMLFormElement;
let input1 = document.getElementById("giocatore1") as HTMLInputElement | null;
let input2 = document.getElementById("giocatore2") as HTMLInputElement | null;
let giocatore1: any = input1?.value;
let giocatore2: any = input2?.value;
let estratto = document.getElementById("estratto") as HTMLParagraphElement;
let risultato = document.getElementById("risultato") as HTMLParagraphElement;
let resetto = document.getElementById("resetto") as HTMLButtonElement;

window.onload = () => {
  btn.reset();
};

const controlla = () => {
  if (giocatore1 < 1 || giocatore1 > 100) {
    alert("Attenzione !! Giocatore1 inserisci un numero compreso tra 1 e 100");
  } else if (giocatore2 < 1 || giocatore2 > 100) {
    alert("Attenzione !! Giocatore2 inserisci un numero compreso tra 1 e 100");
  } else if (giocatore1 === giocatore2) {
    alert("Attenzione i due giocatori devoni inserire numeri diversi");
  } else {
    vincitore();
  }
};

const vincitore = () => {
  let randomNumer: number = Math.floor(Math.random() * (100 - 1) + 1);
  estratto.innerHTML = `${randomNumer}`;
  if (giocatore1 === randomNumer) {
    risultato.innerHTML = "Giocatore1 ha indovinato il numero";
  } else if (giocatore2 === randomNumer) {
    risultato.innerHTML = "Giocatore2 ha indovinato il numero";
  } else if (
    Math.abs(giocatore1 - randomNumer) < Math.abs(giocatore2 - randomNumer)
  ) {
    risultato.innerHTML =
      "Nessuno ha indovinato ma Giocatore 1 si è avvicinato di più";
  } else if (
    Math.abs(giocatore2 - randomNumer) < Math.abs(giocatore1 - randomNumer)
  ) {
    risultato.innerHTML =
      "Nessuno ha indovinato ma Giocatore 2 si è avvicinato di più";
  }
};

btn.addEventListener("submit", (event) => {
  event.preventDefault();
  controlla();
});

resetto.addEventListener("click", () => {
  estratto.innerHTML = "";
  risultato.innerHTML = "";
});
