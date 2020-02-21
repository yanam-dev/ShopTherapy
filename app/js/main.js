$(function(){
    $('.promo-slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 1
    });
// WORKS slider start
    var sickPrimary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.text-slider',
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    }

    var sickSecondary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.image-slider',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    }

    $('.image-slider').slick(sickPrimary);
    $('.text-slider').slick(sickSecondary);
// WORKS slider end

        // menu button start
        const navSLide = () => {
            const menu__btn = document.querySelector('.menu__btn');
            const nav = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-menu > li');
            
            menu__btn.addEventListener('click', () => {
                // Toggle Nav
                nav.classList.toggle('menu-active')
        
                // Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                // Burger Animation
                menu__btn.classList.toggle('toggle');
            });
        }
        navSLide(); 
        // menu button end

// Smooth scrolling
$("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 1000);
});

//Accordion

var accordions =
document.getElementsByClassName('accordion');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
        //acordion is open, we need to close it
        content.style.maxHeight = null;
    } else {
        //accordion is closed
        content.style.maxHeight = content.scrollHeight + "px";
    }
    }
}
// CURSOR
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".main");

window.addEventListener('mousemove',cursor);

function cursor (e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    });
});