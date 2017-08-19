//selects all heading items h1 - h6
$(':header').addClass('headline');

//selects the first three elements of the list, hides them, and then fades them in
$('li:lt(3)').hide().fadeIn(1500);


//selects all line items, on click then run a function that removes that list item
$('li').on('click', function(){
    $(this).remove();
});

var li = document.getElementsByTagName('li');
console.log(li.length);

var $content = $('li').html();
console.log($content);

$('li em').addClass('seasonal');

$('li.hot').addClass('favorite');

$('li[id!="one"]').hide().delay(500).fadeIn(1400);

var $listHTML = $('ul').html();
$('ul').append($listHTML);

console.log($listHTML);