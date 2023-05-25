var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ClothesShop = /** @class */ (function () {
    function ClothesShop(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    ClothesShop.prototype.getsaldoCapo = function () {
        return ((this.prezzoivainclusa * this.saldo) / 100);
    };
    ClothesShop.prototype.getAcquistoCapo = function () {
        return (this.prezzoivainclusa - this.getsaldoCapo());
    };
    return ClothesShop;
}());
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, nuovoCapo, nuovoCapo2, nuovoCapo3, nuovoCapo4, nuovoCapo5, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./Abbigliamento.json")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Data fetched", data);
                    nuovoCapo = new ClothesShop(data[0].id, data[0].codprod, data[0].collezione, data[0].capo, data[0].modello, data[0].quantita, data[0].colore, data[0].prezzoivaesclusa, data[0].prezzoivainclusa, data[0].disponibile, data[0].saldo);
                    console.log(nuovoCapo);
                    console.log('Sconto applicato:' + ' ' + '€' + nuovoCapo.getsaldoCapo());
                    console.log('Costo capo scontato:' + ' ' + '€' + nuovoCapo.getAcquistoCapo());
                    nuovoCapo2 = new ClothesShop(data[1].id, data[1].codprod, data[1].collezione, data[1].capo, data[1].modello, data[1].quantita, data[1].colore, data[1].prezzoivaesclusa, data[1].prezzoivainclusa, data[1].disponibile, data[1].saldo);
                    console.log(nuovoCapo2);
                    console.log('Sconto applicato:' + ' ' + '€' + nuovoCapo2.getsaldoCapo());
                    console.log('Costo capo scontato:' + ' ' + '€' + nuovoCapo2.getAcquistoCapo());
                    nuovoCapo3 = new ClothesShop(data[2].id, data[2].codprod, data[2].collezione, data[2].capo, data[2].modello, data[2].quantita, data[2].colore, data[2].prezzoivaesclusa, data[2].prezzoivainclusa, data[2].disponibile, data[2].saldo);
                    console.log(nuovoCapo3);
                    console.log('Sconto applicato:' + ' ' + '€' + nuovoCapo3.getsaldoCapo());
                    console.log('Costo capo scontato:' + ' ' + '€' + nuovoCapo3.getAcquistoCapo());
                    nuovoCapo4 = new ClothesShop(data[3].id, data[3].codprod, data[3].collezione, data[3].capo, data[3].modello, data[3].quantita, data[3].colore, data[3].prezzoivaesclusa, data[3].prezzoivainclusa, data[3].disponibile, data[3].saldo);
                    console.log(nuovoCapo4);
                    console.log('Sconto applicato:' + ' ' + '€' + nuovoCapo4.getsaldoCapo());
                    console.log('Costo capo scontato:' + ' ' + '€' + nuovoCapo4.getAcquistoCapo());
                    nuovoCapo5 = new ClothesShop(data[4].id, data[4].codprod, data[4].collezione, data[4].capo, data[4].modello, data[4].quantita, data[4].colore, data[4].prezzoivaesclusa, data[4].prezzoivainclusa, data[4].disponibile, data[4].saldo);
                    console.log(nuovoCapo5);
                    console.log('Sconto applicato:' + ' ' + '€' + nuovoCapo5.getsaldoCapo());
                    console.log('Costo capo scontato:' + ' ' + '€' + nuovoCapo5.getAcquistoCapo());
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Fetch Error:", error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData();
