// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require("multer"), upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// all post request come from form in this case
app.post("/", upload.single("myfile"), function (request, response) {
  if (!request.file) {
    response.send("<p>No file choosen! Go <a href='/'>BACK</a>!</p>");
  } else {
    var size = {size: request.file.size};
    response.send(size);
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
