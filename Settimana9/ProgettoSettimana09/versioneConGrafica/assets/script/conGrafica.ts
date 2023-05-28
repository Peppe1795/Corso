const numeroDachiamare = document.getElementById(
  "numeroDachiamare"
) as HTMLInputElement;
const nome = document.getElementById("nome") as HTMLInputElement;
const cognome = document.getElementById("cognome") as HTMLInputElement;
const numeroPersonale = document.getElementById(
  "numeroTelefono"
) as HTMLInputElement;
const ricarica = document.getElementById("ricarica") as HTMLInputElement;
const btn = document.getElementById("form") as HTMLButtonElement;
const riga = document.getElementById("riga") as HTMLDivElement;
const resetta = document.getElementById("resetta") as HTMLButtonElement;
const riga2 = document.getElementById("riga2") as HTMLDivElement;

interface Smartphone2 {
  name: string;
  surname: string;
  telephone: number;
  firstPhoneTopUp: number;
  telephoneCredit: number;
  numbersOfCalls: number;
  lastCallDuration: number;

  getRicarica(ricarica: number): void 
}
class Utente2 implements Smartphone2 {
  name: string;
  surname: string;
  telephone: number;
  firstPhoneTopUp: number;
  telephoneCredit: number;
  numbersOfCalls: number;
  lastCallDuration: number;
  constructor(
    _name: string,
    _surname: string,
    _telephone: number,
    _firstPhoneTopUp: number,
    _telephoneCredit: number,
    _numbersOfCalls: number,
    _lastCallDuration: number
  ) {
    this.name = _name;
    this.surname = _surname;
    this.telephone = _telephone;
    this.firstPhoneTopUp = _firstPhoneTopUp;
    this.telephoneCredit = _telephoneCredit;
    this.numbersOfCalls = _numbersOfCalls;
    this.lastCallDuration = _lastCallDuration;
  }
  
    getRicarica(ricarica: number): void {
      this.telephoneCredit += ricarica;
    }
  
}


btn.addEventListener("submit", (event) => {
  event.preventDefault();
 
fetchPost()

alert('Account creato')
});

async function fetchData(): Promise<any> {
  try {
    const response: any = await fetch(
      "https://6471d9566a9370d5a41abe55.mockapi.io/api/tel/tasks"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: any = await response.json();
    console.log("Data fetched", data);
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData();

async function fetchPost(): Promise<any> {
  try {
    const valoreNome: string = nome.value;
    const valoreCognome: string = cognome.value;
    const valoreRicarica: number = Number(ricarica.value);
  const valorenum1: number = Number(numeroPersonale.value);
    let FirstUser = new Utente2(valoreNome, valoreCognome, valorenum1, valoreRicarica, 0, 0, 0);
    FirstUser.getRicarica(valoreRicarica);
    const response2: any = await fetch(
      "https://6471d9566a9370d5a41abe55.mockapi.io/api/tel/tasks",
      {
        method: "POST",
        body: JSON.stringify(FirstUser),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response2.ok) {
      throw new Error(`HTTP error! Status: ${response2.status}`);
    }

    const data2: any = await response2.json();
    console.log("Data fetched", data2);
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

