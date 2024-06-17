$(function () {

  $(".icon-menu, .menu__link").on("click", function () {
    $("body, .icon-menu, .header, .menu__list").toggleClass("menu-open");
  });


  $(".menu__link, .hero__link, .logo",).on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr("href"),
    top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top - 30}, 1000);
    
  });


  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".header__inner").addClass("scroll");
    } else {
      $(".header__inner").removeClass("scroll");
    }
  });

});

var mixer = mixitup(".works__content");
