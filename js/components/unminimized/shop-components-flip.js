(function ($) {
  Berserk.behaviors.shop_components_flip = {
    attach: function (context, settings) {

      if ($('.scrollbar-inner').length) {
        if (typeof $.fn.scrollbar !== 'function') {
          console.log('Waiting for the scrollbar library');
          setTimeout(Berserk.behaviors.shop_components_flip.attach, settings.timeout_delay, context, settings);
          return;
        }
        $('.scrollbar-inner:not(.rendered)', context).each(function () {
          $(this).scrollbar();
        })
      }
    }
  }

})(jQuery);