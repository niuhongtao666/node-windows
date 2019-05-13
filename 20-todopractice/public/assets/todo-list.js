$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        var item = $('form input');
        var todo = { item: item.val().trim() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                console.log('哈哈哈'+data);
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        // var item = $(this).text().trim().replace(/ /g, "-");
        var item = $(this).text().trim();
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});