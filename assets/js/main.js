(function($) {
    'use strict';

    jQuery(document).ready(function() {

        // preloader
        var preloaderFadeOutTime = 1200;

        function heo_site_loader() {
            var preloader = jQuery('.loader-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }

        heo_site_loader();
    });


    $(document).ready(function() {
        $(".dropdown").hover(function() {
            var dropdownMenu = $(this).children(".dropdown-menu");
            if (dropdownMenu.is(":visible")) {
                dropdownMenu.parent().toggleClass("open");
            }
        });
    });


    jQuery(document).ready(function() {

        /*
         * Initializing select 2
         */


        jQuery('select').select2();

        /*
         * Header Main Slider
         */


        var menu = ['Slide 1', 'Slide 2', 'Slide 3']


        var swiper = new Swiper('.heo-banner-slider', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    });


    jQuery(document).ready(function() {
        var mySwiper = new Swiper('.heo-clients-fb', {

            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.heo-client-fb-pagination',
                clickable: true,

            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
            },
        });
    });
    // =====================testimonial-outer-slider=========================
    $(document).ready(function() {
        // Assign some jquery elements we'll need
        var $swiper = $(".heo-testi-swiper-container");
        var mySwiper = new Swiper(".heo-testi-swiper-container", {
            spaceBetween: 2,
            slidesPerView: 5,
            loop: true,
            autoplay: {
                delay: 1000,
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                },
                450: {
                    slidesPerView: 1.8,
                    centeredSlides: true,
                },
            },

        });
    });
    // ++++++++++++++++++++++++++++++++++++++++
    $(document).ready(function() {
        var swiper = new Swiper('.heo-carasol-slider', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 1,
                },

            },
        });
    });

    // ++++++++++++++++++++++++++++++++++++++++
    $(document).ready(function() {
        var swiper = new Swiper('.heo-rel-pro-slider', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1192: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                },

            },
        });
    });

    // +++++++++++++++++blog-section slider+++++++++++++++++++++++//
    $(document).ready(function() {
        var swiper = new Swiper('.heo-blog-carasol-slider', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
            },
        });
    });
    // =========================progress-bar==============================
    let ami = document.querySelectorAll(".flexiblebar")
    let flexiblearr = Array.from(ami)
    let percent = document.querySelectorAll(".percent")
    let per = Array.from(percent)


    flexiblearr.map((item) => {
        let count = 0

        function progressbar() {
            count++
            item.style.width = `${count}%`
            percent.innerHTML = `${count}%`

            if (count == item.dataset.percent) {
                clearInterval(stop)
            }
        }
        let stop = setInterval(function() {
            progressbar()
        }, 30);

    })
    per.map((item) => {
            let count = 0;

            function numbers() {
                item.innerHTML = `${count}%`;
                count++;
                if (count > item.dataset.number) {
                    clearInterval(stop_two)
                }
            }
            let stop_two = setInterval(() => {
                numbers()
            }, 30);
        })
        // ++ ++ ++ ++ ++ ++ ++ ++ ++ ++image gallery++ ++ ++ ++ ++ ++ ++ ++ ++
    $(document).ready(function() {

        if ($(".heo_blog_fancybox").length > 0) {
            $(".heo_blog_fancybox").fancybox({
                openEffect: 'none',
                closeEffect: 'none'
            });
        }



    });

    // ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ Increament Decrement Button ++ ++ ++ ++ ++ ++ ++ ++ ++

    if (jQuery('.heo-counter').length > 0) {

        const plus = document.querySelector(".heo-add"),
            minus = document.querySelector(".heo-sub"),
            num = document.querySelector(".heo-counter");
        let a = 1;
        plus.addEventListener("click", () => {
            a++;
            a = (a < 10) ? a : a;
            num.innerText = a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
                a--;
                a = (a < 10) ? a : a;
                num.innerText = a;
            }
        });

    }





    // ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ Timer Function ++ ++ ++ ++ ++ ++ ++ ++ ++

    function makeTimer() {

        //		var endTime = new Date("30 October 2022 9:56:00 GMT+01:00");	
        var endTime = new Date("30 October 2022 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function() {
        makeTimer();
    }, 1000);


    // ======================Product detail page 1 gallery================================//

    $(document).ready(function() {


        if (jQuery('.gallery-top').length > 0) {

            var galleryTop = new Swiper('.gallery-top', {
                loop: true,
                loopedSlides: 1,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }

            });
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                centeredSlides: true,
                slidesPerView: 3,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                loop: true,
                loopedSlides: 1,
                breakpoints: {
                    786: {
                        slidesPerView: 3,
                    }
                }
            });
            galleryTop.controller.control = galleryThumbs;
            galleryThumbs.controller.control = galleryTop;

        }



    });
    // ======================Modal gallery================================//

    $(document).ready(function() {
        if (jQuery('.heo-gallery-slider').length > 0) {

            $(".modal").on('show.bs.modal', function() {
                setTimeout(function() {
                    var slider = new Swiper('.heo-gallery-slider', {
                        slidesPerView: 1,
                        centeredSlides: true,
                        loop: true,
                        loopedSlides: 1,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });


                    var thumbs = new Swiper('.heo-gallery-thumbs', {
                        slidesPerView: 3,
                        spaceBetween: 35,
                        centeredSlides: true,
                        loop: true,
                        slideToClickedSlide: true,
                    });

                    slider.controller.control = thumbs;
                    thumbs.controller.control = slider;
                }, 500);
            });



        }
    });



    // ====================== Navbar dropdown  ================================//
    $(document).ready(function() {
        $('.dropdown-toggle1').mouseover(function() {
            $('.dropdown-menu').show();
        })
        $('.dropdown-toggle2').mouseover(function() {
            $('.dropdown-menu').show();
        })
        $('.dropdown-toggle3').mouseover(function() {
            $('.dropdown-menu').show();
        })

    });
    // ====================== Navbar Active Link  ================================//

    $(document).ready(function() {
        $(".nav-link").on("click", function() {
            $('.navbar-nav').find('a.active').removeClass('active');
            $('a[href="' + location.pathname + '"]').closest("a").addClass("active");
        });
    });


    // ====================== Shop Price Range Slider ================================//
    $(document).ready(function() {
        const ranges = document.querySelectorAll('.js-range');

        function update(e) {
            const el = e.currentTarget;
            const inputs = Array.from(el.querySelectorAll('input'));
            const vals = inputs.map(input => Number(input.value));

            vals.sort((a, b) => a < b ? -1 : 1);

            const max = inputs[0].getAttribute('max');

            el.style.setProperty('--minVal', vals[0]);
            el.style.setProperty('--maxVal', vals[1]);

            if (e.target.classList.contains('js-range-min') && Number(inputs[0].value) > Number(inputs[1].value)) {
                inputs[1].value = inputs[0].value
            }

            if (e.target.classList.contains('js-range-max') && Number(inputs[1].value) < Number(inputs[0].value)) {
                inputs[0].value = inputs[1].value
            }
        };

        ranges.forEach(range => range.addEventListener('input', update));
    });

    // ====================== Scroll To Top Button Fn ================================//

    $(document).ready(function() {
        let mybutton = document.getElementById("scrollTopBtn");
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        $("#scrollTopBtn").on("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });

})(jQuery);