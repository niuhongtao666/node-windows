// var data=[
//     {item:'item1'},
//     {item:'item2'},
//     {item:'item3'},
// ];
// var data=[];
var bodyParser=require('body-parser');
var appBodyParser=bodyParser.urlencoded({extended:false});
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo1',{useNewUrlParser:true});
var schma=new mongoose.Schema({item:String});
var todos=mongoose.model('todos',schma);
// var itemone=todos({item:"reading books"}).save((err,msg)=>{
//     if(err) throw err;
//     data.push(msg);
//     console.log('use db data once');
// })
module.exports=function(app){
    app.get('/todo',(req,res)=>{
        todos.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{'todos':data});
        });
    });
    app.post('/todo',appBodyParser,(req,res)=>{
        todos(req.body).save((err,data)=>{
                if(err) throw err;
                res.json(data);
        })
    });
    app.delete('/todo/:item',(req,res)=>{
        // data=data.filter(every=>every.item!=req.params.item);
        // todos.find({item:req.params.item}).remove((err,data)=>{
        //     if(err) throw err;
        //     res.json(data);    
        // });
        todos.deleteOne({item:req.params.item},(err,data)=>{
            if(err) throw err;
            res.json(data);    
        })
    });
};