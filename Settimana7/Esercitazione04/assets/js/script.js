async function fetchFoto() {
  try {
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=cane",
      {
        headers: {
          Authorization:
            "ghWRaw37hRdQkAQ0EW30oXzGIeEUEdqfr08seRwkTx9xu13zgArkvDWn",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! staus: ${response.status}`);
    }

    const foto = await response.json();
    console.log(foto);
    const arrayId = [];
    const id = await foto["photos"].forEach((e) =>
    arrayId.push(e["id"])
  );

    const array = [];
    const image = await foto["photos"].forEach((e) =>
      array.push(e["src"]["original"])
    );

    const riga = document.getElementById("carte");
    const bottone = document.getElementById("bott");

    bottone.addEventListener("click", (event) => {
      event.preventDefault();
      for (let i of array) {
        for(let j of arrayId){
        riga.innerHTML += ` <div class="col-md-4 elimina">
            <div class="card mb-4 shadow-sm h-100">
            <img src="${i}" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary cancella">
                     hide
                    </button>
                  </div>
                  <small class="text-muted">${j}</small>
                </div>
              </div>
            </div>
          </div>`;}
      }
    });
  } catch (error) {
    console.log("Errore fetch dei dati", error.message);
  }
}

fetchFoto();


async function fetchFoto2() {
    try {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=gatto",
        {
          headers: {
            Authorization:
              "ghWRaw37hRdQkAQ0EW30oXzGIeEUEdqfr08seRwkTx9xu13zgArkvDWn",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! staus: ${response.status}`);
      }
  
      const foto = await response.json();
      console.log(foto);
      const arrayId = [];
    const id = await foto["photos"].forEach((e) =>
    arrayId.push(e["id"])
  );

      
  
      const array = [];
      const image = await foto["photos"].forEach((e) =>
        array.push(e["src"]["original"])
      );
      console.log(array);
      const riga = document.getElementById("carte");
      const btnSecondario = document.getElementById('bott2')

  
     btnSecondario.addEventListener("click", (event) => {
        event.preventDefault();
        for (let i of array) {
            for(let j of arrayId){
            riga.innerHTML += ` <div class="col-md-4 elimina">
                <div class="card mb-4 shadow-sm h-100">
                <img src="${i}" class="card-img-top" alt="image">
                  <div class="card-body">
                    <h5 class="card-title">Lorem Ipsum</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary cancella">
                         hide
                        </button>
                      </div>
                      <small class="text-muted">${j}</small>
                    </div>
                  </div>
                </div>
              </div>`;}
          }
      });
    } catch (error) {
      console.log("Errore fetch dei dati", error.message);
    }
  }

  fetchFoto2()

  const riga = document.getElementById("carte");

  riga.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancella")) {
      const rimuovi = event.target.closest(".elimina");
      rimuovi.remove();
    }
  });
