var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj={
        name:'zhangsan',
        age:15
    };
    res.end(JSON.stringify(obj));
    res.on('finish',function(){
        console.log('finished')
    });
}).listen(8008);