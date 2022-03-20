const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const api = require('./api');

require('./config/db');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🐛 Bug Tracker API Home 🐛',
  });
});

app.use('/api', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
