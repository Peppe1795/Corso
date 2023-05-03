//funzione elimina card

var carte = document.querySelectorAll('.card');

const removeCards = () => {
   carte.forEach((item) => {
    item.innerHTML = ''
   })
}

//removeCards()



var bottone = document.getElementById('viaggi');
const viaggiAttvi = () => {
bottone.addEventListener('click', () => {
    alert(`Viaggi disponibili ${carte.length}`)
})
}

viaggiAttvi();