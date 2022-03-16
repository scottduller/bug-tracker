const express = require('express');

const router = express.Router();

const {
  createStatus,
  getStatuses,
  getStatusById,
  updateStatusById,
  deleteStatusById,
} = require('./statuses.controllers');

router.route('/').post(createStatus).get(getStatuses);

router
  .route('/:id')
  .get(getStatusById)
  .put(updateStatusById)
  .delete(deleteStatusById);

module.exports = router;
