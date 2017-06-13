var express = require('express');

//Added the comment

var server = express();

 server.use(express.static(__dirname + '/public'));

 server.listen(3000);

 console.log('server is running 3000');

//end the code