var nunjucks = require('nunjucks');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;

nunjucks.configure('views', {
	autoescapse: true,
	express: app
});

app.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Server is running on port ' + PORT);
});


