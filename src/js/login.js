let btnARegister = document.querySelector('.register-a');
let btnALogin = document.querySelector('.login-a');
let registerContainer = document.querySelector('.register-container');
let loginContainer = document.querySelector('.login-container');

btnARegister.addEventListener('click', () => {
    registerContainer.style.transform = "translateX(0)";
    registerContainer.style.opacity = "1";
    loginContainer.style.opacity = "0";
    loginContainer.style.transform = "translateX(-100%)";
});

btnALogin.addEventListener('click', () => {
    registerContainer.style.transform = "translateX(100%)";
    registerContainer.style.opacity = "0";
    loginContainer.style.opacity = "1";
    loginContainer.style.transform = "translateX(0)";
});

document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    if (user === "admin@admin" && password === "admin") {
        window.location.href = "index.html";
    } else if (user === "" && password === "") {
        document.getElementById("massage-error").innerHTML =
            "Por favor, preencha todos os campos!";
    } else {
        document.getElementById("massage-error").innerHTML =
            "Usuário ou senha incorreto!";
    }
});