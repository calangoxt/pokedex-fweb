let imgPK = document.querySelector("#fotoPK");
let formPK = document.querySelector("#formPK");
let inputPK = document.querySelector("#inputPK");

let idPK = document.querySelector("#idPK");
let nomePK = document.querySelector("#nomePK");

let tipo1 = document.querySelector("#tipo1PK");
let tipo2 = document.querySelector("#tipo2PK");

let habiPK = document.querySelector("#habiPK");
let pesoPK = document.querySelector("#pesoPK");
let alturaPK = document.querySelector("#alturaPK");

let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");

let numeroPokedex = 1;

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIresponse.json();
  return data
}
const showPokemon = async (pokemon) => {
  const dataPokemon = await fetchPokemon(pokemon);
  const audio = new Audio(dataPokemon.cries.latest);
  audio.play();
shiny(dataPokemon)

  idPK.innerHTML = `<br>ID:${dataPokemon.id}`;
  nomePK.innerHTML = dataPokemon.name;
  tipo1.innerHTML = ` type:${dataPokemon.types[0].type.name}`;
  if (
    dataPokemon.types[1] != undefined
  ) {
    tipo2.innerHTML = dataPokemon.types[1].type.name;
  }
  else {
    tipo2.innerHTML = ""
  }
  habiPK.innerHTML = dataPokemon.abilities[0].ability.name;
  pesoPK.innerHTML = `Peso:${dataPokemon.weight / 10}kg`;
  alturaPK.innerHTML = `Altura:${dataPokemon.height / 10}m`;
}
formPK.addEventListener("submit", (event) => {
  event.preventDefault();
  showPokemon(inputPK.value.toLowerCase());
})
btnVoltar.addEventListener("click", (e) => {
  if (numeroPokedex > 1) {
    numeroPokedex--;
  }
  showPokemon(numeroPokedex);
})
btnProximo.addEventListener("click", (e) => {
  if (numeroPokedex < 1025) {
    numeroPokedex++;
  }
  showPokemon(numeroPokedex);
})
function shiny(dataPokemon){
  let shiny= Math.floor(Math.random() * 10)
  if(shiny==0){
    imgPK.src = dataPokemon.sprites.front_shiny;


  }else{
    imgPK.src = dataPokemon.sprites.front_default;
  }
}
let musicaFundo = true;

function musicSistema() {
    const music = document.getElementById('background-music');
    const musicIcon = document.getElementById('music-icon');

    // -- Altera entre icones quando clicar para parar e retomar. -->
    if (musicaFundo) {
        music.pause();
        musicaFundo = false;
        musicIcon.src = './img/sem-som.png';
    } else {
        music.play();
        musicaFundo = true;
        musicIcon.src = 'img/alto-falante.png'; 
    }
}
showPokemon(numeroPokedex);
const music = document.getElementById('background-music');
music.play()