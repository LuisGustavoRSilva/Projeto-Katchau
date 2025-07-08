# 💻 Katchau - E-commerce de Informática

Sistema de e-commerce focado em vendas de produtos de informática: periféricos, jogos e consoles.

---

## 📊 Estrutura do Banco de Dados (MySQL)

O banco de dados do sistema é relacional e modelado em MySQL. Abaixo está a descrição de todas as tabelas, seus campos e relacionamentos.

---

### 🧑‍💻 Tabela: `cliente`

| Campo            | Tipo       | Descrição                         |
|------------------|------------|-----------------------------------|
| `id_cliente`     | INT (PK)   | Identificador único do cliente    |
| `nome`           | VARCHAR    | Nome completo do cliente          |
| `cpf`            | CHAR(11)   | CPF                               |
| `email`          | VARCHAR    | Email do cliente                  |
| `telefone`       | VARCHAR    | Telefone                          |
| `data_nascimento`| DATE       | Data de nascimento                |
| `senha`          | VARCHAR    | Senha (criptografada)             |
| `id_endereco`    | INT (FK)   | Endereço do cliente               |

---

### 🏠 Tabela: `endereco`

| Campo            | Tipo       | Descrição                         |
|------------------|------------|-----------------------------------|
| `id_endereco`    | INT (PK)   | Identificador do endereço         |
| `tipo_logradouro`| VARCHAR    | Rua, Avenida etc.                 |
| `logradouro`     | VARCHAR    | Nome da rua                       |
| `numero`         | VARCHAR    | Número da residência              |
| `complemento`    | VARCHAR    | Apto, bloco, etc                  |
| `cep`            | CHAR(8)    | Código postal                     |
| `bairro`         | VARCHAR    | Bairro                            |
| `cidade`         | VARCHAR    | Cidade                            |
| `uf`             | CHAR(2)    | Estado                            |

---

### 📦 Tabela: `estoque`

| Campo            | Tipo       | Descrição                         |
|------------------|------------|-----------------------------------|
| `id_produto`     | INT (FK)   | Produto vinculado                 |
| `quantidade`     | INT        | Quantidade disponível             |
| `data_aquisicao` | DATE       | Data de entrada                   |
| `marca`          | VARCHAR    | Marca do produto                  |
| `nome_produto`   | VARCHAR    | Nome no estoque                   |
| `tipo_produto`   | ENUM       | periférico, jogo, console         |

---

### 👨‍💼 Tabela: `funcionario`

| Campo            | Tipo       | Descrição                         |
|------------------|------------|-----------------------------------|
| `id_funcionario` | INT (PK)   | Identificador do funcionário      |
| `nome`           | VARCHAR    | Nome completo                     |
| `cpf`            | CHAR(11)   | CPF                               |
| `email`          | VARCHAR    | Email corporativo                 |
| `telefone`       | VARCHAR    | Telefone                          |
| `id_endereco`    | INT (FK)   | Endereço                          |
| `cargo`          | VARCHAR    | Cargo do funcionário              |
| `salario`        | DECIMAL    | Salário                           |

---

### 🛒 Tabela: `venda`

| Campo         | Tipo       | Descrição                          |
|---------------|------------|------------------------------------|
| `id_venda`    | INT (PK)   | Identificador da venda            |
| `id_cliente`  | INT (FK)   | Cliente que realizou a compra     |
| `data_hora`   | DATETIME   | Data e hora da venda              |

---

### 📂 Tabela: `produto`

| Campo         | Tipo       | Descrição                          |
|---------------|------------|------------------------------------|
| `id_produto`  | INT (PK)   | Identificador do produto           |
| `nome`        | VARCHAR    | Nome do produto                    |
| `descricao`   | TEXT       | Descrição detalhada                |
| `preco`       | DECIMAL    | Preço                              |
| `foto1`       | VARCHAR    | Caminho da imagem 1                |
| `foto2`       | VARCHAR    | Caminho da imagem 2                |
| `foto3`       | VARCHAR    | Caminho da imagem 3                |

---

### 📦 Tabela: `itens_vendidos`

| Campo         | Tipo       | Descrição                          |
|---------------|------------|------------------------------------|
| `id_venda`    | INT (FK)   | Venda à qual pertence              |
| `id_produto`  | INT (FK)   | Produto vendido                    |
| `quantidade`  | INT        | Quantidade                         |

---

### 💳 Tabela: `pagamentos`

| Campo         | Tipo       | Descrição                          |
|---------------|------------|------------------------------------|
| `id_venda`    | INT (FK)   | Venda relacionada                  |
| `total_pagar` | DECIMAL    | Valor total da venda               |

---

## 🔁 Relacionamentos

- `cliente.id_endereco` → `endereco.id_endereco`
- `funcionario.id_endereco` → `endereco.id_endereco`
- `estoque.id_produto` → `produto.id_produto`
- `venda.id_cliente` → `cliente.id_cliente`
- `itens_vendidos.id_venda` → `venda.id_venda`
- `itens_vendidos.id_produto` → `produto.id_produto`
- `pagamentos.id_venda` → `venda.id_venda`

---

## 🧰 Script SQL para Criação

```sql
CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    tipo_logradouro VARCHAR(50),
    logradouro VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    cep CHAR(8),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf CHAR(2)
);

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf CHAR(11),
    email VARCHAR(100),
    telefone VARCHAR(20),
    data_nascimento DATE,
    senha VARCHAR(255),
    id_endereco INT,
    FOREIGN KEY (id_endereco) REFERENCES endereco(id_endereco)
);

CREATE TABLE funcionario (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf CHAR(11),
    email VARCHAR(100),
    telefone VARCHAR(20),
    id_endereco INT,
    cargo VARCHAR(50),
    salario DECIMAL(10,2),
    FOREIGN KEY (id_endereco) REFERENCES endereco(id_endereco)
);

CREATE TABLE produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2),
    foto1 VARCHAR(255),
    foto2 VARCHAR(255),
    foto3 VARCHAR(255)
);

CREATE TABLE estoque (
    id_produto INT,
    quantidade INT,
    data_aquisicao DATE,
    marca VARCHAR(50),
    nome_produto VARCHAR(100),
    tipo_produto ENUM('periférico', 'jogo', 'console'),
    PRIMARY KEY (id_produto),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

CREATE TABLE venda (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_hora DATETIME,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE itens_vendidos (
    id_venda INT,
    id_produto INT,
    quantidade INT,
    PRIMARY KEY (id_venda, id_produto),
    FOREIGN KEY (id_venda) REFERENCES venda(id_venda),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

CREATE TABLE pagamentos (
    id_venda INT PRIMARY KEY,
    total_pagar DECIMAL(10,2),
    FOREIGN KEY (id_venda) REFERENCES venda(id_venda)
);
## 🗺️ Diagrama ER (Entidade-Relacionamento)

Abaixo, o diagrama entidade-relacionamento que representa o modelo lógico do banco de dados:

!["diagrama banco de dados"]("katchau-diag.png")
