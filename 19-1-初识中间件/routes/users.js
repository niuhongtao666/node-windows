var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('users');
});
router.get('/users123',(req,res)=>{
    res.send('users123');
});
module.exports=router;
