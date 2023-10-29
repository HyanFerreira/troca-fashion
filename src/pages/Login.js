import React, { useEffect } from 'react';
import '../App.css';
import image from '../images';

function validFormLogin() {
  document
    .getElementById('form-login')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      let user = document.getElementById('email-login').value;
      let password = document.getElementById('password-login').value;

      if (user === 'admin@admin' && password === 'admin') {
        window.location.href = '/';
      } else if (user === '' && password === '') {
        document.getElementById('massage-error').innerHTML =
          'Por favor, preencha todos os campos!';
      } else {
        document.getElementById('massage-error').innerHTML =
          'Usuário ou senha incorreto!';
      }
    });
}

function Login() {
  useEffect(() => {
    let btnARegister = document.querySelector('.register-a');
    let btnALogin = document.querySelector('.login-a');
    let registerContainer = document.querySelector('.register-container');
    let loginContainer = document.querySelector('.login-container');

    btnARegister.addEventListener('click', () => {
      registerContainer.style.transform = 'translateX(0)';
      registerContainer.style.opacity = '1';
      loginContainer.style.opacity = '0';
      loginContainer.style.transform = 'translateX(-100%)';
    });

    btnALogin.addEventListener('click', () => {
      registerContainer.style.transform = 'translateX(100%)';
      registerContainer.style.opacity = '0';
      loginContainer.style.opacity = '1';
      loginContainer.style.transform = 'translateX(0)';
    });

    document
      .getElementById('button-login')
      .addEventListener('click', validFormLogin);
  }, []);

  return (
    <main className="main-login">
      <div className="logo">
        <img src={image.logo2} alt="" />
      </div>
      <div className="login-container">
        <div className="login-content">
          <div className="login-tittle">
            <h1>Login</h1>
          </div>
          <div className="login-form-container">
            <form action="#" id="form-login">
              <div className="label-input">
                <label>EMAIL</label>
                <input type="text" id="email-login" />
              </div>
              <div className="label-input">
                <label>SENHA</label>
                <input type="password" id="password-login" />
              </div>
              <div className="button-login-class">
                <button type="submit" id="button-login">
                  Login
                </button>
              </div>
              <div id="massage-error"></div>
              <div className="login-register">
                <div className="register">
                  Não possui uma conta?{' '}
                  <a className="register-a" href="#">
                    Cadastrar.
                  </a>
                </div>
                <div id="remember-password">
                  Esqueceu a senha? <a href="#">Click Aqui.</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="register-container">
        <div className="register-content">
          <div className="register-tittle">
            <h1>Crie sua conta</h1>
          </div>
          <div className="register-form-container">
            <form action="#" id="form-register">
              <div className="label-input">
                <label>NOME</label>
                <input type="text" id="text-name" />
              </div>
              <div className="label-input">
                <label>EMAIL</label>
                <input type="text" id="email-register" />
              </div>
              <div className="label-input">
                <label>SENHA</label>
                <input type="password" id="password-register" />
              </div>
              <div className="label-input">
                <label>DATA DE NASCIMENTO</label>
                <input type="date" id="date" />
              </div>
              <div className="button-register-class">
                <button type="submit" id="button-register">
                  Cadastrar
                </button>
              </div>
              <div id="massage-error"></div>
              <div className="login-register lr2">
                <div className="login">
                  Já possui uma conta?{' '}
                  <a className="login-a" href="#">
                    Faça login.
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
