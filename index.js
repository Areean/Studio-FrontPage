let express=require('express');

//creatign an express app 
var app =express();

app.get('*', function( req, res ) {
    res.send('Hello World!');
  });