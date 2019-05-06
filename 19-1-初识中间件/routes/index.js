var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('根路由');
});
router.get('/index1',(req,res)=>{
    res.send('根路由1');
});
module.exports=router;