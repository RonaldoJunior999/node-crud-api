const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para listar todos os usuários
router.get('/', userController.index);

// Rota para criar um novo usuário
router.post('/', userController.createUser); // Modificado para criarUser

// Rota para exibir um usuário específico
router.get('/:id', userController.show);

// Rota para atualizar um usuário específico
router.put('/:id', userController.update);

// Rota para deletar um usuário específico
router.delete('/:id', userController.deleteUser); // Modificado para deleteUser

module.exports = router;
