(function ($) {
  Berserk.behaviors.cfa__page_init = {
    attach: function (context, settings) {
      var embedVideo = $('.embed-responsive:not(.rendered):has(.yt-iframe)') ? $('.embed-responsive') : null;
      if (embedVideo != null) {
        embedVideo.each(function () {
          var overlay = $(this).find('.overlay-image');
          var button = $(this).find('.icon__btn');
          var video = $(this).find('.yt-iframe');
          button.on('click', function(ev){
            overlay.css('display','none');
            video[0].src += "&mute=1&autoplay=1";
            ev.preventDefault();
          })


        }).addClass('rendered');
      }
    }
  }
})(jQuery);