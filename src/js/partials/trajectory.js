$(document).ready(function(){
  $('.js-owl-3').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    responsive:{
      0:{items:1},
      600:{items:1},
      768:{items:2},
      992:{items:2},
      1200:{items:3}
    }
  });
  $('.js-owl-know').owlCarousel({
    loop: false,
    margin:10,
    nav: false,
    dots: true,
    responsive:{
      0:{items:1},
      768:{items:2,margin: 30},
      1200: {items:2,margin: 40,dots: false,nav:true},
      1600: {items:2,margin: 60,dots: false,nav:true}
    }
  });
});
