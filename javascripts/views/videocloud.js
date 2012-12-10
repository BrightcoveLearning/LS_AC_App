( function( $ ) {

  $( bc ).bind( "init", initialize );

  var _dataUpdate = {};
  var _dataRecent = {};

  function initialize() {
    bc.core.cache( "lastVisit", "2012-06-01T22:04:23.763Z" );

    bc.core.getData("vcrecent", onGetRecentDataSuccess, onGetDataError);
    bc.core.getData("vcupdate", onGetUpdateDataSuccess, onGetDataError);

    registerEventListeners();

  }

  function registerEventListeners() {
    $( "#product-updates-list" ).on( "tap", "li", injectUpdatePageContent );
    $( "#recent-content-list" ).on( "tap", "li", injectRecentPageContent );
  }

  function onGetUpdateDataSuccess( data ) {
    for (var i = 0; i < data.length; i++) {
      var thisItem = data[i];
      var fullDescription = thisItem.description;
      var startOfH3Location = fullDescription.indexOf("<h3>");
      var docHTML = fullDescription.slice( startOfH3Location );
      var releaseDate = $(fullDescription).find( ".date-display-single" ).html();
      data[i].docHTML = docHTML;
      data[i].releaseDate = releaseDate;
    }
    _dataUpdate = data;
    setUpdateList( data );
  }

  function onGetRecentDataSuccess( data ) {
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

      var lastVisitFromCache = bc.core.cache( "lastVisit" );
      var lastVisitDateObject = new Date( lastVisitFromCache );
      var publishDateObject = new Date( thisItem.pubDate );
      if ( publishDateObject > lastVisitDateObject ) {
        data[i].recentBoolean = true;
      } else {
        data[i].recentBoolean = false;
      }
    }
    _dataRecent = data;
    setRecentList( data );
  }

  function onGetDataError( error ) {

  }

  function setUpdateList( data ) {
    //The object we will pass to markup that will be used to generate the HTML.
    var context = { "vcupdateitems": data };

    //The SDK automatically parses any templates you associate with this view on the bc.templates object.
    var markupTemplate = bc.templates["display-update-item-tmpl"];

    //The generated HTML for this template.
    var html = Mark.up( markupTemplate, context );

    //Set the HTML of the element.
    $( "#product-updates-list" ).append( html ).listview();
    $( "#product-updates-list" ).find("ul").listview();
  }

  function setRecentList( data ) {
    //The object we will pass to markup that will be used to generate the HTML.
    var context = { "vcrecentitems": data };

    //The SDK automatically parses any templates you associate with this view on the bc.templates object.
    var markupTemplate = bc.templates["display-recent-item-tmpl"];

    //The generated HTML for this template.
    var html = Mark.up( markupTemplate, context );

    //Set the HTML of the element.
    $( "#recent-content-list" ).append( html ).listview();
    $( "#recent-content-list" ).find("ul").listview();
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
    var len=_dataRecent.length;
    for(var i=0;i<len;i++){
      if(_dataRecent[i].guid == localGUID){
        return _dataRecent[i];
      }
    }
  }

 function injectUpdatePageContent( evt ) {
   var guid = $(this).data("guid");
   var selectedItem = getUpdateItemByGUID(guid);
   var context = { selectedUpdate: selectedItem };
   var markupTemplate = bc.templates["display-update-tmpl"];
   var html = Mark.up( markupTemplate, context );
   $( "#drill-down-detail-page" ).html( html );
 }

  function injectRecentPageContent( evt ) {
    var guid = $(this).data("guid");
    var selectedItem = getRecentItemByGUID(guid);

    if (selectedItem.isVideo) {
      var context = { "videoID": selectedItem.videoID };
      var markupTemplate = bc.templates["play-video-tmpl"];
    } else {
      var context = { "docHTML": selectedItem.docHTML };
      var markupTemplate = bc.templates["display-doc-tmpl"];
    }

    var html = Mark.up( markupTemplate, context );
    $( "#drill-down-detail-page" ).html( html );
  }

})( jQuery )