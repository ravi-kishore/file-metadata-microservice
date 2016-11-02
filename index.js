var express = require("express");
var multer = require("multer");
var path = require("path");

var upload = multer();

var app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/calculateSize', upload.single('file'), function (req, res, next) {
	res.send({"size": req.file.size});
});

app.listen(process.env.PORT || 4000);

