const hamburguer = document.querySelector(".hamburguer");
let aside = document.querySelector(".aside-menu");
let container = document.querySelector(".container");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    aside.classList.toggle("active");
    container.classList.toggle("active");
});