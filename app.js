const app = require('http');

app.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<H1>Hello World!</H1>');
  
}).listen(process.env.PORT);


//let express=require('express'),
//path=require('path'),
//bodyParser=require('body-parser');
//creatign an express app 

//let app =express();


// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())

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

app.use(express.static('public', options))




app.use('/', express.static('app', options));

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log('my app is listening at http://%s:%s', host, port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  
});

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});
app.get('*', function(req, res) {
  res.writeHead(302, {
    'Location': '/'
  });
  //res.redirect('your/404/path.html');
  res.end();
});
