let btnARegister = document.querySelector('.register-a');
let btnALogin = document.querySelector('.login-a');
let registerContainer = document.querySelector('.register-container');
let loginContainer = document.querySelector('.login-container');

btnARegister.addEventListener('click', () => {
    registerContainer.style.opacity = "1";
    loginContainer.style.opacity = "0";
});

btnALogin.addEventListener('click', () => {
    loginContainer.style.opacity = "1";
    registerContainer.style.opacity = "0";
});