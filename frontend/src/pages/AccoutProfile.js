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
          <div className="content">
            <a href="/cadastrar/produto">Cadastrar produto</a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AccoutProfile;
