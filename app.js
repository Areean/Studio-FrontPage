var express = require('express'),
var app = express();
var port = process.env.port || 3000;

//app.set('/', __dirname + '/public');
app.use('/images',express.static( 'public/images'));

app.get('/', function(req, res,next) {
  res.sendFile(path.join(__dirname + '/public/homepage.html'));

  });

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
})

// use public folder
//app.use(express.static('public'))
//app.use('/', express.static('app'));
//app.use(express.static(path.resolve('./public')));
//app.use(express.static(__dirname + 'public/'));

//app.use(express.static('public'));

/*
app.get('*', function(req, res) {
  res.writeHead(302, {
    'Location': '/'
  });
  //res.redirect('your/404/path.html');
  res.end();
});
*/
//process.env.PORT

/*
*
*
//app--with--http--request
const app = require('http');
app.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<H1>Hello World!</H1>');
  }).listen(process.env.PORT);
*/

/*
var express = require('express'),
path=require('path');
var app = express();



app.listen(process.env.PORT, function () {
  //console.log('Example app listening on port 3000!')
})

// use public folder
//app.use(express.static('public'))
//app.use('/', express.static('app'));



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/homepage.html'));
  });

app.get('*', function(req, res) {
  res.writeHead(302, {
    'Location': '/'
  });
  //res.redirect('your/404/path.html');
  res.end();
});


*/