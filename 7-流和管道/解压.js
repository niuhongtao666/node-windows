var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('readme.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('gunzip.txt'));