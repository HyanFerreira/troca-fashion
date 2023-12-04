import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import image from '../images';
import { MenuAside, Header } from '../App';

function App() {
  return (
    <div className="container-full">
      <MenuAside></MenuAside>
      <div className="container">
        <Header></Header>
        <main className="main-cadastrar-produto">
          <div className="content-cadastrar-produto">
            <CadastrarProduto></CadastrarProduto>
          </div>
        </main>
      </div>
    </div>
  );
}

const CadastrarProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cor, setCor] = useState('');
  const [tamanho, setTamanho] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:7000/produto', {
        nome,
        descricao,
        categoria,
        cor,
        tamanho,
      });

      const create = document.querySelector('.create');
      create.innerHTML = 'Produto cadastrado com sucesso!';

      setNome('');
      setDescricao('');
      setCategoria('');
      setCor('');
      setTamanho('');
    } catch (error) {
      console.error('Erro ao cadastrar o produto!:', error);
      alert('Erro ao cadastrar o produto!');
    }
  };

  return (
    <div>
      <form className="form-cadastrar-produto" onSubmit={handleSubmit}>
        <h1>Cadastrar produto</h1>
        <div className="label-input">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="label-input">
          <label>Descrição:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="label-input">
          <label>Categoria:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="label-input">
          <label>Cor:</label>
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </div>

        <div className="label-input">
          <label>Tamanho:</label>
          <input
            type="text"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
            required
          />
        </div>

        <div className="create"></div>

        <button type="submit">Cadastrar produto</button>
      </form>
    </div>
  );
};

export default App;
