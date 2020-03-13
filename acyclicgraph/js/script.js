$(document).ready(function () {

  $('.road-map-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $('.media-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<div class="circle-prev"><button type="button" class="slick-prev"></button></div>',
    nextArrow: '<div class="circle-next"><button type="button" class="slick-next"></button></div>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.team-content.mob').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="circle-prev"><button type="button" class="slick-prev"></button></div>',
    nextArrow: '<div class="circle-next"><button type="button" class="slick-next"></button></div>',
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
  });
  $('.video-content.mob').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
  });

  $('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    width: 1280,
    height: 720,
    maxWidth: '100%',
    maxHeight: '100%',
    padding: 0,
    margin: 0,
    helpers: {
      media: {
        youtube: {
          params: {
            theme: 'light',
            vq: 'hd720',
            css: {
              'body': 'color: #fff'
            }
          }
        }
      }
    }
  });


});


let burger = document.querySelector('.burger');
let head = document.querySelector('header');
let over = document.querySelector('.overlay');
let html = document.querySelector('html');
document.addEventListener('click', (e) => {
  let menu = document.querySelector('.menu')
  if (e.target == burger || e.target.parentElement == burger) {
    menu.classList.toggle('open')
    burger.classList.toggle('active')
    over.classList.toggle('active')
    html.classList.toggle('active')

  } else if (e.target == over) {
    over.classList.remove('active')
    menu.classList.remove('open')
    burger.classList.remove('active')
    html.classList.remove('active')
  } else {
    menu.classList.remove('open')
    over.classList.remove('active')
    burger.classList.remove('active')
    html.classList.remove('active')

  }

  if (!!e.target.dataset.popup) {
    e.preventDefault();
    let popupOpen = document.querySelector('.poligon-popup.open')
    if (popupOpen) {
      e.preventDefault()
      popupOpen.classList.remove('open')
    }
    let popup = document.querySelector(`.${e.target.dataset.popup}`)
    popup.classList.add('open')
    let a = popup.querySelector('.flag-href')
    let activeHrefs = popup.querySelectorAll('.flags a');
    let activeHref = popup.querySelector('.flags a.active');
    let flagArrow = popup.querySelector('.arrow-down');
    a.href = activeHref.dataset.href;
    a.innerHTML = activeHref.dataset.href;
    flagArrow.href = activeHref.dataset.href;
    // console.log(flagArrow)
    popup.addEventListener('click', (e) => {
      if (e.target.parentElement.dataset.href) {
        a.href = e.target.parentElement.dataset.href;
        a.innerHTML = e.target.parentElement.dataset.href;
        flagArrow.href = e.target.parentElement.dataset.href;
        activeHrefs.forEach(a => {
          if (a == e.target.parentElement) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        })
      }
    })
  } else if (e.target.parentElement.dataset.href) {
    e.preventDefault();

  } else if (e.target.classList.contains('close-btn')) {
    e.preventDefault();
    let popup = document.querySelector('.poligon-popup.open');
    popup.classList.remove('open');

  } else if (e.target.parentElement.classList.contains('poligon-popup') || e.target.parentElement.parentElement.classList.contains('poligon-popup')) {} else if (e.target.classList.contains('.strucrure-poligon')) {
    e.preventDefault();
    let popup = document.querySelector('.poligon-popup.open');
    popup.classList.remove('open');
  } else {
    let popup = document.querySelector('.poligon-popup.open');
    if (popup) {
      e.preventDefault();
      popup.classList.remove('open');
    }


  }
})
