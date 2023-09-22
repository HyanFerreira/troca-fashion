let btnLateral = document.querySelector(".btn");
let aside = document.querySelector(".aside-menu");
let container = document.querySelector(".container");

btnLateral.addEventListener('click', () => {
    aside.classList.toggle("active");
    container.classList.toggle("active");
});