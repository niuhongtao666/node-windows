var express=require('express');
var router=express.Router();
router.get('/',(req,res)=>{
    res.send('jobs');
});
router.get('/jobs1',(req,res)=>{
    res.send('jobs1');
});
module.exports=router;
