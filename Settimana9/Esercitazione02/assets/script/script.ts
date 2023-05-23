class MotherAccount {
  nomeUtente: string;
  balanceinit: number = 0;
  firstDeposit: number;
  secondDeposit: number;
  firstDraw: number;
  secondDraw: number;
  constructor(
    _nomeUtente: string,
    _balanceinit: number,
    _firstDeposit: number,
    _secondDeposit: number,
    _firstDraw: number,
    _secondDraw: number
  ) {
    this.nomeUtente = _nomeUtente;
    this.balanceinit = 0;
    this.firstDeposit = _firstDeposit;
    this.secondDeposit = _secondDeposit;
    this.firstDraw = _firstDeposit;
    this.secondDraw = _secondDraw;
  }

  oneDeposit() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo primo deposito: € ${
      this.balanceinit + this.firstDeposit
    }`;
  }

  twoDeposit() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo secondo deposito: € ${
      this.balanceinit + this.firstDeposit + this.secondDeposit
    }`;
  }

  oneWithdraw() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo primo prelievo: € ${
      this.balanceinit + this.firstDeposit + this.secondDeposit - this.firstDraw
    }`;
  }

  twoWithdraw() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo secondo prelievo: € ${
      this.balanceinit +
      this.firstDeposit +
      this.secondDeposit -
      this.firstDraw -
      this.secondDraw
    }`;
  }
  addInterest() {
    return `Calcolo interessi conto di ${this.nomeUtente} pari a: € ${
      (this.balanceinit +
        this.firstDeposit +
        this.secondDeposit -
        this.firstDraw -
        this.secondDraw) *
      0.1
    }`;
  }
}

let contoMamma = new MotherAccount("Madre", 0, 25, 50, 10, 20);
console.log(contoMamma);
console.log(contoMamma.oneDeposit());
console.log(contoMamma.twoDeposit());
console.log(contoMamma.oneWithdraw());
console.log(contoMamma.twoWithdraw());
console.log(contoMamma.addInterest());

class SonAccount {
  nomeUtente: string;
  balanceinit: number = 0;
  firstDeposit: number;
  secondDeposit: number;
  firstDraw: number;
  secondDraw: number;
  constructor(
    _nomeUtente: string,
    _balanceinit: number,
    _firstDeposit: number,
    _secondDeposit: number,
    _firstDraw: number,
    _secondDraw: number
  ) {
    this.nomeUtente = _nomeUtente;
    this.balanceinit = 0;
    this.firstDeposit = _firstDeposit;
    this.secondDeposit = _secondDeposit;
    this.firstDraw = _firstDeposit;
    this.secondDraw = _secondDraw;
  }

  oneDeposit() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo primo deposito: € ${
      this.balanceinit + this.firstDeposit
    }`;
  }

  twoDeposit() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo secondo deposito: € ${
      this.balanceinit + this.firstDeposit + this.secondDeposit
    }`;
  }

  oneWithdraw() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo primo prelievo: € ${
      this.balanceinit + this.firstDeposit + this.secondDeposit - this.firstDraw
    }`;
  }

  twoWithdraw() {
    return `saldo conto di ${
      this.nomeUtente
    } aggiornato dopo secondo prelievo: € ${
      this.balanceinit +
      this.firstDeposit +
      this.secondDeposit -
      this.firstDraw -
      this.secondDraw
    }`;
  }
}

let ContoFiglio = new SonAccount("Figlio", 0, 50, 40, 25, 30);
console.log(ContoFiglio);
console.log(ContoFiglio.oneDeposit());
console.log(ContoFiglio.twoDeposit());
console.log(ContoFiglio.oneWithdraw());
console.log(ContoFiglio.twoWithdraw());
