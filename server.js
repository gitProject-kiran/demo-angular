var express = require('express');

var server = express();

 server.use(express.static(__dirname + '/public'));

 server.listen(3000);

 console.log('server is running 3000');