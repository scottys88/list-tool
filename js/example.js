$(function() {

//---variables required---//
    
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $itemDescription = $('input:text');
    var $addButton = $('#addButton');
    var $listItems = $('ul');
    var $counter = $('#counter');
    var $h2 = $('h2');
    var $individualListItems = $('li');
    var $msg = $('#msg');
    
//---fade in animations---//

    $h2.hide().slideDown(700);
    $individualListItems.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
    })
                                     
                                         

//---Add new items form and function---//
    

    $newItemButton.show();
    $newItemForm.hide();
    $msg.hide();
    
    
    //function to show the form and hide the new item button
    $newItemButton.on('click', function(){
        $newItemForm.show();
        $newItemButton.hide();
        $itemDescription.focus();

    })
    
    //function to get the details from the iput and add to list
    
    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var newListItem = $itemDescription.val();
            if (newListItem == ''){
                $msg.show();
                $msg.css('color','red').text('You must enter text').animate({opacity:1},100);
                $msg.delay(1000).animate({opacity:0}, 500, function(){
                $msg.hide();
                })
            }
            else{
        $listItems.append('<li>' + newListItem + '</li>');
        $itemDescription.val('');
        updateCount();
        $itemDescription.focus();
            }
        });
   
    
//---Set up the counter to begin counting through the items---//
    
    function updateCount(){
        var items = $('li').length;
        $counter.text(items);
    }
    updateCount();


//---Change a list item class to Complete---//
    
    
    $listItems.on('click', 'li', function(){
        var $this = $(this);
        if ($this.hasClass('complete')){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function(){
            $this.remove();
            updateCount();
        });
        }
        else {
        $this.addClass('complete');
        var item = $this.text();
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 300, 'swing', function(){
            $this.remove();
            $listItems.append('<li class="complete">' + item + '</li>');
            $(".complete").prepend('<img class="undo" src="images/Arrows-Undo-icon.png"/>');
        });

        }
    });
    

//---Adds items back into the list/ removes the complete class---//
    
$("img.undo").click(function(e){
    console.log('eat shit');
    e.stopPropagation();
}); 


    
    
    
    
});