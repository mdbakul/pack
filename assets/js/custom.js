$(document).ready(function () {

    // header move to offcanvus-area
    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }

    // Sidebar Js
    $(".tp-menu-bar").on("click", function () {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }


    /*====after click sub menu open in mobile =====*/
    $("ul>li>ul").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.header__menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (screen.width < 1200) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    })


    // slick slider start here
    // $(document).ready(function () {
    //     $('.baner_slider').slick({

    //     });
    // });

    $('.baner_slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


});