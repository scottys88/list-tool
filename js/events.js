$(function() {
    
//creates an empty variable for IDSs to be stored against in future
var ids = ''

//uses jquery to select all list items in the DOM
var $listItems = $('li');

//on mouseover, remove the span element and then re-add span element but with IDs shows
$listItems.on('mouseover click', function(){
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append('<span> ' + ids + '</span>');
})
    


//removes the span element as set out in function above.
$listItems.on('mouseout', function(){
    $(this).children('span').remove();
});


});
