class partitaIva {
  nomeLavoratore: string;
  settore: string;
  codredd?: number;
  redditoAnnuoLordo: number;
  tasseinps: number;
  tasseirpef?: number;
  constructor(
    _nomeLAvoratore: string,
    _settore: string,
    _redditoAnnuoLordo: number
  ) {
    this.nomeLavoratore = _nomeLAvoratore;
    this.settore = _settore;
    if (this.settore == "commerciante") {
      this.codredd = 0.4;
    } else if (this.settore == "libero professionista") {
      this.codredd = 0.78;
    } else if (this.settore == "Altre attività economiche") {
      this.codredd = 0.67;
    }
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.tasseinps = 0.26;
    if (this.redditoAnnuoLordo <= 15000) {
      this.tasseirpef = 0.23;
    } else if (
      this.redditoAnnuoLordo > 15000 &&
      this.redditoAnnuoLordo < 50000
    ) {
      this.tasseirpef = 0.27;
    } else if (this.redditoAnnuoLordo > 50000) {
      this.tasseirpef = 0.43;
    }
  }

  getUtileTasse(): number {
    return this.redditoAnnuoLordo * this.codredd!;
  }

  getTasseInps(): number {
    return this.getUtileTasse() * this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.getUtileTasse() * this.tasseirpef!;
  }

  getRedditoAnnuoNetto(): number {
    return (
      this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    );
  }
}

let dipendente1 = new partitaIva("Giuseppe Petrucci", "commerciante", 100000);

console.log(dipendente1);

console.log(`Utile tasse: €${dipendente1.getUtileTasse()}`);
console.log(`Tasse inps: €${dipendente1.getTasseInps()}`);
console.log(`Tasse irpef: €${dipendente1.getTasseIrpef()}`);
console.log(`Reddito annuo netto: €${dipendente1.getRedditoAnnuoNetto()}`);

let dipendente2 = new partitaIva(
  "Antonio Rossi",
  "libero professionista",
  45000
);

console.log(dipendente2);

console.log(`Utile tasse: €${dipendente2.getUtileTasse()}`);
console.log(`Tasse inps: €${dipendente2.getTasseInps()}`);
console.log(`Tasse irpef: €${dipendente2.getTasseIrpef()}`);
console.log(`Reddito annuo netto: €${dipendente2.getRedditoAnnuoNetto()}`);

let dipendente3 = new partitaIva(
  "Mario Lenci",
  "Altre attività economiche",
  10000
);

console.log(dipendente3);

console.log(`Utile tasse: €${dipendente3.getUtileTasse()}`);
console.log(`Tasse inps: €${dipendente3.getTasseInps()}`);
console.log(`Tasse irpef: €${dipendente3.getTasseIrpef()}`);
console.log(`Reddito annuo netto: €${dipendente3.getRedditoAnnuoNetto()}`);