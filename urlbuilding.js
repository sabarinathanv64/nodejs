var express = require('express');
var app = express();

app.get('/:id/:name', function(req, res){
   res.send('The id you specified is ' + req.params.id+"  "+ req.params.name);
});
app.listen(3000);
