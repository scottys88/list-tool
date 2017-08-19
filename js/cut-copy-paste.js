$(function() {
    $p = $('p');
    
    $clonedQuote = $p.clone();
    
    $p.remove();
    
    $('h2').after($clonedQuote);
    
    $moveItem = $('li:first').detach();
    
    $moveItem.appendTo('ul');
    
    
    
    
});