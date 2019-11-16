$(document).ready(function(){

  if (checkVisible($('#animate-loader'))) {
    $animate-loader.addClass("bounceInUp");
  }

  function checkVisible( elm, evalType ) {
    
    evalType = evalType || "visible";

    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
        console.log(vpH);
    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
  }

});
