
# 🖥️ Katchau – E-commerce de Informática

Projeto de loja virtual especializada em produtos de informática como computadores, hardware, periféricos, jogos e consoles.

---

## 📌 Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Front-End](#front-end)
- [Back-End](#back-end)
- [Banco de Dados](#banco-de-dados)
- [Princípios SOLID](#princípios-solid)
- [Instalação e Execução](#instalação-e-execução)
- [API Endpoints](#api-endpoints)
- [Licença](#licença)

---

## 🚀 Tecnologias Utilizadas

### 🔹 Front-End
- HTML5  
- CSS3  
- JavaScript  
- Bootstrap 5

### 🔹 Back-End
- Node.js  
- TypeScript  
- JavaScript (ES6+)  
- Express.js  
- Bcrypt  
- MySQL

### 🔹 Banco de Dados
- MySQL Server  
- Diagrama ER modelado com foco em integridade e escalabilidade

---

## 🎨 Front-End

O Front-End foi desenvolvido com foco em responsividade, acessibilidade e performance.

### Estrutura de Páginas
```
📁 index.html
├─ hardware.html
├─ computadores.html
├─ consoles.html
├─ perifericos.html
└─ keys.html
```

### Características:
- Navegação intuitiva com menu responsivo
- Layout adaptado a dispositivos móveis
- Componentes reutilizáveis com Bootstrap

---

## ⚙️ Back-End

A API RESTful do projeto foi construída com Node.js e TypeScript seguindo os princípios **SOLID** para garantir escalabilidade e manutenção limpa.

### Estrutura:
```
📁 src/
├─ controllers/
├─ services/
├─ models/
├─ routes/
├─ middlewares/
└─ database/
```

### Funcionalidades:
- Cadastro e login de clientes com senhas criptografadas (bcrypt)
- Gerenciamento de produtos, estoque e pedidos
- Conexão segura com MySQL
- Serialização em JSON para troca de dados

---

## 🗃️ Banco de Dados

Utilizamos MySQL estruturado conforme o modelo relacional com as seguintes tabelas:

- `clientes`: nome, email, senha (hash), CPF, telefone
- `enderecos`: logradouro, número, cidade, UF
- `produtos`: nome, descrição, preço, categoria
- `estoque`: quantidade disponível
- `pedidos`: cliente_id, data, status

### 💡 Exemplo de Conexão

```ts
import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'katchau'
});
```

---

## 🧱 Princípios SOLID Aplicados

- **S** – Separação de responsabilidades (Ex: controllers vs services)
- **O** – Código extensível sem alterar lógica existente
- **L** – Componentes substituíveis por abstrações
- **I** – Interfaces específicas para cada entidade
- **D** – Inversão de dependência entre camadas

---

## ⚙️ Instalação e Execução

### Pré-requisitos:
- Node.js
- MySQL
- Git

### Passos:

```bash
# Clonar o projeto
git clone https://github.com/seu-usuario/katchau.git

# Instalar dependências
cd katchau/backend
npm install

# Rodar servidor
npm run dev

# Front-End: basta abrir o index.html em navegador
```

---

## 🔗 API Endpoints (Exemplos)

### Clientes
| Método | Rota                  | Ação                    |
|--------|-----------------------|-------------------------|
| POST   | `/api/v1/clientes`    | Cadastro de cliente     |
| GET    | `/api/v1/clientes`    | Listar todos            |

### Produtos
| Método | Rota                  | Ação                    |
|--------|-----------------------|-------------------------|
| GET    | `/api/v1/produtos`    | Listar produtos         |
| POST   | `/api/v1/produtos`    | Cadastrar produto       |

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## ✨ Desenvolvido por

**Equipe da Katchau**

