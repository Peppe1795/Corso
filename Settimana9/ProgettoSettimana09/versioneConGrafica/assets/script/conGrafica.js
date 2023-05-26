var numeroDachiamare = document.getElementById("numeroDachiamare");
var numeroPersonale = document.getElementById("numeroPersonale");
var ricarica = document.getElementById("ricarica");
var btn = document.getElementById("form");
var riga = document.getElementById("riga");
var chiama = document.getElementById("chiama");
var resetta = document.getElementById("resetta");
var riga2 = document.getElementById("riga2");
var Utente2 = /** @class */ (function () {
    function Utente2(_credito) {
        this.credito = _credito;
    }
    Utente2.prototype.getRicarica = function (ricarica) {
        return (this.credito += ricarica);
    };
    Utente2.prototype.getChiamata = function (durata) {
        return durata * 0.2;
    };
    Utente2.prototype.getNumero404 = function () {
        return this.credito;
    };
    return Utente2;
}());
var numero = 0;
var numeroChiamate2 = 1;
var intervallo;
chiama.addEventListener("click", function () {
    riga.innerHTML = "";
    intervallo = setInterval(function () {
        riga2.innerHTML = "Durata chiamata: ".concat(numero);
        numero++;
        return numero;
    }, 1000);
});
btn.addEventListener("submit", function (event) {
    event.preventDefault();
    clearInterval(intervallo);
    var FirstUser = new Utente2(50);
    var valoreRicarica = Number(ricarica === null || ricarica === void 0 ? void 0 : ricarica.value);
    var valorenum1 = Number(numeroPersonale.value);
    var valorenum2 = Number(numeroDachiamare.value);
    riga.innerHTML = "<ul>\n  <li>Il tuo numero: ".concat(valorenum1, "</li>\n  <li>Numero chiamato: ").concat(valorenum2, "</li>  \n  <li>Credito Utente: ").concat(FirstUser.credito, "</li>\n  <li>Importo ricarica: ").concat(valoreRicarica, "</li>\n<li>Credito dopo ricarica: ").concat(FirstUser.getRicarica(valoreRicarica), "</li>\n  <li>Durata chiamata: ").concat(numero, "</li>\n  <li>Costo chiamata: ").concat(FirstUser.getChiamata(numero), "</li>\n  <li>Numero chiamate: ").concat(numeroChiamate2++, "</li>\n  <li>Credito residuo dopo chiamata: ").concat(FirstUser.credito - FirstUser.getChiamata(numero), "</li>\n</ul>");
    numero = 0;
    return numero;
});
resetta.addEventListener("click", function () {
    numeroChiamate2 = 0;
    numero = 0;
    riga.innerHTML = "";
    riga2.innerHTML = "";
    clearInterval(intervallo);
    return numeroChiamate2 && numero;
});
