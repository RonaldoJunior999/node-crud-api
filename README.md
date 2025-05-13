# Node.js CRUD API

Este projeto é uma API REST simples em Node.js que permite realizar operações de **CRUD de usuários** (Create, Read, Update, Delete), com testes unitários utilizando Jest e Supertest.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Body-Parser
- UUID
- Jest
- Supertest
- Nodemon (desenvolvimento)

## 📁 Estrutura do projeto

```
node-crud-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── tests/
│   └── user.test.js
├── server.js
├── package.json
└── README.md
```

## ⚙️ Como usar

1. **Clone ou extraia o projeto**:
   ```
   git clone <URL-do-repo> ou extraia o ZIP
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd node-crud-api
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

   O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

## 📮 Endpoints disponíveis

| Método | Rota         | Descrição             |
|--------|--------------|-----------------------|
| GET    | /users       | Lista todos os usuários |
| POST   | /users       | Cria um novo usuário   |
| GET    | /users/:id   | Retorna um usuário por ID |
| PUT    | /users/:id   | Atualiza um usuário    |
| DELETE | /users/:id   | Remove um usuário      |

### Exemplo de corpo para criação:
```json
{
  "name": "Maria",
  "email": "maria@email.com"
}
```

## ✅ Executando os testes

Para rodar os testes automatizados:
```bash
npm test
```

Os testes cobrem todos os endpoints principais e casos de erro.

---

Desenvolvido com fins educacionais para alunos de Análise e Desenvolvimento de Sistemas. 📘
