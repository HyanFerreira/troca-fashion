import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import image from './images';

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
  useEffect(() => {
    const favorite_svg = document.querySelector('.favorite svg');
    let isFavorite = false;

    favorite_svg.addEventListener('click', () => {
      if (isFavorite) {
        favorite_svg.style.fill = 'transparent';
        isFavorite = false;
      } else {
        favorite_svg.style.fill = 'red';
        isFavorite = true;
      }
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
              <a href="#">Carteira</a>
            </li>
            <li>
              <a href="#">Cupons</a>
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
        <div className="hidden-models">
          <div className="models-trade">
            <div className="model-clothing">
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
              <div className="link-model-clothing">
                <div className="image-clothing">
                  <img src={image.ex1} alt="" />
                </div>
                <div className="category-favorite">
                  <div className="categorys">
                    <div className="category"></div>
                    <div className="category color2"></div>
                    <div className="category color3"></div>
                    <div className="category color4"></div>
                  </div>
                  <div className="favorite">
                    <svg
                      width="32"
                      height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10.2071C30 12.3722 29.1687 14.4517 27.6841 15.9901C24.2669 19.5322 20.9524 23.2258 17.4074 26.6396C16.5949 27.4107 15.3059 27.3826 14.5283 26.5766L4.31526 15.9901C1.22825 12.7901 1.22825 7.62412 4.31526 4.4242C7.43261 1.19283 12.5111 1.19283 15.6284 4.4242L15.9997 4.80899L16.3707 4.42442C17.8654 2.8743 19.901 2 22.0274 2C24.1539 2 26.1893 2.87422 27.6841 4.4242C29.1688 5.96263 30 8.04208 30 10.2071Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="area-button-trade">
                  <button className="button-trade">Trocar / Negociar</button>
                </div>
              </div>
            </div>
            <div className="hidden-model-clothing"></div>
          </div>
        </div>
        <main className="main-index">
          <div className="main-content"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
