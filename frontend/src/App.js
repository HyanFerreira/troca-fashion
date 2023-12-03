import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import image from './images';

const baseURL = 'http://localhost:7000/produto';

function navigationHamburguer(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  const hamburguer = document.querySelector('.hamburguer');
  const aside = document.querySelector('.aside-menu');
  const container = document.querySelector('.container');

  hamburguer.classList.toggle('active');
  aside.classList.toggle('active');
  container.classList.toggle('active');
}

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className="container-full">
      <aside className="aside-menu">
        <div className="aside-profile">
          <div className="profile-img">
            <a href="/login">
              <img src={image.profile48} alt="" />
            </a>
          </div>
          <div className="profile-user">
            <span>hello@trocafashion.com</span>
          </div>
        </div>
        <div className="aside-links">
          <ul className="aside-ul-links">
            <li>
              <a href="#">Seja membro</a>
            </li>
            <li>
              <a href="#">Meus pedidos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <details>
              <summary>Política</summary>
              <div className="details-spans">
                <span>Política de envio</span>
                <span>Política de devolução</span>
                <span>Política de privacidade e cookies</span>
              </div>
            </details>
          </ul>
        </div>
      </aside>

      <div className="container">
        <header className="header-index">
          <div className="menu-top">
            <div className="logo-index">
              <a href="/">
                <img src={image.logo2} alt="" />
              </a>
            </div>
            <div className="icons-index">
              <li>
                <a href="/login">
                  <img className="icon" src={image.profile} alt=""></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src={image.favorite} alt=""></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="icon" src={image.buyCart} alt=""></img>
                </a>
              </li>
            </div>
          </div>

          <nav className="nav-links">
            <ul className="ul-links">
              <div className="hamburguer" onClick={navigationHamburguer}>
                <span className="bar"></span>
                <span className="bar bar-arrow"></span>
                <span className="bar"></span>
              </div>
              <li>
                <a href="#">Feminino</a>
              </li>
              <li>
                <a href="#">Masculino</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Marcas</a>
              </li>
              <li>
                <a href="#">Calçados</a>
              </li>
              <li>
                <a href="#">Acessórios</a>
              </li>
            </ul>
            <div className="nav-search">
              <div className="search">
                <img src={image.search} alt="" />
              </div>
              <input type="search" placeholder="Busque por palavras chave" />
            </div>
          </nav>
        </header>

        <main className="main-index">
          <div className="main-content">
            {produtos.map((produto) => (
              <div key={produto.id} className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="cor-tamanho">
                  <span className="cor">{produto.cor}</span>
                  <span className="tamanho">tam. {produto.tamanho}</span>
                </div>
                <div className="nome-descricao">
                  <h1>{produto.nome}</h1>
                  <span>{produto.descricao}</span>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
