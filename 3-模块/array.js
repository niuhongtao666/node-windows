var arrayLength=function(arr){
    console.log('数组中有'+arr.length+'个元素');
};
var adder=function(a,b){
    console.log(a+'和'+b+`加起来的和是${a+b}`);
};
module.exports={
    arrayLength,
    adder
};