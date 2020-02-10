var buf1 = new Buffer('Tutorial ');
var buf2 = new Buffer('to Learning node js');
var buf3 = Buffer.concat([buf1,buf2]);

console.log("buffer3 content: " + buf3.toString());
console.log("buffer length:  "+buf3.length);
