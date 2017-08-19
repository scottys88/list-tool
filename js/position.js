$(function() {
    
    $window = $(window);
    $slideAd = $('#slideAd');
    
    console.log($('#footer').offset().top);
    console.log($window.height());
    
    $endZone = $('#footer').offset().top - $window.height() - 500;
    
    console.log($endZone);
    
    $window.on('scroll', function(){
        if ($endZone < $window.scrollTop()){
            $slideAd.animate({'right': '0px'}, 250);
        }
        else {
            $slideAd.stop(true).animate({'right': '-360px'}, 250);
        }
    })
    
    

});