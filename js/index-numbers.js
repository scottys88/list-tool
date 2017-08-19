$(function() {
    
    //create variable for list items
    $listItems = $('li');
    
    //find all list items with index lower than 2. Remove class Hot
    $('li:lt(2)').removeClass('hot');
    
    //find list item with index equal to 0 then add a class complete
    $listItems.eq('0').addClass('complete');
    
    //find list items greater than 2 and then add a class cool
    $('li:gt(2)').addClass('cool');
        
    
});