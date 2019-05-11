// var data=[{item:'walking dogs'},{item:'playing with cats'},{item:'writing dinaries'}];
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://root:rootpwd@localhost/test?authSource=admin',{useNewUrlParser:true});
var todoSchema=new mongoose.Schema({
    item:String
})
var Todo=mongoose.model('Todo',todoSchema);
// var itemOne=Todo({item:'listning music',item:'buying dingding'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// });
var dataReceive=bodyparser.urlencoded({extended:false});
module.exports=function(app){
    app.get('/todo',(req,res)=>{
        // res.send('get-todo');
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });
    });
    app.post('/todo',dataReceive,(req,res)=>{
        var itemOne=Todo(req.body).save(function(err,data){
            if(err) throw err;
            console.log('item saved');
            console.log(data);
            res.json(data);
        });
        // data.push(req.body); 
    });
    app.delete('/todo/:item',(req,res)=>{
        // data=data.filter(every=>every.item.replace(/ /g,'-')!==req.params.item);
        Todo.find({item:req.params.item.replace(/-/g,' ')}).remove((err,data)=>{
            if(err) throw err;
            console.log(data);
            res.json(data);                
        });  
    });
};