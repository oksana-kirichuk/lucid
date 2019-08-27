// AOS Animation

AOS.init();

// Tabulator

$('.tabulator-container .tab').click(function (){
    var target = $(this).attr('data-tab');
    $('.tabulator-container .tab').removeClass('active');
    $(this).addClass('active');
    $('.tabulator-content .tab-content').removeClass('active');
    $('.tabulator-content .tab-content' + target).addClass('active');
});

// Modal window

$('[data-modal]').click(function() {
    var targetModal = $(this).attr('data-modal');
    if (targetModal == 'close') {
        $('.modal-container').removeClass('active');
        $('.modal-container .modal-content').removeClass('active');
    } else {
        $('.modal-container').addClass('active');
        $('.modal-container .modal-content' + targetModal).addClass('active');
    }
});

// Slick.js

$('.slider-main-block').slick({
    dots: true,
    arrows: true,
    prevArrow: '<i class="fa slider-arrows arrows-left fa-chevron-left"></i>',
    nextArrow: '<i class="fa slider-arrows arrows-right fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

// Mobile menu

$('[data-mobile]').click(function () {
  var selector = $(this).attr('data-mobile');
  console.log('data-mobile')

  if (selector === 'close') {
      $('.overlay').removeClass('active');
      $('.mobile-nav').removeClass('active');
  }
  else {
      $('.overlay').addClass('active');
      $('.mobile-nav').addClass('active');
  }
});

