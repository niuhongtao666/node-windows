$(function(){
    $('.delete-article').on('click',function(e){
        console.log($(this).data('id'));
        $.ajax({
            type:'DELETE',
            url:'/article/delete/'+$(this).data('id'),
            success:function(){
                window.location.href='/';
            },
            err:function(err){
                if(err) throw err;
            }
        })
    });
});