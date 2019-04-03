var fs=require('fs');

function home(res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
    myReadStream.pipe(res);
};
function api_records(res){
    var myObj={
        'name':'张三',
        'age':21
    }
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(myObj));
};
module.exports={
    home,
    api_records
}