const carsWrapper = document.querySelector(".plan-content");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Função para rolar o card suavemente para a esquerda.
function scrollLeft() {
  console.log("prev");
  carsWrapper.scrollBy({
    left: -400,
    behavior: "smooth",
  });
}
// Função para rolar o card suavemente para a direita.
function scrollRight() {
  console.log("next");
  carsWrapper.scrollBy({
    left: 400,
    behavior: "smooth",
  });
}
prev.addEventListener("click", scrollLeft);
next.addEventListener("click", scrollRight);

const btnMobile = document.getElementById("btn");
const nav = document.querySelector(".nav");
const register = document.querySelector(".register");
const navItens = document.querySelectorAll(".nav-itens, register-itens");

function toggleMenu(event) {
  btnMobile.classList.toggle("active");
  nav.classList.toggle("active");
  register.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);

navItens.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

// função do carregamento preguiçoso das imagens
const lazyLoading = () => {
  // Buscar todas as imagens atravez da class ".lazy-load"
  var lazyImages = document.querySelectorAll(".lazy-load");
  lazyImages.forEach((img) => {
    //Verifica se o topo da imagem está dentro da jenela visível do navegador.
    if (
      img.getBoundingClientRect().top < window.innerHeight &&
      img.getAttribute("data-src")
    ) {
      // Atribui a fonte da img data-drc ao atributo src para carregá-la.
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
      img.classList.add("loading");
    }
  });
};

// Função vai execultada quando todos os recursos da página forem carregados.
window.onload = () => {
  lazyLoading();
};
// Função vai execultada quando ocorre o evento de rolagem da página
window.onscroll = () => {
  lazyLoading();
};
