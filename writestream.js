var fs = require("fs");
var readStream = fs.createReadStream('sample.txt','utf8');
var writeStream =fs.WriteStream('write.txt');
var data="";
readStream.on('data',function(ch){
    writeStream.write(ch);
})
readStream.on('end',function(ch){
    console.log("----end-----");
})
