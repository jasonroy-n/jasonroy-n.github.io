var windowWidth = $(window).width();
if ( windowWidth < 659 ) {
    $('#viewMore').removeClass("hidden");
    $('.next').hide();
    $('#viewMore').click(function(){
    $('.next').slideToggle();
    $('#viewMore').html($('#viewMore').text() == 'View Less' ? 'View More' : 'View Less');
    });
}