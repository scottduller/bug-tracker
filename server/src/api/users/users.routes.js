const express = require('express');

const router = express.Router();

const {
  loginUser,
  registerUser,
  getUsers,
  getUserById,
  getUsersOrganisations,
  getUsersOrganisationsById,
  updateUserById,
  deleteUserById,
  getLoggedInUser,
} = require('./users.controllers');

const { protect } = require('../../middleware/authHandler');

router.route('/').post(registerUser).get(protect, getLoggedInUser);

router
  .route('/:id')
  .get(protect, getUserById)
  .put(protect, updateUserById)
  .delete(protect, deleteUserById);

router.route('/:id/organisations').get(protect, getUsersOrganisationsById);

router.route('/all').get(protect, getUsers);

router.route('/organisations').get(protect, getUsersOrganisations);

router.route('/login').post(loginUser);

module.exports = router;
