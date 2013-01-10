( function( $ ) {

	$( bc ).bind( "init", initialize );

	var _dataCorpBlog = {};
	var _dataTwitterFeed = {};

	var recentTwitter = 0;
	var recentCorpBlog = 0;

	function initialize() {
		bc.core.cache( "lastVisit", "2012-12-11T22:04:23.763Z" );

		bc.device.fetchContentsOfURL("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=zencoderinc&include_rts=1",onGetTwitterSuccess, onGetDataError);
		bc.core.getData("zcblog", onGetCorpBlogSuccess, onGetDataError);

		registerEventListeners();
	}

	function registerEventListeners() {
		$( "#first-page-details" ).on( "tap", "li", injectCorpBlogContent );
		$("body").on( "tap", "#mainNavTargetBC", topNavClickedBC);
		$("body").on( "tap", "#mainNavTargetVC", topNavClickedVC);
		$("body").on( "tap", "#mainNavTargetAC", topNavClickedAC);
		$("body").on( "tap", "#mainNavTargetZC", topNavClickedZC);
		$("body").on( "tap", "#mainNavTargetS", topNavClickedS);
		$("body").on( "tap", "#blog", sideNavClickedBlog);
		$("body").on( "tap", "#twitter", sideNavClickedTwitter);
		$( "#pagetwo" ).on( "tap", ".back-button", bc.ui.backPage );
	}

	function topNavClickedBC( event ) {
		bc.device.navigateToView("brightcove.html");
	}

	function topNavClickedVC( event ) {
		bc.device.navigateToView("videocloud.html");
	}

	function topNavClickedAC( event ) {
		bc.device.navigateToView("appcloud.html");
	}

	function topNavClickedZC( event ) {
		bc.device.navigateToView("zencoder.html");
	}

	function topNavClickedS( event ) {
		bc.device.navigateToView("status.html");
	}

	function onGetDataError( error ) {
		console.log(error);
	}

	function sideNavClickedBlog( event ){
		setCorpBlogList( _dataCorpBlog );
	}

	function sideNavClickedTwitter( event ){
		setTwitterList( _dataTwitterFeed );
	}

	function onGetCorpBlogSuccess( data ){
		for (var i = 0; i < data.length; i++) {
			var thisItem = data[i];
			var fullDescription = thisItem.description;
			data[i].forTease = fullDescription;
			data[i].recentBoolean = checkForRecent( thisItem.pubDate );
			if ( data[i].recentBoolean ) {
				recentCorpBlog ++;
			}
		}
		_dataCorpBlog = data;
		$(".badge.badge-inverse.badge4blog").html( recentCorpBlog );
	}

	function onGetTwitterSuccess( data ){
		var localData = JSON.parse( data );
		for (var i = 0; i < localData.length; i++) {
			var thisItem = localData[i];
			localData[i].guid = thisItem.id;
			localData[i].recentBoolean = checkForRecent( thisItem.created_at );
			if ( localData[i].recentBoolean ) {
				recentTwitter ++;
			}
		}
		_dataTwitterFeed = localData;
		$(".badge.badge-inverse.badge4twitter").html( recentTwitter );
		setTwitterList( _dataTwitterFeed );
	}

	function setTwitterList( data ){
		$(".ui-li-count.twitter").html( recentTwitter );

		//The object we will pass to markup that will be used to generate the HTML.
		var context = { "twitteritems": data };

		//The SDK automatically parses any templates you associate with this view on the bc.templates object.
		var markupTemplate = bc.templates["display-twitter-tmpl"];

		//The generated HTML for this template.
		var html = Mark.up( markupTemplate, context );

		//Set the HTML of the element.
		$( "#first-page-details" ).html( html );
	}

	function setCorpBlogList ( data ){
		$(".ui-li-count.corpblog").html( recentCorpBlog );

		//The object we will pass to markup that will be used to generate the HTML.
		var context = { "bccorpblogitems": data };

		//The SDK automatically parses any templates you associate with this view on the bc.templates object.
		var markupTemplate = bc.templates["display-blog-tmpl"];

		//The generated HTML for this template.
		var html = Mark.up( markupTemplate, context );

		//Set the HTML of the element.
		$( "#first-page-details" ).html( html );
	}

	function injectCorpBlogContent( evt ){
		var guid = $(this).data("guid");
		var selectedItem = getCorpBlogItemByGUID(guid);
		var context = { selectedCorpBlog: selectedItem };
		var markupTemplate = bc.templates["display-corpblog-tmpl"];
		var html = Mark.up( markupTemplate, context );

		if ( selectedItem.recentBoolean ) {
			recentCorpBlog --;
			$(this).removeClass("unread");
			selectedItem.recentBoolean = false;
		}
		$(".badge.badge-inverse.badge4blog").html( recentCorpBlog );

		$( "#second-page-content" ).html( html );

		bc.ui.forwardPage( $( "#pagetwo" ) );
	}

	function injectTwitterContent( evt ){
		var guid = $(this).data("guid");
		var selectedItem = getTwitterItemByGUID(guid);

		if ( selectedItem.recentBoolean ) {
			recentTwitter --;
			$(this).removeClass("unread");
			selectedItem.recentBoolean = false;
		}
		$(".badge.badge-inverse.badge4twitter").html( recentTwitter );
	}

	function getTwitterItemByGUID( localGUID ) {
		var len=_dataTwitterFeed.length;
		for(var i=0;i<len;i++){
			if(_dataTwitterFeed[i].guid == localGUID){
				return _dataTwitterFeed[i];
			}
		}
	}

	function getCorpBlogItemByGUID( localGUID ) {
		var len=_dataCorpBlog.length;
		for(var i=0;i<len;i++){
			if(_dataCorpBlog[i].guid == localGUID){
				return _dataCorpBlog[i];
			}
		}
	}

	function checkForRecent( pubDate ) {
		var publishDateObject = new Date( pubDate );
		var lastVisitFromCache = bc.core.cache( "lastVisit" );
		var lastVisitDateObject = new Date( lastVisitFromCache );
		if ( publishDateObject > lastVisitDateObject ) {
			return true;
		} else {
			return false;
		}
	}

})( jQuery )
