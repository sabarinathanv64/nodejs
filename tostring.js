var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
  console.log(buf[i]);
}

console.log( buf.toString( ));       
console.log( buf.toString("ascii",0,5));   
console.log( buf.toString('utf8',5,10));    
