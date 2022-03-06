$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
var nextURL;
function updateNextURL( doc ) {
nextURL = $( doc ).find('.prathyoush__page-next').attr('href');

}
updateNextURL( document );
var $container = $('.container').infiniteScroll({
path: function() {
return nextURL;
},

append: '.prath_cont',
history: 'push',
historyTitle: true,
status: '.page-load-status',
checkLastPage: '.prathyoush__page-next'

});
$container.on( 'load.infiniteScroll', function( event, response, path ) {
updateNextURL( response );
});

});
