	var _dataCorpBlog = {};
	var _dataTwitterFeed = {};
	var _aboutHTML = "";

	var recentTwitter = 0;
	var recentCorpBlog = 0;

	var $body = $('body');

	function registerEventListeners() {
		$( "#first-page-details" ).on( "tap", "li", injectCorpBlogContent );
		$body.on( "tap", "#mainNavTargetBC", topNavClickedBC);
		$body.on( "tap", "#mainNavTargetVC", topNavClickedVC);
		$body.on( "tap", "#mainNavTargetZC", topNavClickedZC);
		$body.on( "tap", "#mainNavTargetS", topNavClickedS);
		$body.on( "tap", "#blog", sideNavClickedBlog);
		$body.on( "tap", "#twitter", sideNavClickedTwitter);
		$body.on( "tap", "#about", sideNavClickedAbout);
		$( "#pagetwo" ).on( "tap", ".back-button", backAndCleanUp );
    $( "#pagetwo" ).on( "swipe", backAndCleanUp );
    bc.device.setAutoRotateDirections(["all"]);
	}

	function backAndCleanUp(){
		bc.ui.backPage();
		if ( videoPlayer != null) {
			videoPlayer.pause(true);
		}
		$("#second-page-content").html("");
	}

	function onGetDataError( error ) {
		console.log(error);
	}

	function sideNavClickedBlog( event ){
    $(this).addClass("active").siblings().removeClass("active");
		setCorpBlogList( _dataCorpBlog );
	}

	function sideNavClickedTwitter( event ){
    $(this).addClass("active").siblings().removeClass("active");
		setTwitterList( _dataTwitterFeed );
	}

	function sideNavClickedAbout( event ){
    $(this).addClass("active").siblings().removeClass("active");
		setAboutHTML( _aboutHTML );
	}

	function onGetAboutHTMLSuccess( data ) {
		_aboutHTML = data.text;
	}

	function onGetCorpBlogSuccess( data ){
		for (var i = 0; i < data.length; i++) {
			var thisItem = data[i];
			var fullDescription = thisItem.description;
			if ( $("title").text() == "Brightcove") {
				fullDescription = fullDescription.replace('<div class="field-label">Image:&nbsp;</div>','');
				data[i].description = fullDescription;
				var forTease = $(fullDescription).closest('p').html();
				data[i].forTease = forTease.replace(/<[^>]+>[^<]*<[^>]+>|<[^\/]+\/>/ig, "");
			} else {
				data[i].forTease = fullDescription;
			}
			data[i].recentBoolean = checkForRecent( thisItem.guid );
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
			localData[i].recentBoolean = checkForRecent( thisItem.guid );
			if ( localData[i].recentBoolean ) {
				recentTwitter ++;
			}
		}
		_dataTwitterFeed = localData;
		$(".badge.badge-inverse.badge4twitter").html( recentTwitter );
		setTwitterList( _dataTwitterFeed );
	}

	function setAboutHTML( data ){
		//Set the HTML of the element.
		$( "#first-page-details" ).html( data );
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
		addIDtoCache(guid);
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
		addIDtoCache(guid);
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

	function addIDtoCache(guid){
	  if ( contentReadIDs.indexOf(guid) == -1 ){
			contentReadIDs.push( guid );
	  	bc.core.cache( "contentReadIDsCache", contentReadIDs);
	  }
	}

	function checkForRecent( guid ) {
	  if ( contentReadIDs.indexOf(guid) == -1 ){
	  	return true;
	  }else{
	  	return false;
	  }
	}
