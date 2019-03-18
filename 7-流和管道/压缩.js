var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('readme.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('readme.txt.gz'));