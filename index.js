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

const fs = require('fs');
  
let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python";
  
fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));
