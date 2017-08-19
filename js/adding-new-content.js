$(function() {

    $('ul').before('<p>This is some added content');
    
    $('li.hot').prepend('+ '); 
    
    $newLine = $('<li>This is a new line item</li>');
    $('li:last').after($newLine);
    
    
});