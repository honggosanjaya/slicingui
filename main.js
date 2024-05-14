(function ($) {
  "use strict";

  var swiper = new Swiper(".sliderone", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  var $offCanvasNav = $(".mobile-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".dropdown");
  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="bi bi-chevron-down"></i></span>'
    );
  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();
  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  /*----------------------------------------*/
  /*  Scroll to top
  /*----------------------------------------*/
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show show-active");
        } else {
          $scrollUp.removeClass("show show-active");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*---------------------------
  Testimonial Two Activation
-----------------------------------*/
  var swiper = new Swiper(".testimonialtwo", {
    slidesPerView: 3,
    loop: true,
    pagination: false,
    allowTouchMove: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  /*---------------------------
  Brand Slider Activation
-----------------------------------*/
  var swiper = new Swiper(".brand-slider", {
    loop: true,
    speed: 800,
    autoplay: false,
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 140,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 140,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 200,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 140,
      },
    },
  });
  /*---------------------------
  Brand Slider Two Activation
-----------------------------------*/
  var swiper = new Swiper(".brand-slider-two", {
    loop: true,
    speed: 800,
    autoplay: false,
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 110,
      },
    },
  });

  /*---------------------------
  Portfolio Carousel Activation
-----------------------------------*/
  var swiper = new Swiper(".portfolio-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: false,
    navigation: {
      nextEl: ".portfolio-carousel-wrapper .swiper-btn-next",
      prevEl: ".portfolio-carousel-wrapper .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
})(jQuery);
