//funzione elimina card

var carte = document.querySelectorAll('.card');

const removeCards = () => {
   carte.forEach((item) => {
    item.innerHTML = ''
   })
}
//commento la funzione poichè elimina tutte le card
//removeCards()

var selezione = document.getElementsByClassName('notifica');
var selezione2 = document.getElementsByClassName('notifica1');

const badgeHot = () => {
    for(let i = 0; i < selezione.length; i++) {
        selezione[i].classList.add('item');
    }
    for(let k = 0; k < selezione2.length; k++) {
        selezione2[k].classList.add('notify-badge');
    }
}

badgeHot();

var bottone = document.getElementById('viaggi');
const viaggiAttvi = () => {
bottone.addEventListener('click', () => {
    alert(`Viaggi disponibili ${carte.length}`)
})
}

viaggiAttvi();