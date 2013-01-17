( function( $ ) {

  $( bc ).bind( "init", initialize );

  function initialize() {
    bc.core.cache( "lastVisit", "2012-11-01T22:04:23.763Z" );

    bc.core.getData("acrecent", onGetRecentDataSuccess, onGetDataError);
    bc.core.getData("acupdate", onGetUpdateDataSuccess, onGetDataError);
    bc.core.getData("acvideos", onGetVideoDataSuccess, onGetDataError);

    registerEventListeners();
  }

})( jQuery )
