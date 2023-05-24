var partitaIva = /** @class */ (function () {
    function partitaIva(_nomeLAvoratore, _settore, _redditoAnnuoLordo) {
        this.nomeLavoratore = _nomeLAvoratore;
        this.settore = _settore;
        if (this.settore == "commerciante") {
            this.codredd = 0.4;
        }
        else if (this.settore == "libero professionista") {
            this.codredd = 0.78;
        }
        else if (this.settore == "Altre attività economiche") {
            this.codredd = 0.67;
        }
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseinps = 0.26;
        if (this.redditoAnnuoLordo <= 15000) {
            this.tasseirpef = 0.23;
        }
        else if (this.redditoAnnuoLordo > 15000 &&
            this.redditoAnnuoLordo < 50000) {
            this.tasseirpef = 0.27;
        }
        else if (this.redditoAnnuoLordo > 50000) {
            this.tasseirpef = 0.43;
        }
    }
    partitaIva.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * this.codredd;
    };
    partitaIva.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseinps;
    };
    partitaIva.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseirpef;
    };
    partitaIva.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
    };
    return partitaIva;
}());
var dipendente1 = new partitaIva("Giuseppe Petrucci", "commerciante", 100000);
console.log(dipendente1);
console.log("Utile tasse: \u20AC".concat(dipendente1.getUtileTasse()));
console.log("Tasse inps: \u20AC".concat(dipendente1.getTasseInps()));
console.log("Tasse irpef: \u20AC".concat(dipendente1.getTasseIrpef()));
console.log("Reddito annuo netto: \u20AC".concat(dipendente1.getRedditoAnnuoNetto()));
var dipendente2 = new partitaIva("Antonio Rossi", "libero professionista", 45000);
console.log(dipendente2);
console.log("Utile tasse: \u20AC".concat(dipendente2.getUtileTasse()));
console.log("Tasse inps: \u20AC".concat(dipendente2.getTasseInps()));
console.log("Tasse irpef: \u20AC".concat(dipendente2.getTasseIrpef()));
console.log("Reddito annuo netto: \u20AC".concat(dipendente2.getRedditoAnnuoNetto()));
var dipendente3 = new partitaIva("Mario Lenci", "Altre attività economiche", 10000);
console.log(dipendente3);
console.log("Utile tasse: \u20AC".concat(dipendente3.getUtileTasse()));
console.log("Tasse inps: \u20AC".concat(dipendente3.getTasseInps()));
console.log("Tasse irpef: \u20AC".concat(dipendente3.getTasseIrpef()));
console.log("Reddito annuo netto: \u20AC".concat(dipendente3.getRedditoAnnuoNetto()));
