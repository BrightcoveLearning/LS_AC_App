function topNavClickedBC( event ) {
  bc.device.navigateToView("brightcove.html");
  if ($('#dmanualCollapse').hasClass('in')) {
    $("#amanualCollapse").click();
  }
}

function topNavClickedVC( event ) {
  bc.device.navigateToView("videocloud.html");
  if ($('#dmanualCollapse').hasClass('in')) {
    $("#amanualCollapse").click();
  }
}
function topNavClickedAC( event ) {
  bc.device.navigateToView("appcloud.html");
  if ($('#dmanualCollapse').hasClass('in')) {
    $("#amanualCollapse").click();
  }
}

function topNavClickedZC( event ) {
  bc.device.navigateToView("zencoder.html");
  if ($('#dmanualCollapse').hasClass('in')) {
    $("#amanualCollapse").click();
  }
}

function topNavClickedS( event ) {
  bc.device.navigateToView("status.html");
  if ($('#dmanualCollapse').hasClass('in')) {
    $("#amanualCollapse").click();
  }
}

Mark.pipes.date = function (date) {
    return new Date(+date || date).toLocaleDateString();
};

var player,videoPlayer;
