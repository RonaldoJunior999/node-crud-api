const userModel = require('../models/userModel');

exports.create = (req, res) => {
  const { name, email } = req.body;
  const user = userModel.createUser({ name, email });
  res.status(201).json(user);
};

exports.index = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

exports.show = (req, res) => {
  const user = userModel.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.update = (req, res) => {
  const user = userModel.updateUser(req.params.id, req.body);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.delete = (req, res) => {
  const success = userModel.deleteUser(req.params.id);
  if (!success) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};
