 /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated swing');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated flash');
    }, {
        offset: '60%'
    });