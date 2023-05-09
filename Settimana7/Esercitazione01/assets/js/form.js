class Pet {
    constructor (_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;

    }

   
}
class Animali {
    constructor() {
this.arrayAnimali = [];

    }

    aggiumgiAnimali = (animale) => {
        this.arrayAnimali.push(animale);
    }
 
}

const aggiungiForm = document.getElementById('formAnimali');
const listanimali = document.getElementById('listaAnimali');
const animali = new Animali();
 aggiungiForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeAnimale = document.getElementById('nome').value;
    const nomeDelPropietario = document.getElementById('propietario').value;
    const specie = document.getElementById('specie').value;
    const razza = document.getElementById('razza').value;
    const pet = new Pet (nomeAnimale, nomeDelPropietario, specie, razza);
    animali.aggiumgiAnimali(pet);

    aggiornaListaAnimali();
    aggiungiForm.reset();
 });

 function aggiornaListaAnimali () {
    listanimali.innerHTML = '';

    for (const pet of animali.arrayAnimali) {
        const petDiv = document.createElement('div');
        petDiv.innerHTML = `<strong>Nome Animale:</strong> ${pet.petName}<br>
        <strong>Nome del propietario:</strong> ${pet.ownerName}<br>
        <strong>Specie:</strong> ${pet.species}<br>
        <strong>Razza:</strong> ${pet.breed}<br>`;
        
        listanimali.appendChild(petDiv);
    }
}
