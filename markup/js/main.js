const preloaderElement = document.createElement("div");
preloaderElement.className = "preloader";
document.body.appendChild(preloaderElement);

setTimeout(() => {
  preloaderElement.classList.add("fadeOut");
}, 1800);

const buscadorInput = document.querySelector(".buscador");
const botonInput = document.querySelector(".consultar")

buscadorInput.addEventListener("submit", (e) => {

});

botonInput.addEventListener("click", ()=>{
  
});