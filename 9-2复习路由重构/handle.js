var fs=require('fs');
function index(res){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html','utf-8').pipe(res);
};
function api(res,params){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(params))
};
module.exports={
    index,
    api
};