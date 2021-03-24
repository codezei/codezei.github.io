document.addEventListener('DOMContentLoaded', function() {
    initSlider()
    count()
})
document.addEventListener('scroll', checkCountVisibility)

function initSlider() {
    $('.efficiency-data').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        count()
    });
    let slider = $('.efficiency-data')
    let settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
        responsive: [{
                breakpoint: 767,
                settings: "unslick"
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    }
    slider.slick(settings);

    $(window).on('resize', function () {
        if ($(window).width() < 768 && !slider.hasClass('slick-initialized')) {
            slider.slick(settings);
        }
    });
}
function count() {
    let counts = document.querySelectorAll('.efficiency-data__count-value')
    function startCount(element) {
        
        if ((counts[0].getBoundingClientRect().bottom > document.documentElement.clientHeight) || (counts[0].getBoundingClientRect().bottom < counts[0].getBoundingClientRect().height)) {
            return
        }
        function setCount () {
            let currentValue = +element.innerHTML
            let setNewValue = setInterval(function () {
                if (currentValue === +element.dataset.value) {
                    clearInterval(setNewValue)
                    element.classList.add('counted')
                    return
                }
                currentValue += 1
                element.innerHTML = currentValue
            }, 10)
        }

        if (!!document.querySelector('.slick-initialized') && element.parentElement.parentElement.parentElement.classList.contains('slick-active') && !element.classList.contains('counted')) {
            setCount () 
        } else if (!document.querySelector('.slick-initialized') && !element.classList.contains('counted')) {
            setCount () 
        }
    }
    for (let i = 0; i < counts.length; i++) {
        startCount(counts[i])
    }
}
function countAfterResize () {
    
    if (document.documentElement.getBoundingClientRect().width > 767) {
       setTimeout(function(){
        count()
       }, 200)
    
        
        window.removeEventListener('resize', countAfterResize)
    }
}

window.addEventListener('resize', countAfterResize)

function checkCountVisibility () {
    
    let element = document.querySelector('.efficiency-data__count-value')
    if ((element.getBoundingClientRect().bottom > document.documentElement.clientHeight) || (element.getBoundingClientRect().bottom < element.getBoundingClientRect().height)) {
        return
    }
    count()
    document.removeEventListener('scroll', checkCountVisibility)
}





