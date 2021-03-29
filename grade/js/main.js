document.addEventListener('DOMContentLoaded', function() {
    initSlider()
    count()
    document.addEventListener('scroll', checkCountVisibility)
})


function initSlider() {
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
    
    if (document.querySelector('.slick-initialized')) {
        for (let i = 0; i < counts.length; i++) {
            counts[i].innerHTML = counts[i].dataset.value
        }
        return
    } 
    function startCount(element) {
        if ((element.getBoundingClientRect().bottom > document.documentElement.clientHeight) || (element.getBoundingClientRect().bottom < element.getBoundingClientRect().height)) {
            return
        }
        function setCount () {
            let currentValue = +element.innerHTML
            let setNewValue = setInterval(function () {
                if (currentValue === +element.dataset.value) {
                    clearInterval(setNewValue)
            
                    return
                }
                currentValue += 1
                element.innerHTML = currentValue
            }, 10)
        }

        setCount () 

    }
    for (let i = 0; i < counts.length; i++) {
        startCount(counts[i])
    }
}

const countElement = document.querySelector('.efficiency-data__count-value')
function checkCountVisibility () {
    if ((countElement.getBoundingClientRect().bottom > document.documentElement.clientHeight) || (countElement.getBoundingClientRect().bottom < countElement.getBoundingClientRect().height)) {
        return
    }
    count()
    setTimeout(function(){
        document.removeEventListener('scroll', checkCountVisibility)
    }, 500)
}




