var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.getRicarica = function (ricarica) {
        this.credito += ricarica;
    };
    Utente.prototype.getChiamata = function (durata) {
        this.credito -= durata * 0.2;
        this.numeroChiamate++;
    };
    Utente.prototype.getNumero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.getAzzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente;
}());
var FirstUser = new Utente(50, 15);
console.log('FirstUser:');
console.log('-----------');
FirstUser.getRicarica(25);
FirstUser.getChiamata(30);
console.log("Il tuo ceredito residuo \u00E8 di:  \u20AC ".concat(FirstUser.getNumero404()));
console.log("Hai effettuato ".concat(FirstUser.getNumeroChiamate(), " chiamate"));
FirstUser.getAzzeraChiamate();
console.log("Chiamate azzerate = ".concat(FirstUser.getNumeroChiamate()));
var SecondUser = new Utente(25, 60);
console.log('SecondUser:');
console.log('-----------');
SecondUser.getRicarica(15);
SecondUser.getChiamata(35);
console.log("Il tuo ceredito residuo \u00E8 di:  \u20AC ".concat(SecondUser.getNumero404()));
console.log("Hai effettuato ".concat(SecondUser.getNumeroChiamate(), " chiamate"));
SecondUser.getAzzeraChiamate();
console.log("Chiamate azzerate = ".concat(SecondUser.getNumeroChiamate()));
var ThirdUser = new Utente(50, 15);
console.log('ThirdUser:');
console.log('-----------');
ThirdUser.getRicarica(15);
ThirdUser.getChiamata(35);
console.log("Il tuo ceredito residuo \u00E8 di:  \u20AC ".concat(ThirdUser.getNumero404()));
console.log("Hai effettuato ".concat(ThirdUser.getNumeroChiamate(), " chiamate"));
ThirdUser.getAzzeraChiamate();
console.log("Chiamate azzerate = ".concat(ThirdUser.getNumeroChiamate()));
