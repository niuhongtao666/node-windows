var express=require('express');
const { check, validationResult } = require('express-validator/check');
let Article=require('../models/article.js');
let router=express.Router();
router.get('/new',(req,res)=>{
    res.render('articles/new',{title:'Add article'});
});
router.get('/:id',(req,res)=>{
    Article.findById(req.params.id,(err,article)=>{
        res.render('articles/show',{article:article});
    });
});
router.get('/:id/edit',(req,res)=>{
    Article.findById(req.params.id,(err,article)=>{
        res.render('articles/edit',
        {
            article:article,
            title:'Edit Article'
        });
    });
});
router.post('/create',[
    check('title').isLength({min:1}).withMessage('Title is required'),
    check('author').isLength({min:1}).withMessage('Author is required'),
    check('body').isLength({min:1}).withMessage('Body is required'),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).json({ errors: errors.array() });
        console.log(errors.array());
        res.render('articles/new',{errors:errors.array(),title:'Add article'});
    }else{
        let articles=new Article(req.body);
        articles.save((err,data)=>{
            if(err) throw err;
            req.flash("success", "Artticle Add");
            res.redirect('/');
        })
    }
});
router.post('/update/:id',(req,res)=>{
    let query={_id:req.params.id};
    Article.update(query,req.body,(err,data)=>{
        if(err) throw err;
        req.flash("success", "Artticle Update");
        res.redirect('/');
    })
});4
router.delete('/delete/:id',(req,res)=>{
    let query={_id:req.params.id};
    Article.deleteOne(query,(err)=>{
        if(err) throw err;
    });
    res.send('success');
});
module.exports=router