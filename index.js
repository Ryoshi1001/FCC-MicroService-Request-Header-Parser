// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});



//FCC Answer: Header Parser Microservice code, using req.ip for ipaddress, req.headers['accept-language'] for client computer preferred language, and req.headers['user-agent'] for client software then sending response with information complete. (Can also use navigator.languages for language req.headers['accept-language'] is preferred if correct)

app.get("/api/whoami", (req, res) => {
  const ip = req.ip; 
  const browserLanguage = req.headers['accept-language']
  // const browserLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language; 
  const software = req.headers['user-agent']
  console.log(ip)
  res.json({
    ipaddress: ip, 
    language: browserLanguage, 
    software: software
  })
})




// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
