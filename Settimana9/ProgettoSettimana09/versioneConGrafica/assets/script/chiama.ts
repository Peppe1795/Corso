const rigaDettagli = document.getElementById(
  "details-container"
) as HTMLDivElement;
const rigaCall = document.getElementById("rigaCall") as HTMLDivElement;
const rigaCall2 = document.getElementById("rigaCall2") as HTMLDivElement;
const stacca = document.getElementById("stacca") as HTMLButtonElement;
const chiama = document.getElementById("chiama") as HTMLButtonElement;
const numeroDaChiamare = document.getElementById(
  "numeroDaChiamare"
) as HTMLInputElement;
const url: any = "https://6471d9566a9370d5a41abe55.mockapi.io/api/tel/tasks/";
const trovaAccount: any = new URLSearchParams(window.location.search);
const id: any = trovaAccount.get("tasksId");

async function fetchData3(): Promise<any> {
  try {
    const response: any = await fetch(url + id);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: any = await response.json();
    console.log("Data fetched", data);

    rigaDettagli.innerHTML = ` <div class="col-6 col-md-4 col-lg-3 mb-3 w-100">
        <h2 class='text-center m-4'> Dettagli Account selezionato </h2>
          <ul class="list-group bg-warning">
          <li class="list-group-item bg-warning">Nome: ${data.name}</li>
          <li class="list-group-item bg-warning">cognome: ${data.surname}</li>
          <li class="list-group-item bg-warning">Numero di telefono: ${data.telephone}</li>
          <li class="list-group-item bg-warning">Credito residuo:&#8364  ${data.telephoneCredit}</li>
        </ul>
          </div>`;

    let numero: number = 0;
    let numeroChiamate2 = 1;
    let intervallo: any;

    chiama.addEventListener("click", (e: any) => {
      e.preventDefault();
      clearInterval(intervallo);
      rigaCall2.innerHTML = "";
      intervallo = setInterval((): number => {
        rigaCall.innerHTML = `Durata chiamata: ${numero}`;
        numero++;
        return numero;
      }, 1000);
    });

    

    stacca.addEventListener("submit", (event: any) => {
      let numerochiamatoValue = numeroDaChiamare.value;
      event.preventDefault();
      clearInterval(intervallo);
      rigaCall2.innerHTML = `
      <h2>Resconto Chiamata</h2>
      <ul>
            <li>Il tuo numero: ${data.telephone}</li>
            <li>Numero chiamato: ${numerochiamatoValue}</li>  
            <li>Credito Utente: &#8364 ${data.telephoneCredit}</li>
            <li>Durata chiamata: ${numero}</li>
            <li>Costo chiamata: &#8364 ${numero * 0.2} </li>
            <li>Numero chiamate: ${numeroChiamate2++}</li>
            <li>Credito residuo dopo chiamata: &#8364 ${
              data.telephoneCredit - numero * 0.2
            } </li>
          </ul>`;

      numero = 0;
      return numero;
    });

    return data.telephoneCredit - numero * 0.2;
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData3();

async function cancella(): Promise<any> {
  try {
    const response2: any = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response2.ok) {
      throw new Error(`HTTP error! Status: ${response2.status}`);
    }

    const data2: any = await response2.json();
    console.log("Delete completed", data2);
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}



const btnCancella = document.getElementById("cancella") as HTMLButtonElement;

btnCancella.addEventListener("click", () => {
  if (confirm("Sei sicuro di voler cancellare questo account?") == true) {
    cancella();
  }
});

