const { v4: uuidv4 } = require('uuid');
let users = require('../models/user');

// Criar usuário
const createUser = (req, res) => {
  const { name, email } = req.body;

  // Verificar se o e-mail já existe
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "E-mail já cadastrado!" });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
};

// Listar todos os usuários
const index = (req, res) => {
  return res.status(200).json(users);
};

// Mostrar um usuário específico
const show = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }
  return res.status(200).json(user);
};

// Atualizar um usuário
const update = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  return res.status(200).json(user);
};

// Deletar um usuário
const deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
};

module.exports = { createUser, index, show, update, deleteUser };
