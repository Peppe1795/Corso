var btn = document.getElementById("bottone");
var input1 = document.getElementById("giocatore1");
var input2 = document.getElementById("giocatore2");
var estratto = document.getElementById("estratto");
var risultato = document.getElementById("risultato");
var resetto = document.getElementById("resetto");
window.onload = function () {
    btn.reset();
};
var controlla = function (x, y) {
    if (x < 1 || x > 100) {
        alert("Attenzione !! Giocatore1 inserisci un numero compreso tra 1 e 100");
    }
    else if (y < 1 || y > 100) {
        alert("Attenzione !! Giocatore2 inserisci un numero compreso tra 1 e 100");
    }
    else if (x === y) {
        alert("Attenzione i due giocatori devoni inserire numeri diversi");
    }
};
var vincitore = function (x, y) {
    var randomNumer = Math.floor(Math.random() * (100 - 1) + 1);
    estratto.innerHTML = "".concat(randomNumer);
    if (x === randomNumer) {
        risultato.innerHTML = "Giocatore1 ha indovinato il numero";
    }
    else if (y === randomNumer) {
        risultato.innerHTML = "Giocatore2 ha indovinato il numero";
    }
    else if (Math.abs(x - randomNumer) < Math.abs(y - randomNumer)) {
        risultato.innerHTML =
            "Nessuno ha indovinato ma Giocatore 1 si è avvicinato di più";
    }
    else if (Math.abs(y - randomNumer) < Math.abs(x - randomNumer)) {
        risultato.innerHTML =
            "Nessuno ha indovinato ma Giocatore 2 si è avvicinato di più";
    }
};
btn.addEventListener("submit", function (event) {
    event.preventDefault();
    var giocatore1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    var giocatore2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    controlla(giocatore1, giocatore2);
    vincitore(giocatore1, giocatore2);
});
resetto.addEventListener("click", function () {
    estratto.innerHTML = "";
    risultato.innerHTML = "";
});
