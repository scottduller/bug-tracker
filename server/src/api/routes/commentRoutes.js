const express = require('express');

const router = express.Router();

const {
  createComment,
  getComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} = require('../controllers/commentController');

router.route('/').post(createComment).get(getComments);

router
  .route('/:id')
  .get(getCommentById)
  .put(updateCommentById)
  .delete(deleteCommentById);

module.exports = router;
