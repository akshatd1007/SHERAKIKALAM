$(document).ready(function(){
    $('.video-slider').slick({
      dots: true,          // Enable dots navigation
      infinite: true,     // Infinite looping
      speed: 500,         // Transition speed
      slidesToShow: 1,    // Number of slides to show at once
      slidesToScroll: 1,  // Number of slides to scroll at once
      autoplay: true,     // Enable autoplay
      autoplaySpeed: 3000 // Speed of autoplay
    });
  });