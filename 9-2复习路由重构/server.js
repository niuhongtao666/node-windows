var http=require('http');
var url=require('url');
var queryString=require('querystring');
var startServer=function(route,handle){
    http.createServer((req,res)=>{
        var pathname=url.parse(req.url).pathname;
        // var data='';
        var data=[];
        req.on('error',function(err){
            if(err) throw err;
        }).on('data',function(chunk){
            // data+=chunk;
            data.push(chunk);
            console.log(1234);
            console.log(data);
        }).on('end',function(){
            if(req.method === 'POST'){
                console.log(data.length)
                if(data.length>10){
                    req.connection.destroy();//当数据量太大的时候就不进行请求
                }
                data=Buffer.concat(data).toString();
                data = decodeURIComponent(data);
                route(pathname,handle,res,queryString.parse(data));
            }else{
                var params=url.parse(req.url,true).query;
                route(pathname,handle,res,params);
            }
        });
    }).listen(8011);
console.log('服务启动');
};
module.exports.startServer=startServer;