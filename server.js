var express = require('express'); // calling json package
var path = require('path');
var app = express();

//middle ware
// before running any route run this which allow this file to be served back
app.use(express.static('public'));

// get route
// when you go the my server at / this function will run
app.get('/', function(req, res) {
  console.log('in get route'); // route is path of website and this will log onto the terminal
  // .sendFile =
  // path =
  //
  res.sendFile(path.join(__dirname, 'public/index.html'));//response to send file
});

// in terminal type in --- node server.js --- and in browser type in http://localhost:3001
app.listen(3001, function() { // app.listen is a function
  console.log('listening on port 3001'); // log onto the terminal to test function
});

// log to test on terminal
// console.log('Testing terminal');
