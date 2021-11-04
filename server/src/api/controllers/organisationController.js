const asyncHandler = require('express-async-handler');
const Organisation = require('../models/Organisation');

const errMsgs = {
  notFound: 'Organisation not found.',
};

/**
 * @desc    Create a new organisation
 * @route   POST api/organisations
 * @access  Public
 */
const createOrganisation = asyncHandler(async (req, res) => {
  res.json({ msg: 'Organisation created' });
});

/**
 * @desc    Get all organisations
 * @route   GET api/organisations
 * @access  Private
 */
const getOrganisations = asyncHandler(async (req, res) => {
  const organisations = await Organisation.query();
  res.json(organisations);
});

/**
 * @desc    Get organisation by ID
 * @route   GET api/organisations/:id
 * @access  Private
 */
const getOrganisationById = asyncHandler(async (req, res) => {
  const organisation = await Organisation.query().findById(req.params.id);

  if (organisation) {
    res.json(organisation);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update organisation by ID
 * @route   PUT api/organisations/:id
 * @access  Private
 */
const updateOrganisationById = asyncHandler(async (req, res) => {
  const { id, owner_id, name, description } = req.body;

  const organisation = await Organisation.query().findById(id);

  if (organisation) {
    const updatedOrganisation = await Organisation.query().patchAndFetchById(
      id,
      {
        owner_id: owner_id || organisation.owner_id,
        name: name || organisation.name,
        description: description || organisation.description,
      }
    );

    res.json(updatedOrganisation);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete organisation by ID
 * @route   DELETE api/organisations/:id
 * @access  Private
 */
const deleteOrganisationById = asyncHandler(async (req, res) => {
  const organisation = await Organisation.query().findById(req.params.id);

  if (organisation) {
    await Organisation.query().deleteById(req.params.id);
    res.json({ msg: 'Organisation removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  createOrganisation,
  getOrganisations,
  getOrganisationById,
  updateOrganisationById,
  deleteOrganisationById,
};
