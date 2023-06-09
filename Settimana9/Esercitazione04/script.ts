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
    return (this.prezzoivainclusa * this.saldo) / 100;
  }

  getAcquistoCapo(): number {
    return this.prezzoivainclusa - this.getsaldoCapo();
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
    data.forEach((element: any) => {
      let nuovoCapo: any = new ClothesShop(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );
      console.log(nuovoCapo);
      console.log("Sconto applicato:" + " " + "€" + nuovoCapo.getsaldoCapo());
      console.log(
        "Costo capo scontato:" + " " + "€" + nuovoCapo.getAcquistoCapo()
      );
    });
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData();
