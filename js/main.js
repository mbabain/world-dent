const burgerButton = document.querySelector('.burger');
const header = document.querySelector('.section-header');
const headerTel = document.querySelector('.section-header-registration');
const headerInfo = document.querySelector('.section-header-info');
const links = document.querySelector('.section-links');
const linksItems = document.querySelectorAll('.section-links-nav__item');
const burgerBackground = document.querySelector('.burger-background');

$(document).ready(function(){
    $("#first-block-slider").owlCarousel({
        items: 1,
        loop: true
    });
  });
$(document).ready(function(){
    $("#partners-slider").owlCarousel({
        center: true,
        margin: 27,
        responsive : {
            0 : {
                items: 1.2
            },
            250 : {
                items: 1.4
            },
            300 : {
                items: 1.6
            },
            350 : {
                items: 1.8
            },
            400 : {
                items: 2
            },
            450 : {
                items: 2.2
            },
            500 : {
                items: 2.4 
            },
            550 : {
                items: 2.6
            },
            600 : {
                items: 3
            },
            650 : {
                items: 3.2
            },
            700 : {
                items: 3.4
            },
            750 : {
                items: 3.6 
            },
            800 : {
                items: 3.8
            },
            850 : {
                items: 4
            },
            900 : {
                items: 4.2
            },
            950 : {
                items: 4.4
            },
            1000 : {
                items: 4.6
            },
            1050 : {
                 items: 4.8
            },
            1100 : {
                 items: 5
            },
            1150 : {
                 items: 5.2
            },
            1200 : {
                 items: 5.4
            },
            1250 : {
                 items: 5.6
            },
            1300 : {
                 items: 5.8
            },
            1350 : {
                 items: 6
            },
            
        },
        loop: true
    });
  });
$(document).ready(function(){
    $("#services-slider").owlCarousel({
        stagePadding: 80,
        margin: 12,
        responsive : {
            0 : {
                stagePadding: 20,
                items: 1
            },
            553 : {
                stagePadding: 60,
                items: 1
            },
            670 : {
                items: 1.2
            },
            738 : {
                items: 1.6
            },
            860 : {
                items: 2
            },
            1080 : {
                items: 2.6
            }
        },
        loop: true
    });
});
$(document).ready(function(){
    $("#discounts-slider").owlCarousel({
        center: true,
        items: 2.7,
        responsive : {
            0 : {
                margin: 10,
                stagePadding: 20,
                items: 1
            },
            550 : {
                items: 1.3
            },
            690 : {
                items: 1.6
            },
            769 : {
                items: 2
            },
            1000 : {
                items: 2.5
            },
            1200 : {
                items: 2.7
            }
        },
        margin: 22,
        loop: true
    });
});
$(document).ready(function(){
    $("#description-slider").owlCarousel({
        video:true,
        items: 1,
        loop: true
    });
});

burgerButton.addEventListener('click', () => {
    header.classList.toggle('visibility--visible');
    links.classList.toggle('visibility--visible');
    burgerBackground.classList.toggle('burger-background-width');
    document.querySelector('#bar1').classList.toggle('bar1-active');
    document.querySelector('#bar2').classList.toggle('bar2-active');
    document.querySelector('#bar3').classList.toggle('bar3-active');
    if (header.classList.contains('visibility--visible')) {
        document.body.style.overflow = 'hidden';
        headerInfo.style.transform = 'translateX(0)';
        headerTel.style.transform = 'translateX(0)';
        linksItems.forEach(item => {
            item.style.transform = 'translateX(0)';
        });
    } else {
        document.body.style.overflow = 'auto';
        linksItems.forEach(item => {
            item.style.transform = 'translateX(300px)';
            headerInfo.style.transform = 'translateX(300px)';
            headerTel.style.transform = 'translateX(300px)';
        });
    }

});