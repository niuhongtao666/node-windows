var fs=require('fs');
function route(url,handle,res,params){
    console.log('路由是'+url);
    // console.log(handle);
    // console.log(typeof handle[url]);
    if(typeof handle[url] == 'function'){
        handle[url](res,params);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html','utf-8').pipe(res);
    }
};
module.exports.route=route;