// Pom
function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play;
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//enquanto
while (contador < listaDeTeclas.length) {
  listaDeTeclas[contador].onclick = tocaSomPom;

  contador = contador + 1;

  console.log(contador);
}

//para
for (let contador = 0; contador < listaDeTeclas.lenght: contador++) {

  const tecla = listaDeTeclas[contador];
  const intrumento = teclas.classList[1];
  const idAudio = '#som_${instrumento}'; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function () {
    tecla.classList.add('ativa');
  }

  tacla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

  
