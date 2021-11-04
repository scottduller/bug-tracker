const express = require('express');

const users = require('./routes/userRoutes');
const organisations = require('./routes/organisationRoutes');
const projects = require('./routes/projectRoutes');
const tickets = require('./routes/ticketRoutes');
const statuses = require('./routes/statusRoutes');
const comments = require('./routes/commentRoutes');

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
