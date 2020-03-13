$(document).ready(function(){
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.slick-nav-banner'),
        appendArrows: $('.slick-nav-banner'),
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',

        
      });
      
      $('.nearest-slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.slick-nav'),
        appendArrows: $('.slick-nav'),
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
        
        
      });
      $('.completed-wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.slick-nav-completed'),
        appendArrows: $('.slick-nav-completed'),
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
        
        
      });

      setInterval(function(){
        const date = new Date();
        const format = [
            (date.getHours()),
            (date.getMinutes()<10?'0':'') + date.getMinutes(),
            (date.getSeconds())
        ].join(":");
        let clocks = document.querySelectorAll('.current-time')
        clocks.forEach((item)=>{
          item.innerHTML = format;
        })
      }, 900);

      let switcherBtn = document.querySelector('.switcher');
      let switcherPopup = document.querySelector('.switcher-popup');
      let switcherBtnSpan = document.querySelector('.switcher > span');
      let switcherPopupA = document.querySelectorAll('.switcher-popup a');
      switcherBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        switcherPopup.classList.toggle('open');
      })
      switcherPopup.addEventListener('click', (e)=>{
        e.preventDefault();
        if (e.target.tagName === "A") {
          switcherBtnSpan.innerHTML = e.target.innerHTML;
          switcherPopupA.forEach((item)=>{
            if (item === e.target) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          })
          switcherPopup.classList.remove('open')
        }
      })


      // document.addEventListener('click', (e)=>{
      //   if (e.target.tagName == 'A') {
      //     e.preventDefault();
      //   }
      // })
      let rateContainer = document.querySelector('.rate');
      rateContainer.addEventListener('click', e=>{
        console.log(e.target)
        if (e.target.classList.contains('type-title')) {
          e.preventDefault();
          if (e.target.nextElementSibling.dataset.toggle == "toggle") {
            e.target.parentElement.classList.toggle('hide');
            e.target.querySelector('i').classList.toggle('down');
          }
        }
      })
  });