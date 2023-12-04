const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 7000;
const cors = require('cors');

// Habilitar o uso do middleware de CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// estabele conexão com o banco
const mysql = require('mysql2/promise');
const conection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  database: 'troca_fashion',
  user: 'root',
  password: '',
});

// seleciona todos os usuários do database
const getlAllUsuarios = async () => {
  const [query] = await conection.execute('select * from usuario');
  return query;
};

// retorna a lista de usuários
app.get('/usuario', async (req, res) => {
  const resultado = await getlAllUsuarios();

  if (resultado.length === 0) {
    return res
      .status(200)
      .json({ mensagem: 'Nenhum usuário encontrado no database!' });
  }
  return res.status(200).json(resultado);
});

// retorna o usuário pelo seu id
app.get('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const [query] = await conection.execute(
    'select * from usuario where id = ?',
    [id],
  );
  if (query.length === 0)
    return res.status(400).json({ mensagem: 'Nenhum usuário encontrado!' });
  return res.status(200).json(query);
});

// retorna o usuário pelo nome
app.get('/usuario/buscarnome/:nome', async (req, res) => {
  const { nome } = req.params;
  const [query] = await conection.execute(
    'select * from usuario where nome like ?',
    ['%' + nome + '%'],
  );
  if (query.length === 0)
    return res
      .status(400)
      .json({ mensagem: 'Nenhum usuário encontrado por este nome!' });
  return res.status(200).json(query);
});

// retorna o usuário pelo email
app.get('/usuario/buscaremail/:email', async (req, res) => {
  const { email } = req.params;
  const [query] = await conection.execute(
    'select * from usuario where email like ?',
    ['%' + email + '%'],
  );
  if (query.length === 0)
    return res
      .status(400)
      .json({ mensagem: 'Nenhum usuário encontrado por este email!' });
  return res.status(200).json(query);
});

// insere um novo usuário no database
app.post('/usuario', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const [query] = await conection.execute(
      'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha],
    );
    return res
      .status(201)
      .json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
});

// atualiza os dados do usuário no database
app.put('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const [query] = await conection.execute(
    'update usuario set nome = ?, email = ?, senha = ? where id = ?',
    [nome, email, senha, id],
  );
  return res.json(query);
});

//  deleta o usuário do database
app.delete('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const [query] = await conection.execute('delete from usuario where id = ?', [
    id,
  ]);
  return res.json(query);
});

// CRUD dos produtos:

// seleciona todos os produtos do database
const getAllProdutos = async () => {
  const [query] = await conection.execute('select * from produto');
  return query;
};

// retorna a lista de produtos
app.get('/produto', async (req, res) => {
  const resultado = await getAllProdutos();

  if (resultado.length === 0) {
    return res
      .status(200)
      .json({ mensagem: 'Nenhum produto encontrado no database!' });
  }
  return res.status(200).json(resultado);
});

// retorna o produto pelo seu id
app.get('/produto/:id', async (req, res) => {
  const { id } = req.params;
  const [query] = await conection.execute(
    'select * from produto where id = ?',
    [id],
  );
  if (query.length === 0)
    return res.status(400).json({ mensagem: 'Nenhum produto encontrado!' });
  return res.status(200).json(query);
});

// insere um novo produto no database
app.post('/produto', async (req, res) => {
  try {
    const { nome, descricao, categoria, cor, tamanho } = req.body;
    const [query] = await conection.execute(
      'INSERT INTO produto (nome, descricao, categoria, cor, tamanho) VALUES (?, ?, ?, ?, ?)',
      [nome, descricao, categoria, cor, tamanho],
    );
    return res
      .status(201)
      .json({ mensagem: 'Produto cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
});

// atualiza os dados do produto no database
app.put('/produto/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, categoria, cor, tamanho } = req.body;
  const [query] = await conection.execute(
    'update produto set nome = ?, descricao = ?, categoria = ?, cor = ?, tamanho = ? where id = ?',
    [nome, descricao, categoria, cor, tamanho, id],
  );
  return res.json(query);
});

// deleta o produto do database
app.delete('/produto/:id', async (req, res) => {
  const { id } = req.params;
  const [query] = await conection.execute('delete from produto where id = ?', [
    id,
  ]);
  return res.json(query);
});
