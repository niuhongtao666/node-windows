var fs=require('fs');
fs.writeFile('writeme.txt','我睡觉哦','utf-8',function(err){
    if(err){
        return console.error(err);
    }else{
        console.log('成功异步写入文件');
        fs.readFile('writeme.txt',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                // console.log(`读取到的内容是${data}`);
                console.log(`读取到的内容是`+data.toString('hex'));
            }
        });
    }
})