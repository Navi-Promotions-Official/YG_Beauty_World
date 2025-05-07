/*------------------------------------- Preloder -------------------------------------*/
$(window).on("load", function() {
  $('.preloader').delay(1000).fadeOut(800); 
});

/*------------------------------------- Slider-------------------------------------*/
$('.services-bottom').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.product-bottom-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
  prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
  responsive: [
  {
    breakpoint: 400,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

$('.price-bottom-wrap').slick({
  dots: false,
  arrows: false,
 centerMode: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 400,
    settings: {
      arrows: false,
      slidesToShow: 1,
      centerMode: false,
      slidesToScroll: 1
    }
  }
  ]
});

$('.client-logo-wrap').slick({
  dots: true,
  arrows: false,
  infinite:true,
  autoplay:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});


