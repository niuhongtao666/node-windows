function sayHi(fun,name){
    fun(name);
};
sayHi(function(name){
    console.log(name+' sayHi');//Tom sayHi
},'Tom');
sayHi((name)=>{
    console.log(name+' sayHi');//James sayHi
},'James');