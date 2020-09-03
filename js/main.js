$(document).ready(function(){
    $("#first-block-slider").owlCarousel({
        items: 1,
        loop: true
    });
  });
$(document).ready(function(){
    $("#services-slider").owlCarousel({
        stagePadding: 80,
        items: 2.6 ,
        margin: 12,
        loop: true
    });
});
$(document).ready(function(){
    $("#discounts-slider").owlCarousel({
        center: true,
        items: 2.7,
        margin: 22,
        loop: true
    });
});
$(document).ready(function(){
    $("#description-slider").owlCarousel({
        video:true,
        items: 1,
        loop: true
    });
});