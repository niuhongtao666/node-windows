var fs=require('fs');
try{
    fs.writeFileSync('writeme.txt','哈哈哈');
}catch(error){
    console.log(error);
}