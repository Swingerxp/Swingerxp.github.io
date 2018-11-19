// =================================================================================
// Dropdown effect
// =================================================================================

(function ($) {
  Berserk.behaviors.buttons_js = {
    attach: function (context, settings) {

      function btn_dropdown_wrap() {
        var dropdownHeight;

        $('.btn__dropdown_wrap').each(function () {
          if (!$(this).hasClass('open')) {
            $(this).css({
              'height': $(this).children('li:first-child').innerHeight(),
            });
          } else {
            dropdownHeight = 0;

            $(this).children().each(function () {
              dropdownHeight += $(this).outerHeight();
            });

            $(this).css({
              'height': dropdownHeight,
            });
          }
        });

        $('.btn__dropdown_wrap').on('click', function (e) {
          if (e.target !== this) {
            return;
          } else {
            dropdownHeight = 0;

            $(this).children().each(function () {
              dropdownHeight += $(this).outerHeight();
            });

            $(this).toggleClass('open');

            if (!$(this).hasClass('open')) {
              $(this).css({
                'height': $(this).children('li:first-child').innerHeight(),
              });
            } else {
              $(this).css({
                'height': dropdownHeight,
              });
            }
          }
        })
      }

      function btn_inside_out() {
        $(".btn-inside-out").each(function(){
          var 
            textTag = $(this).find(".text"),
            text = textTag.text(),
            textBefore = $(this).find(".before").text(),
            isIconRight = $(this).hasClass(".btn-icon-right");

            if(textBefore.length > text.length) {
              textTag.text(textBefore).css("min-width", function(){
                return  isIconRight ? textTag.outerWidth() + 30 : textTag.outerWidth()
              }).text(text);
            }
        });
      }

      window.addEventListener('load', function () {
        btn_dropdown_wrap();
        btn_inside_out();
      });

  		$('.btn-pos')
  			.on('mouseenter', function (e) {
  				var parentOffset = $(this).offset(),
  					relX = e.pageX - parentOffset.left,
  					relY = e.pageY - parentOffset.top;
  				$(this).find('span').css({top: relY, left: relX})
  			})
  			.on('mouseout', function (e) {
  				var parentOffset = $(this).offset(),
  					relX = e.pageX - parentOffset.left,
  					relY = e.pageY - parentOffset.top;
  				$(this).find('span').css({top: relY, left: relX})
  			});



  		$('.slide-bg-wrap')
  			.on('mouseenter', function (e) {
  				var parentOffset = $(this).offset(),
  					relX = e.pageX - parentOffset.left,
  					relY = e.pageY - parentOffset.top;
  				$(this).find('.slide-bg').css({top: relY, left: relX})
  			})
  			.on('mouseout', function (e) {
  				var parentOffset = $(this).offset(),
  					relX = e.pageX - parentOffset.left,
  					relY = e.pageY - parentOffset.top;
  				$(this).find('.slide-bg').css({top: relY, left: relX})
  			});

        $('.btn-gradient')
          .on('mousemove',function(event){
            var parentOffset = $(this).offset();
            var x = event.pageX - parentOffset.left;
            var y = event.pageY - parentOffset.top;

            $(this).css({'--x': x, '--y': y});
          });

    }
  }
})(jQuery);