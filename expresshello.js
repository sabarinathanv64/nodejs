try{
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
   debugger;
});

app.listen(3000);
}
catch(e){
    console.log(e.message);
}
