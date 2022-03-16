const express = require('express');

const router = express.Router();

const {
  loginUser,
  registerUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('./users.controllers');

router.route('/').post(registerUser).get(getUsers);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router.route('/login').post(loginUser);

module.exports = router;
