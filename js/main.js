!function(e){"use strict";var a=e(window);jQuery(window),jQuery(document);function t(){e(".preloader").length&&e(".preloader").delay(100).fadeOut(500)}var i=e(".header-style-two").height();e(".header-style-two").css("height",i),a.on("scroll",(function(){var t=e(".header-navigation-area.one-layer-header"),i=e(".header-navigation-area.two-layers-header"),o=e(".header-navigation-area.three-layers-header"),s=a.scrollTop();s<0?t.removeClass("fixed"):t.addClass("fixed"),s<36?i.removeClass("fixed"):i.addClass("fixed"),s<152?o.removeClass("fixed"):o.addClass("fixed")})),jQuery(document).on("ready",(function(){e(".side-panel-trigger").on("click",(function(){e(".side-panel-content").addClass("side-panel-open")})),e(".close-icon").on("click",(function(){e(".side-panel-content").removeClass("side-panel-open")}));var a=e("#mobile-menu"),t=e("#mobile-menu-right");a.meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"991",meanRevealPosition:"left"}),t.meanmenu({meanMenuContainer:".mobile-menu-right",meanScreenWidth:"991",meanRevealPosition:"right"}),e(".progress-line").length&&e(".progress-line").appear((function(){var a=e(this),t=a.data("width");e(a).css("width",t+"%")}),{accY:0}),e(".count-box").length&&e(".count-box").appear((function(){var a=e(this),t=a.find(".count-text").attr("data-stop"),i=parseInt(a.find(".count-text").attr("data-speed"),10);a.hasClass("counted")||(a.addClass("counted"),e({countNum:a.find(".count-text").text()}).animate({countNum:t},{duration:i,easing:"linear",step:function(){a.find(".count-text").text(Math.floor(this.countNum))},complete:function(){a.find(".count-text").text(this.countNum)}}))}),{accY:0});var i=e(".show-searchbox"),o=e(".toggle-searchbox");(e(document).on("click",(function(e){"s"!==e.target.id&&o.removeClass("show")})),i.on("click",(function(e){event.stopPropagation()})),e(".search-form").on("click",(function(e){event.stopPropagation()})),i.on("click",(function(e){o.hasClass("show")?o.removeClass("show"):(o.addClass("show"),event.preventDefault()),event.preventDefault(),i.hasClass("active")?i.removeClass("active"):i.addClass("active")})),e(".accordion").find(".accordion-header").on("click",(function(){e(this).toggleClass("active"),e(this).next().slideToggle(300,"swing"),e(".accordion-body").not(e(this).next()).slideUp(300,"swing"),e(".accordion-header").not(e(this)).removeClass("active")})),e(".js-tilt").length&&e(".js-tilt").tilt({maxTilt:12,perspective:800,glare:!0,maxGlare:0}),e(".home-carousel").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,animateOut:"fadeOut",animateIn:"fadeIn",active:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:6e3,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:1},1024:{items:1},1440:{items:1}}}),e(".testimonial-items-1col").owlCarousel({loop:!0,margin:30,autoplay:!0,autoplayTimeout:8e3,nav:!0,dots:!0,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:1},1024:{items:2},1440:{items:1}}}),e(".testimonial-items-2col").owlCarousel({loop:!0,margin:30,autoplay:!0,autoplayTimeout:5e3,nav:!0,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:1},1024:{items:2},1440:{items:2}}}),e(".testimonial-items-3col").owlCarousel({loop:!0,margin:30,autoplay:!1,autoplayTimeout:8e3,nav:!0,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:2},1024:{items:2},1440:{items:3}}}),e(".team-items-3col").owlCarousel({loop:!0,margin:30,autoplay:!0,autoplayTimeout:8e3,nav:!0,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:2},1024:{items:3},1440:{items:3}}}),e(".team-items-5col").owlCarousel({loop:!0,margin:30,autoplay:!0,autoplayTimeout:8e3,nav:!0,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:2},1024:{items:3},1440:{items:5}}}),e(".project-items-4col").owlCarousel({loop:!0,margin:5,autoplay:!1,autoplayTimeout:8e3,nav:!0,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:1},768:{items:2},1024:{items:3},1440:{items:4}}}),e(".client-items").owlCarousel({loop:!0,margin:30,autoplay:!0,autoplayTimeout:1e3,nav:!1,dots:!1,rtl:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},425:{items:2},768:{items:3},1024:{items:4},1440:{items:5}}}),e(".language-btn").on("click",(function(a){a.preventDefault(),e(this).next(".language-dropdown").toggleClass("open")})),e(".bg-img, .footer, section, div").each((function(a){e(this).attr("data-background")&&e(this).css("background-image","url("+e(this).data("background")+")")})),e(".popup-load").magnificPopup({type:"iframe",gallery:{enabled:!0}}),e(".img-popup").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-youtube, .popup-youtube-left, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e("#container").imagesLoaded((function(){e(".project-filter").on("click","li",(function(){e("li").removeClass("active"),e(this).addClass("active");var t=e(this).attr("data-filter");a.isotope({filter:t})}));var a=e(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,transitionDuration:".6s"})})),e(".counter").counterUp({delay:10,time:1e3}),e(".wow").length)&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init()})),jQuery(window).on("load",(function(){jQuery,t()}))}(jQuery);