var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var result = buf1.compare(buf2);

if(result < 0) {
   console.log(buf1 +" comes before " + buf2);
} else if(result === 0) {
   console.log(buf1 +" is same as " + buf2);
} else {
   console.log(buf1 +" comes after " + buf2);
}
