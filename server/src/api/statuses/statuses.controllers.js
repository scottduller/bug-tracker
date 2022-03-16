const asyncHandler = require('express-async-handler');
const Status = require('./statuses.model');

const errMsgs = {
  notFound: 'Status not found.',
};

/**
 * @desc    Create a new status
 * @route   POST api/statuses
 * @access  Public
 */
const createStatus = asyncHandler(async (req, res) => {
  res.json({ msg: 'Status created' });
});

/**
 * @desc    Get all statuses
 * @route   GET api/statuses
 * @access  Private
 */
const getStatuses = asyncHandler(async (req, res) => {
  const statuses = await Status.query();
  res.json(statuses);
});

/**
 * @desc    Get status by ID
 * @route   GET api/statuses/:id
 * @access  Private
 */
const getStatusById = asyncHandler(async (req, res) => {
  const status = await Status.query().findById(req.params.id);

  if (status) {
    res.json(status);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update status by ID
 * @route   PUT api/statuses/:id
 * @access  Private
 */
const updateStatusById = asyncHandler(async (req, res) => {
  const { id, status, project_id, organisation_id } = req.body;

  const curStatus = await Status.query().findById(id);

  if (curStatus) {
    const updatedStatus = await Status.query().patchAndFetchById(id, {
      project_id: project_id || curStatus.project_id,
      organisation_id: organisation_id || curStatus.organisation_id,
      status: status || curStatus.status,
    });

    res.json(updatedStatus);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete status by ID
 * @route   DELETE api/statuses/:id
 * @access  Private
 */
const deleteStatusById = asyncHandler(async (req, res) => {
  const status = await Status.query().findById(req.params.id);

  if (status) {
    await Status.query().deleteById(req.params.id);
    res.json({ msg: 'Status removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  createStatus,
  getStatuses,
  getStatusById,
  updateStatusById,
  deleteStatusById,
};
