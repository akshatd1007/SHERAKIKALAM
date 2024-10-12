$(document).ready(function() {
  // Initialize music slider
  $('.music-slider').slick({
    dots: true,          // Show dots for navigation
    infinite: true,     // Infinite scrolling
    speed: 500,         // Animation speed
    slidesToShow: 1,    // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
    arrows: true,       // Show arrows for navigation
    responsive: [
      {
        breakpoint: 768, // Adjust settings for smaller screens
        settings: {
          slidesToShow: 1, // Show one slide on smaller screens
          slidesToScroll: 1
        }
      }
    ]
  });

  // Initialize video slider
  $('.video-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
});
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

<script>
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active'); // Toggles the 'active' class
    }
</script>
