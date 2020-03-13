"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector('video');
  if (video) {
    video.play();
  }
  
});
var gamburger = document.querySelector('.gamburger');
var bodyMain = document.querySelector('body');
var wrapperMobile = document.querySelector('.wrapper_mobile');
var closeMobile = document.querySelector('.close');

if (wrapperMobile) {
  wrapperMobile.addEventListener("click", function (e) {
    bodyMain.classList.remove("mobileMenu");
  }, false);
  closeMobile.addEventListener("click", function (e) {
    bodyMain.classList.remove("mobileMenu");
  }, false);
  gamburger.addEventListener("click", function (e) {
    bodyMain.classList.toggle("mobileMenu");
  }, false);
}

new WOW().init();
var header = $('header');
$(window).scroll(function () {
  var windowTop = $(this).scrollTop();

  if (windowTop > 100) {
    header.addClass('squeeze');
  } else {
    header.removeClass('squeeze');
  }
});
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 50) {
    bodyMain.classList.add("sticky");
  }
});
var linkNav = document.querySelectorAll('[href^="#"]'),
    //выбираем все ссылки к якорю на странице
V = 1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
var clientWidth = document.documentElement.clientWidth;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение

    var w = window.pageYOffset,
        // производим прокрутка прокрутка
    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти

    var start = null;
    var t = document.querySelector(hash).getBoundingClientRect().top; // отступ от окна браузера до id
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
          if (clientWidth < 751) {
            r -= 60;
          }
      window.scrollTo(0, r);

      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash; // URL с хэшем
      }
    }
  }, false);
}

(function ($) {
  $(function () {
    $('ul.geo_tabs__caption').on('click', 'li:not(.active)', function () {
      $(this).addClass('active').siblings().removeClass('active').closest('div.geo_tabs').find('div.geo_tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

$('.media_slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  dots: true,
  prevArrow: '<div class="arrow left"></div>',
  nextArrow: '<div class="arrow right"></div>',
  responsive: [{
    breakpoint: 1330,
    settings: {
      prevArrow: null,
      nextArrow: null
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false
    }
  }, {
    breakpoint: 750,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false
    }
  }]
});
$('.why_advantages.mob').slick({
  responsive: [{
    breakpoint: 751,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      prevArrow: '<div class="arrow left"><div class="arrow-prev"></div></div>',
      nextArrow: '<div class="arrow right"><div class="arrow-next"></div></div>'
    }
  }]
});

