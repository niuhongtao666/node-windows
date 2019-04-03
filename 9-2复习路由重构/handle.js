var fs=require('fs');
function index(res){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html','utf-8').pipe(res);
};
function api(res){
    res.writeHead(200,{'Content-Type':'application/json'});
   var obj={
       name:'lisi',
       age:12
   };
   res.end(JSON.stringify(obj))
};
module.exports={
    index,
    api
};