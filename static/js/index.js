let btnLateral = document.querySelector(".btn");
let aside = document.querySelector(".aside-menu");
let container = document.querySelector(".container");

btnLateral.addEventListener('click', () => {
    aside.style.marginLeft = "-500px";
    container.style.marginLeft = "0";
});