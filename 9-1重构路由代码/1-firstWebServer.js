var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    res.end('你好，中国');
    res.on('finish',function(){
        console.log('It has finished');
    });
}).listen(8888);