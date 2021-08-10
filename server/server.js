const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const path = require('path');

const app = express();

app.use(express.json());

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
