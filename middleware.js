try{
var express = require('express');
var app = express();
app.use('/things', function(req, res, next){
   console.log("A request for things receive " + Date.now());
   next();
});
app.get('/things', function(req, res){
   res.send('Things');
});

app.listen(3000);
}
catch(ee){
console.log(ee.message);}
