//Create Server
const app = require('express')();
const http = require('http').createServer(app);

app.get ( '/' , function ( req, res ) { 
    console.log(req.url);
    res.sendFile (__dirname + '/index.html' );
  });
  
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });