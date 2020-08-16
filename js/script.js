// nav bar
$(window).scroll(function () {
  $scrollamout = $(window).scrollTop();

  if ($scrollamout > 30) {
      $(".menu").addClass("sticky")
  } else {
      $(".menu").removeClass("sticky")
  }

  if ($scrollamout > 500) {
      $(".btop").fadeIn()
  } else {
      $(".btop").fadeOut()
  }
})

// back to top

$(".btop").click(function () {
  $("html,body").animate({
      scrollTop: 0
  }, 2000)
})





// banner vegas slider

$("#banner-part").vegas({
  slides: [
      { src: 'images/banner-bg1.png' },
      { src: 'images/banner-bg2.jpg' },
      { src: 'images/banner-bg3.png' },
      { src: 'images/banner-bg.jpg' }
  ],
  animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
});

// page animation
AOS.init();


// typ js =================

var typed = new Typed('.type', {
    strings: [
        'Web Designer',
        'Freelancer',
        
       ],
       typeSpeed: 60,
       backSpeed: 60,
       loop: true,
  });

// testi-slider
$('.testi-slider').slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // portfolio mixitup

  var mixer = mixitup('.port-item');