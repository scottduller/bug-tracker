const express = require('express');

const router = express.Router();

const {
  createOrganisation,
  getOrganisations,
  getOrganisationById,
  updateOrganisationById,
  deleteOrganisationById,
} = require('./organisations.controllers');

const { protect } = require('../../middleware/authHandler');

router
  .route('/')
  .post(protect, createOrganisation)
  .get(protect, getOrganisations);

router
  .route('/:id')
  .get(protect, getOrganisationById)
  .put(protect, updateOrganisationById)
  .delete(protect, deleteOrganisationById);

module.exports = router;
