const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});