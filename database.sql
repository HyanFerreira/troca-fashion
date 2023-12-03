-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS troca_fashion;

-- Selecionar o banco de dados
USE troca_fashion;

-- Criar a tabela usuarios
CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Criar a tabela produtos
CREATE TABLE IF NOT EXISTS produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(255),
    cor VARCHAR(50),
    tamanho VARCHAR(10),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Inserir usuário Admin
INSERT INTO usuario (nome, email, senha) VALUES ('Admin', 'admin@admin.com', 'admin');

-- Obter o ID do usuário recém-inserido
SET @id_usuario = LAST_INSERT_ID();

-- Inserir 8 produtos para o usuário Admin
INSERT INTO produto (id_usuario, nome, descricao, categoria, cor, tamanho)
VALUES
    (@id_usuario, 'Blusa Vermelha 1', 'Descrição da blusa vermelha 1', 'Blusa', 'Vermelha', 'M'),
    (@id_usuario, 'Calça Jeans 1', 'Descrição da calça jeans 1', 'Calça', 'Jeans', '32'),
    (@id_usuario, 'Blusa Vermelha 2', 'Descrição da blusa vermelha 2', 'Blusa', 'Vermelha', 'S'),
    (@id_usuario, 'Calça Jeans 2', 'Descrição da calça jeans 2', 'Calça', 'Jeans', '34'),
    (@id_usuario, 'Blusa Vermelha 3', 'Descrição da blusa vermelha 3', 'Blusa', 'Vermelha', 'L'),
    (@id_usuario, 'Calça Jeans 3', 'Descrição da calça jeans 3', 'Calça', 'Jeans', '36'),
    (@id_usuario, 'Blusa Vermelha 4', 'Descrição da blusa vermelha 4', 'Blusa', 'Vermelha', 'XL'),
    (@id_usuario, 'Calça Jeans 4', 'Descrição da calça jeans 4', 'Calça', 'Jeans', '38');
