const express = require('express');

const router = express.Router();

const {
  createOrganisation,
  getOrganisations,
  getOrganisationById,
  updateOrganisationById,
  deleteOrganisationById,
} = require('../controllers/organisationController');

router.route('/').post(createOrganisation).get(getOrganisations);

router
  .route('/:id')
  .get(getOrganisationById)
  .put(updateOrganisationById)
  .delete(deleteOrganisationById);

module.exports = router;
