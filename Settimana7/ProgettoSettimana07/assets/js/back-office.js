const url = "https://striveschool-api.herokuapp.com/api/product/";

let addressBarContent = new URLSearchParams(window.location.search);

let productId = addressBarContent.get("productId");

console.log("PRODUCTID", productId);

if (productId) {
  document.getElementsByTagName("h2")[0].innerText =
    "Backoffice page - Modifica Prodotto";
  document.getElementById("create-button").innerText = "MODIFICA PRODOTTO";
  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    if (confirm("Sei sicuro di voler procedere il prodotto verrà eliminato ") == true) {
    fetch(url + productId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg0Yjg4Zjc0MDAwMTQyODc0NDAiLCJpYXQiOjE2ODM4ODEyODEsImV4cCI6MTY4NTA5MDg4MX0.ciNR5O7V6nmIMWzSaT4nQ1q99MLZnhlQG2PwigmkHcg",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("eliminazione completata con successo");
          location.assign("../../home.html");
        } else {
          throw new Error("Problema nell'eliminazione del prodotto");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });

  fetch(url + productId)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto");
      }
    })
    .then((product) => {
      console.log(
        "DATI DEL SINGOLO PRODOTTO, RECUPERATO TRAMITE GET SINGOLA",
        product
      );

      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("brand").value = product.brand;
      document.getElementById("immagine").value = product.immagine;
      document.getElementById("price").value = product.price;
    })
    .catch((error) => {
      console.log(error);
    });
} else {
}

const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let nameProduct = document.getElementById("name");
  let descriptionProduct = document.getElementById("description");
  let brandProduct = document.getElementById("brand");
  let imgProduct = document.getElementById("immagine");
  let priceProduct = document.getElementById("price");

  let newProduct = {
    name: nameProduct.value,
    description: descriptionProduct.value,
    brand: brandProduct.value,
    imageUrl: imgProduct.value,
    price: priceProduct.value,
  };
  console.log("PRODOTTO pronto da inviare alle API", newProduct);

  fetch(productId ? url + productId : url, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg0Yjg4Zjc0MDAwMTQyODc0NDAiLCJpYXQiOjE2ODM4ODEyODEsImV4cCI6MTY4NTA5MDg4MX0.ciNR5O7V6nmIMWzSaT4nQ1q99MLZnhlQG2PwigmkHcg",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("RESPONSE DELLA CHIAMATA POST", res);
      if (res.ok) {
        alert(productId ? "PRODOTTO MODIFICATO!" : "PRODOTTO CREATO!");
        location.assign("../../home.html");
      } else {
        alert("ERRORE NEL SALVATAGGIO");
        throw new Error("ERRORE NEL SALVATAGGIO");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const btnReset = document.getElementById("reset-button");
btnReset.addEventListener("click", () => {
  if (confirm("Sei sicuro di voler procedere con il reset ") == true) {
    productForm.reset();
  }
});
