/*interface Smartphone {
  credito: number;
  numeroChiamate: number;

  getRicarica(ricarica: number): void;
  getChiamata(durata: number): void;
  getNumero404(): number;
  getNumeroChiamate(): number;
  getAzzeraChiamate(): void;
}

class Utente implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor( _credito: number, _numeroChiamate: number) {
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
  }

  getRicarica(ricarica: number): void {
    this.credito += ricarica;
  }

  getChiamata(durata: number): void {
    this.credito -= durata * 0.2;
    this.numeroChiamate++;
  }

  getNumero404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  getAzzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

let FirstUser = new Utente (50, 15)
console.log('FirstUser:')
console.log('-----------')
FirstUser.getRicarica(25)
FirstUser.getChiamata(30)
console.log(`Il tuo ceredito residuo è di:  € ${FirstUser.getNumero404()}`)
console.log(`Hai effettuato ${FirstUser.getNumeroChiamate()} chiamate`)
FirstUser.getAzzeraChiamate()
console.log(`Chiamate azzerate = ${FirstUser.getNumeroChiamate()}`)

let SecondUser = new Utente (25, 60)
console.log('SecondUser:')
console.log('-----------')
SecondUser.getRicarica(15)
SecondUser.getChiamata(35)
console.log(`Il tuo ceredito residuo è di:  € ${SecondUser.getNumero404()}`)
console.log(`Hai effettuato ${SecondUser.getNumeroChiamate()} chiamate`)
SecondUser.getAzzeraChiamate()
console.log(`Chiamate azzerate = ${SecondUser.getNumeroChiamate()}`)

let ThirdUser = new Utente (50, 15)
console.log('ThirdUser:')
console.log('-----------')
ThirdUser.getRicarica(15)
ThirdUser.getChiamata(35)
console.log(`Il tuo ceredito residuo è di:  € ${ThirdUser.getNumero404()}`)
console.log(`Hai effettuato ${ThirdUser.getNumeroChiamate()} chiamate`)
ThirdUser.getAzzeraChiamate()
console.log(`Chiamate azzerate = ${ThirdUser.getNumeroChiamate()}`)*/
