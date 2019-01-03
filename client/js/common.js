$(document).ready(function() {
    //Slider
    $('.slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 773,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    
    $('.slides__project').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  //Popup
	$('.case--popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
  });
  
  //Complects page
  $('.complect').click(function(){ 
    $(this).toggleClass('active');
    $(this).children('.complect--descr').fadeToggle();
    $(this).children('.complect--ball').toggleClass('active');
  })

  //Кнопка адаптивного меню
      var toggles = document.querySelectorAll(".cmn-toggle-switch");

      for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
      };

      function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
      }
  
    $('.cmn-toggle-switch').on('click', function() {
      $('.nav--menu').toggleClass('active');
      $('header .nav--social').toggleClass('active');
    });
});