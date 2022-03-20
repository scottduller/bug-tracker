const express = require('express');

const users = require('./users/users.routes');
const organisations = require('./organisations/organisations.routes');
const projects = require('./projects/projects.routes');
const tickets = require('./statuses/statuses.routes');
const statuses = require('./tickets/tickets.routes');
const comments = require('./comments/comments.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '🐛 Bug Tracker API v1 🐛',
  });
});

router.use('/users', users);
router.use('/organisations', organisations);
router.use('/projects', projects);
router.use('/tickets', tickets);
router.use('/statuses', statuses);
router.use('/comments', comments);

module.exports = router;
