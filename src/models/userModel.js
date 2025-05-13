const { v4: uuidv4 } = require('uuid');
let users = [];

function createUser({ name, email }) {
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  return newUser;
}

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find(user => user.id === id);
}

function updateUser(id, data) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
}

function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

function clearUsers() {
  users = [];
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  clearUsers
};
