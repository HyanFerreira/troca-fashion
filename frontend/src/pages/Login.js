import React, { useEffect } from 'react';
import '../App.css';
import image from '../images';

const baseURL = 'http://localhost:7000/usuario';

function Login() {
  useEffect(() => {
    const validFormLogin = async (event) => {
      event.preventDefault();

      let user = document.getElementById('email-login').value;
      let password = document.getElementById('password-login').value;

      const errorElement = document.getElementById('massage-error');
      errorElement.innerHTML = '';

      try {
        const response = await fetch(`${baseURL}/buscaremail/${user}`);
        const data = await response.json();

        if (response.ok && data.length > 0) {
          const userFromDB = data[0];
          if (userFromDB.senha === password) {
            window.location.href = '/';
          } else {
            errorElement.innerHTML = 'Senha incorreta!';
          }
        } else {
          errorElement.innerHTML = 'Usuário não encontrado!';
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        errorElement.innerHTML =
          'Erro na requisição. Tente novamente mais tarde.';
      }
    };

    const validFormRegister = async (event) => {
      event.preventDefault();

      let nome = document.getElementById('text-name').value;
      let email = document.getElementById('email-register').value;
      let senha = document.getElementById('password-register').value;

      const errorElement = document.getElementById('massage-error-register');
      errorElement.innerHTML = '';

      if (nome.length < 2) {
        errorElement.innerHTML = 'O nome deve ter no mínimo 2 caracteres!';
        return;
      }

      if (!validateEmail(email)) {
        errorElement.innerHTML = 'Digite um email válido!';
        return;
      }

      if (senha.length < 4) {
        errorElement.innerHTML = 'A senha deve ter no mínimo 4 caracteres!';
        return;
      }

      try {
        const response = await fetch(baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
          document.getElementById('text-name').value = '';
          document.getElementById('email-register').value = '';
          document.getElementById('password-register').value = '';
          console.log('Usuário cadastrado com sucesso!', data);
          return; // Adicione o return para evitar a execução adicional
        } else {
          errorElement.innerHTML = `Erro ao cadastrar usuário: ${data.message}`;
        }
      } catch (error) {
        errorElement.innerHTML =
          'Erro na requisição. Tente novamente mais tarde.';
      }
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

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
      .getElementById('button-register')
      .addEventListener('click', validFormRegister);
    document
      .getElementById('button-login')
      .addEventListener('click', validFormLogin);

    // Remova os ouvintes de evento quando o componente é desmontado
    return () => {
      document
        .getElementById('button-register')
        .removeEventListener('click', validFormRegister);
      document
        .getElementById('button-login')
        .removeEventListener('click', validFormLogin);
    };
  }, []); // Lista de dependências vazia garante que o useEffect é executado apenas uma vez

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
              <div className="button-register-class">
                <button type="submit" id="button-register">
                  Cadastrar
                </button>
              </div>
              <div id="massage-error-register"></div>
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
