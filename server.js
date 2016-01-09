var express = require('express');
var app = express();
var PORT = 3001;

var middleware = require('./middleware');



// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
  console.log('Express server is listening on port: ' + PORT);
});
