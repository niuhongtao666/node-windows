var http=require('http');
var startServer=function(route,handle){
    http.createServer((req,res)=>{
        route(req.url,handle,res);
    }).listen(8009);
console.log('服务启动');
};
module.exports.startServer=startServer;