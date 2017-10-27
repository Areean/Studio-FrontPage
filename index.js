let express=require('express');

//creatign an express app 
var app =express();
app.listen(7000, function() {
  console.log('server is listenening on port 7000');
});

app.get('/', function( req, res ) {
  res.sendFile('index.html', { root: './'});
 // next();
});

app.get('*', function( req, res ) {
  res.send('Hello World!');
});

