const express = require('express');

const router = express.Router();

const {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
} = require('../controllers/projectController');

router.route('/').post(createProject).get(getProjects);

router
  .route('/:id')
  .get(getProjectById)
  .put(updateProjectById)
  .delete(deleteProjectById);

module.exports = router;
