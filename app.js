var express=require('express'),
compression = require('compression'),
path=require('path'),
bodyParser=require('body-parser'),
http = require('http');

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

var app = express();
var server = http.createServer(app);

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use public folder
app.use(express.static('public', options))
app.use('/', express.static('app', options));

server.listen(3000, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  });

app.get('*', function(req, res) {
  res.writeHead(302, {
    'Location': '/'
  });
  //res.redirect('your/404/path.html');
  res.end();
});


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


