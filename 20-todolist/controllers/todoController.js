module.exports=function(app){
    app.get('/todo',(req,res)=>{
        // res.send('get-todo');
        res.render('todo');
    });
    app.post('/todo',(req,res)=>{
        res.send('post-todo');        
    });
    app.delete('/todo',(req,res)=>{
        res.send('delete-todo');                
    });
};