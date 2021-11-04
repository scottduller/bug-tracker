const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

const errMsgs = {
  notFound: 'Project not found.',
};

/**
 * @desc    Create a new project
 * @route   POST api/projects
 * @access  Public
 */
const createProject = asyncHandler(async (req, res) => {
  res.json({ msg: 'Project created' });
});

/**
 * @desc    Get all projects
 * @route   GET api/projects
 * @access  Private
 */
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.query();
  res.json(projects);
});

/**
 * @desc    Get project by ID
 * @route   GET api/projects/:id
 * @access  Private
 */
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.query().findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update project by ID
 * @route   PUT api/projects/:id
 * @access  Private
 */
const updateProjectById = asyncHandler(async (req, res) => {
  const { id, owner_id, organisation_id, name, description } = req.body;

  const project = await Project.query().findById(id);

  if (project) {
    const updatedProject = await Project.query().patchAndFetchById(id, {
      owner_id: owner_id || project.owner_id,
      organisation_id: organisation_id || project.organisation_id,
      name: name || project.name,
      description: description || project.description,
    });

    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete project by ID
 * @route   DELETE api/projects/:id
 * @access  Private
 */
const deleteProjectById = asyncHandler(async (req, res) => {
  const project = await Project.query().findById(req.params.id);

  if (project) {
    await Project.query().deleteById(req.params.id);
    res.json({ msg: 'Project removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
