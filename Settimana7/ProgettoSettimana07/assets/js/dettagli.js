window.onload = () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg0Yjg4Zjc0MDAwMTQyODc0NDAiLCJpYXQiOjE2ODM4ODEyODEsImV4cCI6MTY4NTA5MDg4MX0.ciNR5O7V6nmIMWzSaT4nQ1q99MLZnhlQG2PwigmkHcg",
    },
  })
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero dei PRODOTTI");
      }
    })
    .then((data) => {
      console.log("PRODUCT IN DB", data);
      data.forEach((product) => {
        let card = ` <div class="col-6 col-md-4 col-lg-3 mb-3 w-100">
        <h2 class='text-center m-4'> Dettagli prodotto selezionati </h2>
          <ul class="list-group bg-warning">
          <li class="list-group-item bg-warning">Nome prodotto: ${product.name}</li>
          <li class="list-group-item bg-warning">ID prodotto: ${product._id}</li>
          <li class="list-group-item bg-warning">Descrizione prodotto: ${product.description}</li>
          <li class="list-group-item bg-warning">Brand: ${product.brand}</li>
          <li class="list-group-item bg-warning">Prezzo prodotto: &#8364 ${product.price}</li>
          <li class="list-group-item bg-warning">Url immagine: ${product.imageUrl}</li>
        </ul>
          </div>`;

        let riga = document.getElementById("details-container");
        riga.innerHTML = card;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

