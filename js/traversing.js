$(function() {
    var $h2 = $('h2');
    var $ul = $('ul');
    $h2.append('<a class="show">show</a>');
    $ul.hide();
    
    $h2.on('click', function(){
        $h2.next()
            .fadeIn(500)
            .children('.hot')
            .addClass('complete')
        $h2.find('a').fadeOut(500);
    })
    
    
    
    
});