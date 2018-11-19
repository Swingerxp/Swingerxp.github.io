(function ($) {
  Berserk.behaviors.media_embeds_init = {
    attach: function (context, settings) {

      // To use the Embedded Posts Plugin, or any other Social Plugin, you need
      // to add the Facebook JavaScript SDK to your website.

      function facebookSDK(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v2.11';
        fjs.parentNode.insertBefore(js, fjs);
      }

      //if page has fb-element , init sdk
      var fbElement = $('.fb-video:not(.rendered)',context).addClass("rendered");
      if(fbElement.length){
        facebookSDK(document, 'script', 'facebook-jssdk');
      }

      var hostedVideo = $('.brk-hosted-video:not(.rendered)', context).addClass('rendered');
      hostedVideo.each(function (index) {
        var playButton = $(this).find('.brk-hosted-video__btn');
        var video = $(this).find('video');
        var source = $(this).find("source");
        var src = source.attr("data-src");
        var img = $(this).find('.brk-hosted-video__img')

        if (!$(this).hasClass('brk-hosted-video_inner')) {
          playButton.attr('href', '#' + 'brk-hosted-video-' + index)
          video.attr('id', 'brk-hosted-video-' + index)

          playButton.click(function (event) {
            source.attr("src", src);
            setTimeout(function () {
              video.get(0).play()
            }, 100)
          })
        }
        if ($(this).hasClass('brk-hosted-video_inner')) {
          playButton.click(function (event) {

            video.css("display", "block");
            playButton.css("display", "none");
            source.attr("src", src);            
            setTimeout(function () {
              video.get(0).play()
            }, 100)
          })
        }
      })
    }
  }
})(jQuery);
