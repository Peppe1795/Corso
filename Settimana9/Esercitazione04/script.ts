class ClothesShop {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _prezzoivainclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
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

  getsaldoCapo(): number {
    return ((this.prezzoivainclusa * this.saldo) / 100);
  }

  getAcquistoCapo(): number {
    return (this.prezzoivainclusa - this.getsaldoCapo());
  }
}

async function fetchData(): Promise<any> {
  try {
    const response: any = await fetch("./Abbigliamento.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: any = await response.json();
    console.log("Data fetched", data);
    let nuovoCapo: any = new ClothesShop(
      data[0].id,
      data[0].codprod,
      data[0].collezione,
      data[0].capo,
      data[0].modello,
      data[0].quantita,
      data[0].colore,
      data[0].prezzoivaesclusa,
      data[0].prezzoivainclusa,
      data[0].disponibile,
      data[0].saldo
    );

    console.log(nuovoCapo);
    console.log('Sconto applicato:'+ ' ' + '€' + nuovoCapo.getsaldoCapo());
    console.log('Costo capo scontato:'+ ' ' + '€' + nuovoCapo.getAcquistoCapo());

    let nuovoCapo2: any = new ClothesShop(
        data[1].id,
        data[1].codprod,
        data[1].collezione,
        data[1].capo,
        data[1].modello,
        data[1].quantita,
        data[1].colore,
        data[1].prezzoivaesclusa,
        data[1].prezzoivainclusa,
        data[1].disponibile,
        data[1].saldo
      );
  
      console.log(nuovoCapo2);
      console.log('Sconto applicato:'+ ' ' + '€' + nuovoCapo2.getsaldoCapo());
      console.log('Costo capo scontato:'+ ' ' + '€' + nuovoCapo2.getAcquistoCapo());

      let nuovoCapo3: any = new ClothesShop(
        data[2].id,
        data[2].codprod,
        data[2].collezione,
        data[2].capo,
        data[2].modello,
        data[2].quantita,
        data[2].colore,
        data[2].prezzoivaesclusa,
        data[2].prezzoivainclusa,
        data[2].disponibile,
        data[2].saldo
      );
  
      console.log(nuovoCapo3);
      console.log('Sconto applicato:'+ ' ' + '€' + nuovoCapo3.getsaldoCapo());
      console.log('Costo capo scontato:'+ ' ' + '€' + nuovoCapo3.getAcquistoCapo());

      let nuovoCapo4: any = new ClothesShop(
        data[3].id,
        data[3].codprod,
        data[3].collezione,
        data[3].capo,
        data[3].modello,
        data[3].quantita,
        data[3].colore,
        data[3].prezzoivaesclusa,
        data[3].prezzoivainclusa,
        data[3].disponibile,
        data[3].saldo
      );
  
      console.log(nuovoCapo4);
      console.log('Sconto applicato:'+ ' ' + '€' + nuovoCapo4.getsaldoCapo());
      console.log('Costo capo scontato:'+ ' ' + '€' + nuovoCapo4.getAcquistoCapo());

      let nuovoCapo5: any = new ClothesShop(
        data[4].id,
        data[4].codprod,
        data[4].collezione,
        data[4].capo,
        data[4].modello,
        data[4].quantita,
        data[4].colore,
        data[4].prezzoivaesclusa,
        data[4].prezzoivainclusa,
        data[4].disponibile,
        data[4].saldo
      );
  
      console.log(nuovoCapo5);
      console.log('Sconto applicato:'+ ' ' + '€' + nuovoCapo5.getsaldoCapo());
      console.log('Costo capo scontato:'+ ' ' + '€' + nuovoCapo5.getAcquistoCapo());
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData();
