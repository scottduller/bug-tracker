const express = require('express');

const router = express.Router();

const {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
} = require('./projects.controllers');

const { protect } = require('../../middleware/authHandler');

router.route('/').post(protect, createProject).get(protect, getProjects);

router
  .route('/:id')
  .get(protect, getProjectById)
  .put(protect, updateProjectById)
  .delete(protect, deleteProjectById);

module.exports = router;
