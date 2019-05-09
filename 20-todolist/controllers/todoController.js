var data=[{item:'walking dogs'},{item:'playing with cats'},{item:'writing dinaries'}];
var bodyparser=require('body-parser');
var dataReceive=bodyparser.urlencoded({extended:false});
module.exports=function(app){
    app.get('/todo',(req,res)=>{
        // res.send('get-todo');
        res.render('todo',{todos:data});
    });
    app.post('/todo',dataReceive,(req,res)=>{
        data.push(req.body); 
        res.json(data);
    });
    app.delete('/todo/:item',(req,res)=>{
        data=data.filter(every=>every.item.replace(/ /g,'-')!==req.params.item);
        res.json(data);                
    });
};