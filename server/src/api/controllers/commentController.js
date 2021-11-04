const asyncHandler = require('express-async-handler');
const Comment = require('../models/Comment');

const errMsgs = {
  notFound: 'Comment not found.',
};

/**
 * @desc    Create a new comment
 * @route   POST api/comments
 * @access  Public
 */
const createComment = asyncHandler(async (req, res) => {
  res.json({ msg: 'Comment created' });
});

/**
 * @desc    Get all comments
 * @route   GET api/comments
 * @access  Private
 */
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.query();
  res.json(comments);
});

/**
 * @desc    Get comment by ID
 * @route   GET api/comments/:id
 * @access  Private
 */
const getCommentById = asyncHandler(async (req, res) => {
  const comment = await Comment.query().findById(req.params.id);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update comment by ID
 * @route   PUT api/comments/:id
 * @access  Private
 */
const updateCommentById = asyncHandler(async (req, res) => {
  const { id, owner_id, ticket_id, parent_id, description } = req.body;

  const comment = await Comment.query().findById(id);

  if (comment) {
    const updatedComment = await Comment.query().patchAndFetchById(id, {
      owner_id: owner_id || comment.owner_id,
      ticket_id: ticket_id || comment.ticket_id,
      parent_id: parent_id || comment.parent_id,
      description: description || comment.description,
    });

    res.json(updatedComment);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete comment by ID
 * @route   DELETE api/comments/:id
 * @access  Private
 */
const deleteCommentById = asyncHandler(async (req, res) => {
  const comment = await Comment.query().findById(req.params.id);

  if (comment) {
    await Comment.query().deleteById(req.params.id);
    res.json({ msg: 'Comment removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  createComment,
  getComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
};
