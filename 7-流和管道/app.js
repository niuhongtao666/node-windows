var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname + "/readme12.txt");
var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt", {
    flags: "a",
});
//{'flags':'a'}内容追加
// myWriteStream.write('谢谢');
// myWriteStream.end();
// myWriteStream.on('finish',function(){
//      console.log('finished');
// });
// myReadStream.pipe(myWriteStream);
// var data='';
// myReadStream.setEncoding('utf-8');
myReadStream.on("data", function(chunk) {
    // console.log('new chunk received');
    console.log(chunk);
    // data+=chunk;
    // myWriteStream.write(chunk);
});
myReadStream.on("error", function(err) {
    console.log("error", err);
});
myReadStream.on("end", function() {
    // console.log(data);
});