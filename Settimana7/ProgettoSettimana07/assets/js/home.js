      window.onload = () => {
        setTimeout(() => {
         const url = 'https://striveschool-api.herokuapp.com/api/product/'
     fetch(url,  {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjg0Yjg4Zjc0MDAwMTQyODc0NDAiLCJpYXQiOjE2ODM4ODEyODEsImV4cCI6MTY4NTA5MDg4MX0.ciNR5O7V6nmIMWzSaT4nQ1q99MLZnhlQG2PwigmkHcg",
            },
            
          })
          .then((res) => {
            console.log('RES', res)
            if (res.ok) {
              return res.json() 
            } else {
              throw new Error('Errore nel recupero dei PRODOTTI')
            }
          })
          .then((data) => {
            console.log('PRODUCT IN DB', data)
            data.forEach((product) => {
              let card =` <div class="col-6 col-md-4 col-lg-3">
              <div class="card h-100">
                  <img src=${product.imageUrl} class="card-img-top" alt="immagine prodotto">
                  <div class="card-body">
                    <h5 class="card-title">Nome Prodotto: ${product.name}</h5>
                    <p class="card-text">Descrizione: ${product.description}</p>
                    <p class="card-text">Nome brand: ${product.brand}</p>
                    <p class="card-text">Prezzo: &#8364 ${product.price}</p>
                    <a href="../../back-office.html?productId=${product._id}" class="btn btn-warning mb-2">MODIFICA</a>
                    <a href="../../dettagli.html?productId=${product._id}" class="btn btn-info">SCOPRI DI PIU</a>
                  </div>
                </div>
              </div>`
            
              let riga = document.getElementById('products-container')
              riga.innerHTML += card
            })
          })
          .catch((error) => {
            console.log(error)
          }) 
        }, 4500);
        
      }