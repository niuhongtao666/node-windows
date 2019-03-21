var fs=require('fs');
try{
    /*var data=fs.readFileSync('readme.txt');
    console.log(typeof data);
    console.log(data);
        / 
            object
            <Buffer e4 bd a0 e5 a5 bd 2c 62 65 69 6a 69 6e 67>
        /
    */
   var data=fs.readFileSync('readme1.txt','utf-8');
    console.log(typeof data);
    console.log(data);
    /* 
        string
        你好,beijing
    */
}catch(error){
    console.log(error);
}