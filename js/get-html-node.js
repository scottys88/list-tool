$(function() {
    
var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>');
    

$newFragment = $('<li>');

var $newItem = $('<li class="new">item</li>');
    

console.log($newItem);
    
    
});