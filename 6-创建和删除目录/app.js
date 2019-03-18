var fs=require('fs');
/*fs.writeFile('writeFile.txt','你好啊',function(err){
    if(err) throw err;
    console.log('文件写入成功');
});
fs.unlink('writeFile.txt',(err)=>{
    if(err) throw err;
    console.log('成功删除文件');
});
fs.mkdir('stuff3',(err)=>{
    if(err) throw err;
    console.log('创建文件夹成功');
});
fs.mkdirSync('stuff2');
console.log('创建文件夹结束');
fs.rmdirSync('stuff2');//同步删除文件夹*/
fs.mkdir('stuff',(error)=>{
    if(error) throw error;
    fs.readFile('writeFile.txt',(err,data)=>{
        if(err) throw err;
        fs.writeFile('./stuff/copyFile.txt',data,(er)=>{
            if(er) throw er;
            console.log('copy文件成功');
        })
    })
})