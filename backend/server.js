const express = require('express');
const app = express();

app.use(express.static('build'));

app.listen(3000, () => {
	console.log('We are ready to go on port 3000 captain!')
});