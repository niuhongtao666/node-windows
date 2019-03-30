var fs=require('fs');
function route(handle,pathname,res){
    console.log('请求路径是：'+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        var myReadStream=fs.createReadStream(__dirname+'/404.html','utf-8');
        myReadStream.pipe(res);
    }
}
module.exports.route=route;