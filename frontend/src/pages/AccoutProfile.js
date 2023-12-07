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
        <main className="main-account-profile">
          <div className="content-profile">
            <div className="profile-image">
              <img src={image.profile48} alt="" />
            </div>
            <div className="profile-info">
              <strong>
                <span>admin@admin.com</span>
              </strong>
              <ul>
                <li>
                  <a href="">Mudar Foto de Perfil</a>
                </li>
                <li>
                  <a href="">Redefinir Email</a>
                </li>
                <li>
                  <a href="">Mudar Senha</a>
                </li>
                <li>
                  <a href="/login">Sair</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-links">
            <nav>
              <ul>
                <li>
                  <a href="/cadastrar/produto">Cadastrar produto</a>
                </li>
                <li>
                  <a href="">Meus Produtos</a>
                </li>
                <li>
                  <a href="">Histórico de Negociações</a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AccoutProfile;
