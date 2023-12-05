import React, { useEffect, useState } from 'react';
import '../App.css';
import image from '../images';
import axios from 'axios';
import { Header, MenuAside } from '../App';

function AccoutProfile() {
  return (
    <div className="container-full">
      <MenuAside></MenuAside>
      <div className="container">
        <Header></Header>
        <main className="main-seja-membro">
          <div className="content-seja-membro">
            <h1>Seja membro e adquira oportunidades incríveis:</h1>
            <div className="membro-vantagens">
              <span>
                1. Veja peças antecipadamente: Postagens aparecerão antes para
                você.
              </span>
              <span>2. Poste mais peças.</span>
              <span>3. Suporte nos finais de semana.</span>
            </div>
            <h2>
              Adquirindo esse recurso por apenas R$4.99 você aproveita muito
              mais nossas ferramentas Troca Fashion!
            </h2>
            <button onClick={BtnMembro}>Se inscreva aqui</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AccoutProfile;

function BtnMembro(event) {
  event.preventDefault();
  window.location.href = '/user/account/membro/';
}
