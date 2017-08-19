$(function() {

$newItemButton =  $('#newItemButton');
$newItemForm = $('#newItemForm');
$addButton = $('#addButton');
$textInput = $('input:text')
    
$newItemButton.show();
$newItemForm.hide();
    
$newItemButton.on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
});
    

$addButton.on('click', function(e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        
    });
    
    
    
});



    
    
