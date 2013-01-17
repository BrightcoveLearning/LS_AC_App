( function( $ ) {

  $( bc ).bind( "init", initialize );

  function initialize() {
    bc.core.cache( "lastVisit", "2012-11-01T22:04:23.763Z" );

    bc.core.getData("vcrecent", onGetRecentDataSuccess, onGetDataError);
    bc.core.getData("vcupdate", onGetUpdateDataSuccess, onGetDataError);
    bc.core.getData("vcvideos", onGetVideoDataSuccess, onGetDataError);

    registerEventListeners();

  }

})( jQuery )
