var numeroDachiamare = document.getElementById("numeroDachiamare");
var numeroPersonale = document.getElementById("numeroPersonale");
var ricarica = document.getElementById("ricarica");
var btn = document.getElementById("form");
var riga = document.getElementById("riga");
var chiama = document.getElementById("chiama");
var resetta = document.getElementById("resetta");
var Utente = /** @class */ (function () {
    function Utente(_credito) {
        this.credito = _credito;
    }
    Utente.prototype.getRicarica = function (ricarica) {
        return (this.credito += ricarica);
    };
    Utente.prototype.getChiamata = function (durata) {
        return durata * 0.2;
    };
    Utente.prototype.getNumero404 = function () {
        return this.credito;
    };
    return Utente;
}());
var numero = 0;
var numeroChiamate2 = 1;
chiama.addEventListener("click", function () {
    riga.innerHTML = "";
    setInterval(function () {
        numero++;
        return numero;
    }, 1000);
});
btn.addEventListener("submit", function (event) {
    event.preventDefault();
    var FirstUser = new Utente(50);
    var valoreRicarica = Number(ricarica === null || ricarica === void 0 ? void 0 : ricarica.value);
    var valorenum1 = Number(numeroPersonale.value);
    var valorenum2 = Number(numeroDachiamare.value);
    riga.innerHTML = "<ul>\n  <li>Il tuo numero: ".concat(valorenum1, "</li>\n  <li>Numero chiamato: ").concat(valorenum2, "</li>\n  <li>Importo ricarica: ").concat(valoreRicarica, "</li>\n  <li>Credito dopo ricarica: ").concat(FirstUser.getRicarica(valoreRicarica), "</li>\n  <li>Durata chiamata: ").concat(numero, "</li>\n  <li>Costo chiamata: ").concat(FirstUser.getChiamata(numero), "</li>\n  <li>Numero chiamate: ").concat(numeroChiamate2++, "</li>\n  <li>Credito residuo dopo chiamata: ").concat(FirstUser.credito - FirstUser.getChiamata(numero), "</li>\n</ul>");
    numero = 0;
    return numero;
});
resetta.addEventListener('click', function () {
    var FirstUser = new Utente(50);
    numeroChiamate2 = 0;
});
