var fs = require("fs");
var readStream = fs.createReadStream('sample.txt','utf8');
var data="";
readStream.on('data',function(ch){
    data += ch;
})
readStream.on('end',function(ch){
    console.log(data);
    console.log("----end-----");
})
