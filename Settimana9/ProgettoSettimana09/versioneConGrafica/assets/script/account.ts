const rigaAccount = document.getElementById("rigaAccount") as HTMLDivElement;

async function fetchData2(): Promise<any> {
  const url: any = "https://6471d9566a9370d5a41abe55.mockapi.io/api/tel/tasks";
  try {
    const response: any = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: any = await response.json();
    console.log("Data fetched", data);
    for (let i: number = 0; i < data.length; i++) {
      rigaAccount.innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
<div class="card h-100 bg-trasparent">
  <img src="https://media.istockphoto.com/id/1391533553/it/foto/luce-lucida-sullicona-del-telefono-in-oro-3d-isolata-su-sfondo-bianco-texture-dorata-rendering.jpg?s=2048x2048&w=is&k=20&c=LAfByCv_KQA_UOfPB4m8SxrX_C3n6RFSy4QGjZrMLF0=" class="card-img-top" alt="logo tel">
  <div class="card-body">
    <h5 class="card-title">${data[i].name} ${data[i].surname}</h5>
    <p class="card-text">Numero di telefono: ${data[i].telephone}</p>
    <p class="card-text">Credito: ${data[i].telephoneCredit}</p>
    <a href="./chiama.html?tasksId=${data[i].id}" class="btn btn-success">UTILIZZA QUESTO ACCOUNT</a>
  </div>
</div>
</div>`;
    }
  } catch (error: any) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData2();


