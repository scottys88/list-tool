$(function() {
    
    $backgroundColor = $('li').css('background-color');
    console.log($backgroundColor);
    
    $('ul').append('<p>Color is '+ $backgroundColor + 'thanks');
    
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px #fff solid',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '50px'
        
    })
    
});