var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('根路由');
});
module.exports=router;