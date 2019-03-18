var fs=require('fs');
fs.readFile('readme.txt','utf-8',function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log(`Node.js异步读取的文件内容是 ${data}`);
        // console.log(data);    
    }
})
console.log('finished');