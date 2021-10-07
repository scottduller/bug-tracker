const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('colors');

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

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.yellow.bold
	)
);
