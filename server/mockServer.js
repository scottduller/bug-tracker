const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
require('colors');

const jsonServer = require('json-server');

const router = express.Router();
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const dataRouter = jsonServer.router('./server/data/db.json');

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const _dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(_dirname, '/client/build')));

	app.get('*', (req, res) =>
		res.sendFile(
			path.resolve(_dirname, 'client', 'build', 'index.html')
		)
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}

app.use(cors());

router.use('/', dataRouter);

app.use('/api', router);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.yellow.bold
	)
);
