const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.post('/incoming_mails', function(req, res) {
	const mail = req.body;
	console.log(mail.headers.received);
	console.log(mail.headers.to);
	console.log(mail.headers.cc);
	console.log(mail.headers.from);
	res.status(201).json({ headers: mail.headers });
});

app.listen(PORT, function() {
	console.log(`server started ${PORT}`);
});
