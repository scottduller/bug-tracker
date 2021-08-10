const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
	res.sendFile(
		path.resolve(__dirname, '../client/build', 'index.html')
	);
});

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
