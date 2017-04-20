var express = require('express'); // calling json

var app = express();

// in terminal type in --- node server.js --- and in browser type in http://localhost:3001
app.listen(3001, function() { // app.listen is something
  console.log('listening on port 3001'); // log onto the terminal to test function
});
