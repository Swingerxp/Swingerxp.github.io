(function ($) {
  Berserk.behaviors.blog__page_init = {
    attach: function (context, settings) {

      if($('.brk-related-carousel:not(.rendered)').length < 1){
        return;
      }

      if (typeof $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.blog__page_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var carousel_container = $(context).parent().find('.brk-related-carousel:not(.rendered)');
      carousel_container.each(function () {
        var carousel = $(this).find('.brk-related-carousel__items');

        carousel.on('init afterChange', function (event, slick) {
          slick.$dots.removeClass('slick-dots')
          slick.$dots.addClass('brk-related-carousel__dots');
        });

        carousel.slick({
          dots: true,
          prevArrow: false,
          nextArrow: false,
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        })

        $(this).addClass("rendered");
      })

    }
  }
})(jQuery);