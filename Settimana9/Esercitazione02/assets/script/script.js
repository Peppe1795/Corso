var MotherAccount = /** @class */ (function () {
    function MotherAccount(_nomeUtente, _balanceinit, _firstDeposit, _secondDeposit, _firstDraw, _secondDraw) {
        this.balanceinit = 0;
        this.nomeUtente = _nomeUtente;
        this.balanceinit = 0;
        this.firstDeposit = _firstDeposit;
        this.secondDeposit = _secondDeposit;
        this.firstDraw = _firstDeposit;
        this.secondDraw = _secondDraw;
    }
    MotherAccount.prototype.oneDeposit = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo primo deposito: \u20AC ").concat(this.balanceinit + this.firstDeposit);
    };
    MotherAccount.prototype.twoDeposit = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo secondo deposito: \u20AC ").concat(this.balanceinit + this.firstDeposit + this.secondDeposit);
    };
    MotherAccount.prototype.oneWithdraw = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo primo prelievo: \u20AC ").concat(this.balanceinit + this.firstDeposit + this.secondDeposit - this.firstDraw);
    };
    MotherAccount.prototype.twoWithdraw = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo secondo prelievo: \u20AC ").concat(this.balanceinit +
            this.firstDeposit +
            this.secondDeposit -
            this.firstDraw -
            this.secondDraw);
    };
    MotherAccount.prototype.addInterest = function () {
        return "Calcolo interessi conto di ".concat(this.nomeUtente, " pari a: \u20AC ").concat((this.balanceinit +
            this.firstDeposit +
            this.secondDeposit -
            this.firstDraw -
            this.secondDraw) *
            0.1);
    };
    return MotherAccount;
}());
var contoMamma = new MotherAccount("Madre", 0, 25, 50, 10, 20);
console.log(contoMamma);
console.log(contoMamma.oneDeposit());
console.log(contoMamma.twoDeposit());
console.log(contoMamma.oneWithdraw());
console.log(contoMamma.twoWithdraw());
console.log(contoMamma.addInterest());
var SonAccount = /** @class */ (function () {
    function SonAccount(_nomeUtente, _balanceinit, _firstDeposit, _secondDeposit, _firstDraw, _secondDraw) {
        this.balanceinit = 0;
        this.nomeUtente = _nomeUtente;
        this.balanceinit = 0;
        this.firstDeposit = _firstDeposit;
        this.secondDeposit = _secondDeposit;
        this.firstDraw = _firstDeposit;
        this.secondDraw = _secondDraw;
    }
    SonAccount.prototype.oneDeposit = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo primo deposito: \u20AC ").concat(this.balanceinit + this.firstDeposit);
    };
    SonAccount.prototype.twoDeposit = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo secondo deposito: \u20AC ").concat(this.balanceinit + this.firstDeposit + this.secondDeposit);
    };
    SonAccount.prototype.oneWithdraw = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo primo prelievo: \u20AC ").concat(this.balanceinit + this.firstDeposit + this.secondDeposit - this.firstDraw);
    };
    SonAccount.prototype.twoWithdraw = function () {
        return "saldo conto di ".concat(this.nomeUtente, " aggiornato dopo secondo prelievo: \u20AC ").concat(this.balanceinit +
            this.firstDeposit +
            this.secondDeposit -
            this.firstDraw -
            this.secondDraw);
    };
    return SonAccount;
}());
var ContoFiglio = new SonAccount("Figlio", 0, 50, 40, 25, 30);
console.log(ContoFiglio);
console.log(ContoFiglio.oneDeposit());
console.log(ContoFiglio.twoDeposit());
console.log(ContoFiglio.oneWithdraw());
console.log(ContoFiglio.twoWithdraw());
