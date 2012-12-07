$( document ).on( "pageinit", function() {
		$( "#content-popup" ).on({
		popupbeforeposition: function() {
			var w = $( window ).width() - 150;	
			var h = $( window ).height() - 150;
			$( "#content-popup" ).css( "width", w );
			$( "#content-popup" ).css( "height", h );
		}
	});
});

$(document).bind("mobileinit", function(){
  $.mobile.defaultPageTransition = 'none';
});


