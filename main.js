var uri = window.location.toString();
    if (uri.indexOf("%3D","%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
    }
    var uri = window.location.toString();
    if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
    }
    var uri = window.location.toString();
    if (uri.indexOf("&m=1","&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
    }
    var uri = window.location.toString();
    if (uri.indexOf("?m=1","?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
    }
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

	
