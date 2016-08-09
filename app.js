var nunjucks = require('nunjucks');
var express = require('express');
var commonFuncs = require('./utilities/commons');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();
var PORT = process.env.PORT || 3001;

nunjucks.configure('views', {
	autoescapse: true,
	express: app
});

app.get('/', function (req, res) {
	res.render('index.html', { url: commonFuncs.getUrl(req) });
});

app.post('/get-file-size', upload.single('fileName'), function (req, res, next){
	res.send({ size: req.file.size });
	console.dir(req.file);
});

app.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Server is running on port ' + PORT);
});


