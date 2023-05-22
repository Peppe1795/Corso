var btn = document.getElementById("bottone");
var input1 = document.getElementById("giocatore1");
var input2 = document.getElementById("giocatore2");
var giocatore1 = input1 === null || input1 === void 0 ? void 0 : input1.value;
var giocatore2 = input2 === null || input2 === void 0 ? void 0 : input2.value;
var estratto = document.getElementById("estratto");
var risultato = document.getElementById("risultato");
var resetto = document.getElementById("resetto");
window.onload = function () {
    btn.reset();
};
var controlla = function () {
    if (giocatore1 < 1 || giocatore1 > 100) {
        alert("Attenzione !! Giocatore1 inserisci un numero compreso tra 1 e 100");
    }
    else if (giocatore2 < 1 || giocatore2 > 100) {
        alert("Attenzione !! Giocatore2 inserisci un numero compreso tra 1 e 100");
    }
    else if (giocatore1 === giocatore2) {
        alert("Attenzione i due giocatori devoni inserire numeri diversi");
    }
    else {
        vincitore();
    }
};
var vincitore = function () {
    var randomNumer = Math.floor(Math.random() * (100 - 1) + 1);
    estratto.innerHTML = "".concat(randomNumer);
    if (giocatore1 === randomNumer) {
        risultato.innerHTML = "Giocatore1 ha indovinato il numero";
    }
    else if (giocatore2 === randomNumer) {
        risultato.innerHTML = "Giocatore2 ha indovinato il numero";
    }
    else if (Math.abs(giocatore1 - randomNumer) < Math.abs(giocatore2 - randomNumer)) {
        risultato.innerHTML =
            "Nessuno ha indovinato ma Giocatore 1 si è avvicinato di più";
    }
    else if (Math.abs(giocatore2 - randomNumer) < Math.abs(giocatore1 - randomNumer)) {
        risultato.innerHTML =
            "Nessuno ha indovinato ma Giocatore 2 si è avvicinato di più";
    }
};
btn.addEventListener("submit", function (event) {
    event.preventDefault();
    controlla();
});
resetto.addEventListener("click", function () {
    estratto.innerHTML = "";
    risultato.innerHTML = "";
});
