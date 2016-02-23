var express = require('express');
var app = express();

app.use(express.static('./public'));


var port = 8080;

app.listen(port);

console.log(`Listening on ${port}`);
