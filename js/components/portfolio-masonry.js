!function(c){Berserk.behaviors.portfolio_masonry_init={attach:function(t,i){if(!(c(".brk-grid:not(.rendered):not(.brk-grid-sorted)").length<1)){if("function"!=typeof Isotope)return console.log("Waiting for the Isotope library"),void setTimeout(Berserk.behaviors.portfolio_masonry_init.attach,i.timeout_delay,t,i);var r=c(".brk-grid:not(.rendered):not(.brk-grid-sorted)",t).addClass("rendered");r.length&&r.each(function(){var i,r,e,d,n=c(this),o=n.attr("data-grid-cols"),a=c(window).width();function s(t){992<t?(r=100/o+"%",e=100/o*2+"%",n.find(".brk-grid__sizer").css("width",r),n.find(".brk-grid__item").css("width",r),n.find(".brk-grid__item_width-2").css("width",e)):t<=992&&i?(r=100/i+"%",e=100/i*2+"%",n.find(".brk-grid__sizer").css("width",r),n.find(".brk-grid__item").css("width",r),n.find(".brk-grid__item_width-2").css("width",e)):t<=992&&!i&&(r=100/o+"%",e=100/o*2+"%",n.find(".brk-grid__sizer").css("width",r),n.find(".brk-grid__item").css("width",r),n.find(".brk-grid__item_width-2").css("width",e))}n.attr("data-grid-cols-tablet")&&(i=n.attr("data-grid-cols-tablet")),setTimeout(function(){s(a)},300),c(window).resize(function(){s(c(window).width())}),setTimeout(function(){d="rtl"===c("html").attr("dir")?n.isotope({itemSelector:".brk-grid__item",percentPosition:!0,originLeft:!1,masonry:{columnWidth:".brk-grid__sizer",rowHeight:".brk-grid__sizer"},getSortData:{category_data:"[data-category]",name:".brk-simple-card__title",category_name:".brk-simple-card__category"}}):n.isotope({itemSelector:".brk-grid__item",percentPosition:!0,masonry:{columnWidth:".brk-grid__sizer",rowHeight:".brk-grid__sizer"},getSortData:{category_data:"[data-category]",name:".brk-simple-card__title",category_name:".brk-simple-card__category"}})},400),c(".brk-filters:not(.rendered)",t).find(".brk-filters__item").each(function(){var t=c(this),i=c(this).attr("data-filter");if(i&&"*"!==i){var r=n.find(i).length;t.find(".brk-filters__count").html(r)}if(i&&"*"===i){r=n.find(".brk-grid__item").length;t.find(".brk-filters__count").html(r)}}),c(".brk-filters:not(.rendered)",t).on("click","li",function(){var t=c(this).attr("data-filter");d.isotope({filter:t})}),c(".brk-filters:not(.rendered)",t).each(function(t,i){var r=c(i);r.on("click","li",function(){r.find(".active").removeClass("active"),c(this).addClass("active")})}),c(".brk-filters:not(.rendered)",t).addClass("rendered"),c(t).parent().find(".brk-load-button:not(.rendered)").addClass("rendered").each(function(){c(this).on("click",function(){c.ajax({url:"ajax-portfolio-masonry.html",type:"GET",beforeSend:function(t){},success:function(t){var i=c(t);n.append(i),s(a),n.isotope("appended",i)}})})})})}}}}(jQuery);