const bottone = document.querySelector(".cancella");
const url = "https://striveschool-api.herokuapp.com/books";
const riga = document.getElementById("riga1");
const lista = document.getElementById("lista");
const carrello = [];
window.onload = () => {
  fetch(url)
    .then((object) => object.json())
    .then((tutto) => {
      for (let i of tutto) {
        riga.innerHTML += ` <div class="col-12 col-md-6 col-lg-4 mb-3"><div class="card h-100 ">
        <img src="${i.img}" class="card-img-top" alt="image book">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <p class="card-text">${i.price}</p>
          <button type="button" class="btn btn-warning p-2 cancella">SCARTA</button>
          <button type="button" class="btn btn-warning p-2 aggiungi">AGGIUNGI AL CARELLO</button>
        </div>
      </div></div>`;

      }
    })
    .catch((error) => console.log(error));

  riga.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancella")) {
      const rimuovi = event.target.closest(".col-12");
      rimuovi.remove();
    }
  });

  riga.addEventListener("click", (event) => {
    if (event.target.classList.contains("aggiungi")) {
     carrello.push(i.title)
     a
    }
  });
};
