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
var rigaDettagli = document.getElementById("details-container");
var rigaCall = document.getElementById("rigaCall");
var rigaCall2 = document.getElementById("rigaCall2");
var stacca = document.getElementById("stacca");
var chiama = document.getElementById("chiama");
var numeroDaChiamare = document.getElementById("numeroDaChiamare");
var url = "https://6471d9566a9370d5a41abe55.mockapi.io/api/tel/tasks/";
var trovaAccount = new URLSearchParams(window.location.search);
var id = trovaAccount.get("tasksId");
var Utente3 = /** @class */ (function () {
    function Utente3(_name, _surname, _telephone, _firstPhoneTopUp, _telephoneCredit, _numbersOfCalls, _lastCallDuration) {
        this.name = _name;
        this.surname = _surname;
        this.telephone = _telephone;
        this.firstPhoneTopUp = _firstPhoneTopUp;
        this.telephoneCredit = _telephoneCredit;
        this.numbersOfCalls = _numbersOfCalls;
        this.lastCallDuration = _lastCallDuration;
    }
    Utente3.prototype.getRicarica = function (ricarica) {
        this.telephoneCredit += ricarica;
    };
    return Utente3;
}());
function fetchData3() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data_1, numero_1, numeroChiamate2_1, intervallo_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url + id)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data_1 = _a.sent();
                    console.log("Data fetched", data_1);
                    rigaDettagli.innerHTML = " <div class=\"col-6 col-md-4 col-lg-3 mb-3 w-100\">\n        <h2 class='text-center m-4'> Dettagli Account selezionato </h2>\n          <ul class=\"list-group bg-warning\">\n          <li class=\"list-group-item bg-warning\">Nome: ".concat(data_1.name, "</li>\n          <li class=\"list-group-item bg-warning\">cognome: ").concat(data_1.surname, "</li>\n          <li class=\"list-group-item bg-warning\">Numero di telefono: ").concat(data_1.telephone, "</li>\n          <li class=\"list-group-item bg-warning\">Credito residuo:&#8364  ").concat(data_1.telephoneCredit, "</li>\n        </ul>\n          </div>");
                    numero_1 = 0;
                    numeroChiamate2_1 = 1;
                    chiama.addEventListener("click", function (e) {
                        e.preventDefault();
                        clearInterval(intervallo_1);
                        rigaCall2.innerHTML = "";
                        intervallo_1 = setInterval(function () {
                            rigaCall.innerHTML = "Durata chiamata: ".concat(numero_1);
                            numero_1++;
                            return numero_1;
                        }, 1000);
                    });
                    stacca.addEventListener("submit", function (event) {
                        var numerochiamatoValue = numeroDaChiamare.value;
                        event.preventDefault();
                        clearInterval(intervallo_1);
                        rigaCall2.innerHTML = "\n      <h2>Resconto Chiamata</h2>\n      <ul>\n            <li>Il tuo numero: ".concat(data_1.telephone, "</li>\n            <li>Numero chiamato: ").concat(numerochiamatoValue, "</li>  \n            <li>Credito Utente: &#8364 ").concat(data_1.telephoneCredit, "</li>\n            <li>Durata chiamata: ").concat(numero_1, "</li>\n            <li>Costo chiamata: &#8364 ").concat(numero_1 * 0.2, " </li>\n            <li>Numero chiamate: ").concat(numeroChiamate2_1++, "</li>\n            <li>Credito residuo dopo chiamata: &#8364 ").concat(data_1.telephoneCredit - numero_1 * 0.2, " </li>\n          </ul>");
                        function modfica() {
                            return __awaiter(this, void 0, void 0, function () {
                                var User, response3, data3, error_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 3, , 4]);
                                            User = new Utente3(data_1.name, data_1.surname, data_1.telephone, data_1.firstPhoneTopUp, data_1.telephoneCredit - numero_1 * 0.2, numeroChiamate2_1, numero_1);
                                            return [4 /*yield*/, fetch(url + id, {
                                                    method: "PUT",
                                                    body: JSON.stringify(User),
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                    },
                                                })];
                                        case 1:
                                            response3 = _a.sent();
                                            if (!response3.ok) {
                                                throw new Error("HTTP error! Status: ".concat(response3.status));
                                            }
                                            return [4 /*yield*/, response3.json()];
                                        case 2:
                                            data3 = _a.sent();
                                            console.log("Data fetched", data3);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_2 = _a.sent();
                                            console.log("Fetch Error:", error_2.message);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        modfica();
                        numero_1 = 0;
                        return numero_1;
                    });
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
fetchData3();
function cancella() {
    return __awaiter(this, void 0, void 0, function () {
        var response2, data2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url + id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })];
                case 1:
                    response2 = _a.sent();
                    if (!response2.ok) {
                        throw new Error("HTTP error! Status: ".concat(response2.status));
                    }
                    return [4 /*yield*/, response2.json()];
                case 2:
                    data2 = _a.sent();
                    console.log("Delete completed", data2);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log("Fetch Error:", error_3.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var btnCancella = document.getElementById("cancella");
btnCancella.addEventListener("click", function () {
    if (confirm("Sei sicuro di voler cancellare questo account?") == true) {
        cancella();
    }
});
