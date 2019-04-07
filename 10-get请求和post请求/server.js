var http=require('http');
var url=require('url');
var queryString=require('querystring');
function startServer(handle,route){
    http.createServer((req,res)=>{
        var pathname=url.parse(req.url).pathname;
        // var params=url.parse(req.url,true).query;
        // console.log('参数是：'+params);
        // route(handle,pathname,res,params)
        var data=[];
        req.on('error',function(err){
            console.error(err);
        }).on('data',function(chunk){
            // data+=chunk;
            data.push(chunk);
            console.log(data);
        }).on('end',function(){
            if(req.method==='POST'){
                if(data.length>10){
                    req.connection.destroy();
                }
                data=Buffer.concat(data).toString();
                data=queryString.parse(data);
                // data=decodeURIComponent(data);
                route(handle,pathname,res,data);
            }else{
                var params=url.parse(req.url,true).query;
                // console.log('参数是：'+params);
                route(handle,pathname,res,params)
            }
        });
    }).listen(8012);
    console.log('服务启动');
};
module.exports={
    startServer,
};
