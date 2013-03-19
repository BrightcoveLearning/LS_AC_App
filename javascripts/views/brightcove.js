( function( $ ) {

	$( bc ).bind( "init", initializeApp );

	function initializeApp() {

		bc.device.fetchContentsOfURL("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=brightcove&include_rts=1",onGetTwitterSuccess, onGetDataError);
		bc.core.getData("corpblog", onGetCorpBlogSuccess, onGetDataError);
		bc.core.getData("abouthtml", onGetAboutHTMLSuccess, onGetDataError);

		registerEventListeners();
	}

})( jQuery )