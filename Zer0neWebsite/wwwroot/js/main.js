$(document).ready(function () {
    AOS.init();
    setTimeout(function() {
        $(".topBar").slideDown("slow");
    }, 500);

    $('.menuButton').click(function () {
        $('.menuOverlay').slideToggle(500);
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`            
            $(".menuOverlay").slideUp();
        }
    });

    $('#mnuService').mouseout(function () {
        //$('#pnlService').hide();
    });
    $('#mnuService').mouseenter(function () {
        $('#pnlService').show();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('.topBar').addClass('topBar_scroll');
        } else { $('.topBar').removeClass('topBar_scroll', 300); }
    });

    
});