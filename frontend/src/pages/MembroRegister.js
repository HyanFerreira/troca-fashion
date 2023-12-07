import React, { useEffect, useState } from 'react';
import '../App.css';
import image from '../images';
import axios from 'axios';
import { Header, MenuAside } from '../App';

function MembroRegister() {
  return (
    <div className="container-full">
      <MenuAside></MenuAside>
      <div className="container">
        <Header></Header>
        <main className="main-membro-register">
          <div className="content-membro-register">
            <form className="form-cadastrar-produto">
              <h1>Inscrição de membro</h1>

              <div className="label-input">
                <label>Nome:</label>
                <input type="text" required />
              </div>

              <div className="label-input">
                <label>CPF:</label>
                <input type="text" required />
              </div>

              <div className="label-input">
                <label>Email:</label>
                <input type="text" required />
              </div>

              <div className="label-input">
                <label>Forma de pagamento:</label>
                <select className="input-select" required>
                  <option value="pix">Pix</option>
                  <option value="boleto">Boleto</option>
                  <option value="cartao">Cartão de Crédito</option>
                </select>
              </div>

              <button type="submit">Inscrever-se</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MembroRegister;
