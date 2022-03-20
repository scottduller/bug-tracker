const express = require('express');

const router = express.Router();

const {
  createComment,
  getComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} = require('./comments.controllers');

const { protect } = require('../../middleware/authHandler');

router.route('/').post(createComment).get(getComments);

router
  .route('/:id')
  .get(protect, getCommentById)
  .put(protect, updateCommentById)
  .delete(protect, deleteCommentById);

module.exports = router;
