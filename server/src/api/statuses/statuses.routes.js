const express = require('express');

const router = express.Router();

const {
  createStatus,
  getStatuses,
  getStatusById,
  updateStatusById,
  deleteStatusById,
} = require('./statuses.controllers');

const { protect } = require('../../middleware/authHandler');

router.route('/').post(protect, createStatus).get(protect, getStatuses);

router
  .route('/:id')
  .get(protect, getStatusById)
  .put(protect, updateStatusById)
  .delete(protect, deleteStatusById);

module.exports = router;
