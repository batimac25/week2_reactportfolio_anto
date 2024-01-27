;(function () {
	
	'use strict';

var burgerMenu = function() {

    $('.js-anto-nav-toggle').on('click', function(event){
        event.preventDefault();
        var $this = $(this);

        if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');	
        } else {
            $this.addClass('active');
            $('body').addClass('offcanvas');	
        }
    });
};

var mobileMenuOutsideClick = function() {

    $(document).click(function (e) {
    var container = $("#anto-sidebar, .js-anto-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ( $('body').hasClass('offcanvas') ) {

            $('body').removeClass('offcanvas');
            $('.js-anto-nav-toggle').removeClass('active');
        
        }
        
    }
    });

    $(window).scroll(function(){
        if ( $('body').hasClass('offcanvas') ) {

            $('body').removeClass('offcanvas');
            $('.js-anto-nav-toggle').removeClass('active');
        
        }
    });

};


$(function(){
    burgerMenu();
    mobileMenuOutsideClick();
});

}());