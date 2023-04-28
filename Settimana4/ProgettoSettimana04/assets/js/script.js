window.onscroll = function () {
    scrollToChange();
};
var testa = document.getElementById("scrollo");
var pulsante = document.getElementById("bottone");

function scrollToChange() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    testa.classList.add("bianco");
    pulsante.classList.add("green");
  } else {
    testa.classList.remove("bianco");
    pulsante.classList.remove("green");
  }
}

var emme = document.querySelectorAll("g[stroke-linecap='butt']");

setInterval(() => {
let casuale = Math.round(Math.random() * (emme.length - 1));
emme[casuale].classList.toggle('sparizione');

},50);