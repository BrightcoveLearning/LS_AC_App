( function( $ ) {

  $( bc ).bind( "init", initialize );

  var _dataUpdate = {};
  var _dataContent = {};
  var _dataVideos = {};

  var recentUpdates = 0;
  var recentContent = 0;
  var recentVideos = 0;

  var secondPageMode = "";

  function initialize() {
    bc.core.cache( "lastVisit", "2012-11-01T22:04:23.763Z" );

    bc.core.getData("acrecent", onGetRecentDataSuccess, onGetDataError);
    bc.core.getData("acupdate", onGetUpdateDataSuccess, onGetDataError);
    bc.core.getData("acvideos", onGetVideoDataSuccess, onGetDataError);

    registerEventListeners();
  }

  function registerEventListeners() {
    $( "#first-page-details" ).on( "tap", "li", injectSecondPageDetails );
    $("body").on( "tap", "#mainNavTargetBC", topNavClickedBC);
    $("body").on( "tap", "#mainNavTargetVC", topNavClickedVC);
    $("body").on( "tap", "#mainNavTargetAC", topNavClickedAC);
    $("body").on( "tap", "#mainNavTargetZC", topNavClickedZC);
    $("body").on( "tap", "#mainNavTargetS", topNavClickedS);
    $("body").on( "tap", "#updates", sideNavClickedUpdates);
    $("body").on( "tap", "#content", sideNavClickedContent);
    $("body").on( "tap", "#videos", sideNavClickedVideos);
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

  function sideNavClickedUpdates( event ){
    console.log( this );
    $(this).addClass("active").siblings().removeClass("active");
    setUpdateList( _dataUpdate );
  }

  function sideNavClickedContent( event ){
    $(this).addClass("active").siblings().removeClass("active");
    secondPageMode = "content";
    setContentList( _dataContent );
  }

  function sideNavClickedVideos( event ){
    $(this).addClass("active").siblings().removeClass("active");
    secondPageMode = "videos";
    setVideosList( _dataVideos );
  }

  function injectSecondPageDetails( event ){
    var type = $(this).data("type");
    var guid = $(this).data("guid");
    if (type == "update") {
      injectUpdatePageContent( guid, $(this) );
    } else {
      injectRecentPageContent( guid, $(this) );
    }
  }

  function onGetVideoDataSuccess( data ) {
    var lastVisitFromCache = bc.core.cache( "lastVisit" );
    var lastVisitDateObject = new Date( lastVisitFromCache );
    for (var i = 0; i < data.length; i++) {
      var thisItem = data[i];
      var fullDescription = thisItem.description;
      var theLink = thisItem.link;
      var displayDescription = $(fullDescription).find( ".field-item.odd" ).html();
      var displayDescription = $.trim(displayDescription);
      var videoID = $(fullDescription).filter('.field-field-video-id').find('.odd').html();
      var videoID = $.trim(videoID);
      data[i].isVideo = true;
      data[i].displayDescription = displayDescription;
      data[i].videoID = videoID;
      data[i].recentBoolean = checkForRecent( thisItem.pubDate, lastVisitDateObject );
      if ( data[i].recentBoolean ) {
        recentVideos ++;
      }
    }
    $(".badge.badge-inverse.badge4videos").html( recentVideos );
    _dataVideos = data;
  }

  function onGetUpdateDataSuccess( data ) {
    var lastVisitFromCache = bc.core.cache( "lastVisit" );
    var lastVisitDateObject = new Date( lastVisitFromCache );
    for (var i = 0; i < data.length; i++) {
      var thisItem = data[i];
      var fullDescription = thisItem.description;
      var startOfH3Location = fullDescription.indexOf("<h3>");
      var docHTML = fullDescription.slice( startOfH3Location );
      var releaseDate = $(fullDescription).find( ".date-display-single" ).html();
      data[i].docHTML = docHTML;
      data[i].releaseDate = releaseDate;
      data[i].recentBoolean = checkForRecent( thisItem.pubDate, lastVisitDateObject );
      if ( data[i].recentBoolean ) {
        recentUpdates ++;
      }
    }
    _dataUpdate = data;
    setUpdateList( data );
  }

  function onGetRecentDataSuccess( data ) {
    var lastVisitFromCache = bc.core.cache( "lastVisit" );
    var lastVisitDateObject = new Date( lastVisitFromCache );
    for (var i = 0; i < data.length; i++) {
      var thisItem = data[i];
      var fullDescription = thisItem.description;
      var theLink = thisItem.link;
      var isVideo = theLink.indexOf( "training-videos" ) != -1;
      if ( isVideo ){
        var displayDescription = $(fullDescription).find( ".field-item.odd" ).html();
        var displayDescription = $.trim(displayDescription);
        var videoID = $(fullDescription).filter('.field-field-video-id').find('.odd').html();
        var videoID = $.trim(videoID);
        data[i].displayDescription = displayDescription;
        data[i].isVideo = true;
        data[i].linkPhrase = "Watch the Video";
        data[i].videoID = videoID;
      } else {
        var displayDescription = $(fullDescription).find( ".BCL-objective" ).html();
        var displayDescription = $.trim(displayDescription);
        var endOfBreakLocation = fullDescription.indexOf("<!--break-->") + 12;
        var docHTML = fullDescription.slice( endOfBreakLocation );
        data[i].displayDescription = displayDescription;
        data[i].isVideo = false;
        data[i].linkPhrase = "Read the Entire Document";
        data[i].docHTML = $.trim(docHTML);
      }
      data[i].recentBoolean = checkForRecent( thisItem.pubDate, lastVisitDateObject );
      if ( data[i].recentBoolean ) {
        recentContent ++;
      }
    }
    $(".badge.badge-inverse.badge4content").html( recentContent );
    _dataContent = data;
  }

  function onGetDataError( error ) {
    console.log(error);
  }

  function setVideosList( data ) {

    //The object we will pass to markup that will be used to generate the HTML.
    var context = { "acrecentitems": data };

    //The SDK automatically parses any templates you associate with this view on the bc.templates object.
    var markupTemplate = bc.templates["display-recent-item-tmpl"];

    //The generated HTML for this template.
    var html = Mark.up( markupTemplate, context );

    //Set the HTML of the element.
    $( "#first-page-details" ).html( html );
  }

  function setUpdateList( data ) {
    $(".badge.badge-inverse.badge4updates").html( recentUpdates );
    //The object we will pass to markup that will be used to generate the HTML.
    var context = { "acupdateitems": data };

    //The SDK automatically parses any templates you associate with this view on the bc.templates object.
    var markupTemplate = bc.templates["display-update-item-tmpl"];

    //The generated HTML for this template.
    var html = Mark.up( markupTemplate, context );

    //Set the HTML of the element.
    $( "#first-page-details" ).html( html );
  }

  function setContentList( data ) {
    //The object we will pass to markup that will be used to generate the HTML.
    var context = { "acrecentitems": data };

    //The SDK automatically parses any templates you associate with this view on the bc.templates object.
    var markupTemplate = bc.templates["display-recent-item-tmpl"];

    //The generated HTML for this template.
    var html = Mark.up( markupTemplate, context );

    //Set the HTML of the element.
    $( "#first-page-details" ).html( html );
  }

  function injectUpdatePageContent( guidParam, liTapped ) {
   var selectedItem = getUpdateItemByGUID(guidParam);
   var context = { selectedUpdate: selectedItem };
   var markupTemplate = bc.templates["display-update-tmpl"];
   var html = Mark.up( markupTemplate, context );
   if ( selectedItem.recentBoolean ) {
     recentUpdates --;
     liTapped.removeClass("unread");
     selectedItem.recentBoolean = false;
   }
   $(".badge.badge-inverse.badge4updates").html( recentUpdates );
   $( "#second-page-content" ).html( html );
   bc.ui.forwardPage( $( "#pagetwo" ) );
  }

  function injectRecentPageContent( guidParam, liTapped ) {
    var selectedItem = getRecentItemByGUID(guidParam);

    if (selectedItem.isVideo) {
      var context = { "videoID": selectedItem.videoID };
      var markupTemplate = bc.templates["play-video-tmpl"];
    } else {
      var context = { "docHTML": selectedItem.docHTML };
      var markupTemplate = bc.templates["display-doc-tmpl"];
    }

    var html = Mark.up( markupTemplate, context );

    if (secondPageMode == "content") {
      if ( selectedItem.recentBoolean ) {
        recentContent --;
        liTapped.removeClass("unread");
        selectedItem.recentBoolean = false;
      }
      $(".badge.badge-inverse.badge4content").html( recentContent );
    } else {
      if ( selectedItem.recentBoolean ) {
        recentVideos --;
        liTapped.removeClass("unread");
        selectedItem.recentBoolean = false;
      }
      $(".badge.badge-inverse.badge4videos").html( recentVideos );
    }
   $( "#second-page-content" ).html( html );
   bc.ui.forwardPage( $( "#pagetwo" ) );
  }

  function getUpdateItemByGUID( localGUID ) {
    var len=_dataUpdate.length;
    for(var i=0;i<len;i++){
      if(_dataUpdate[i].guid == localGUID){
        return _dataUpdate[i];
      }
    }
  }

  function getRecentItemByGUID( localGUID ) {
    var len=_dataContent.length;
    for(var i=0;i<len;i++){
      if(_dataContent[i].guid == localGUID){
        return _dataContent[i];
      }
    }
  }

  function checkForRecent( pubDate, lastVisit ) {
    var publishDateObject = new Date( pubDate );
    if ( publishDateObject > lastVisit ) {
      return true;
    } else {
      return false;
    }
  }

})( jQuery )
