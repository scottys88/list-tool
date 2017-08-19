$(function() {

    $('li').on('click', function(e){
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var type = e.type;
        var clicked = date.toDateString();
        $(this).append('<span> '+ clicked + '</span>' + '<span> ' + type + '</span>');
        
        
        
        
    })


});