var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    res.end('Hi ,my name is Tommy');
    res.on('finish',function(){
        console.log('finished');
    });
}).listen(8002);