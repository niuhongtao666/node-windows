let express=require('express');
let router=express.Router();
let User=require('../models/user');
const { check, validationResult } = require('express-validator/check');
let bcrypt=require('bcrypt');
router.get('/register',(req,res)=>{
    res.render('users/register')
});
function uniqObjInArray(objarray){
    let len = objarray.length;
    let tempJson = {
        
    };
    let res = [];
    for(let i = 0;i < len;i++){
        //取出每一个对象
        tempJson[JSON.stringify(objarray[i])] = true;
    }
    console.log("tempJson is ",tempJson);
    let keyItems= Object.keys(tempJson);
    for(let j = 0;j < keyItems.length;j++){
        res.push(JSON.parse(keyItems[j]));
    }
    return res;
}
router.post('/register',[
    check('name').isLength({min:1}).withMessage('Name is required'),
    check('email').isLength({min:1}).withMessage('Email is required'),
    check('username').isLength({min:1}).withMessage('Username is required'),
    check('password_confirmation').isLength({min:1}).withMessage('Password-Confirmation is required'),
    check('email').isEmail().withMessage('Email is invalid'),
    check('password','password is required'),
    check('password').isLength({min:1}).withMessage('password is required'),
    check('password','password is required').trim().custom((value,{req,loc,path})=>{
            if(value!==req.body.password_confirmation){
                throw new Error('Passwords do not match');
            }else {
                return value;
            }
        })
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).json({ errors: errors.array() });
        console.log(errors.array());
        let errorsList=errors.array();
        errorsList=uniqObjInArray(errorsList);
        console.dir(errorsList);
        res.render('users/register',{errors:errorsList,title:'Add article'});
    }else{
        let users=new User(req.body);
        // const saltRounds = 10;//说明https://www.jianshu.com/p/2b131bfc2f10
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(users.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    console.error(err);
                    return;
                }
                users.password=hash;
                users.save((err,data)=>{
                    if(err) throw err;
                    req.flash("success", "Register and Login");
                    res.redirect('/');
                })
            });
        });
    }
}); 
router.get('/login',(req,res)=>{
    res.render('users/login')
});
router.post('/login',(req,res)=>{
    res.render('users/login')
});
module.exports=router;