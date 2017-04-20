var express = require('express'); // calling json package
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var songData = [
  {name: 'shake it off'},
  {name: 'what\'s going on'}
];

// middle ware that makes the files in the public folder visible and must come above my res
// before running any route run this which allow this file to be served back
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// get route
// when you go the my server at / this function will run app.use(express.static('public')); is already doing this function
// this function is nor working from what milli discovered b/c the
// app.get('/', function(req, res) {
//   console.log('in get route'); // route is path of website and this will log onto the terminal
//   // .sendFile =
//   // path =
//   // __dirname = build up whats call a full path
//   // res. = response from the server
//   res.sendFile(path.join(__dirname, 'public/index.html'));//response to send files in the public folder and sending whats in the index.html
// });

// req = request and res = response
app.get('/song', function(req, res) {
  console.log('in get song route');
  res.send(songData); // ***NOTE*** res. should always be the last code in the app.
});

app.post('/song', function(req, res) {
  console.log('in post route');
  console.log('req.body ->', req.body); //.req is just an object
  songData.push(req.body); //getting objects from songData and pushing it to the body
  res.sendStatus(200); //the 200 is just checking for error
});

// in terminal type in --- node server.js --- and in browser type in http://localhost:5000
app.listen(5000, function() { // app.listen is a function and tells server to listen on 5000
  console.log('listening on port 5000'); // log onto the terminal to test function
});

// log to test on terminal
// console.log('Testing terminal');

//local host is the AP adress of your computer
