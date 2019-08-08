$(window).on('load', function () {
    $(".navigation__burger").on("click", function() {
        $(".navigation__burger").toggleClass("is-active");
        $(".navigation__list").toggleClass("active");
        checkNav();
    });
    $('.header__content_button .button').on('click', function() {
        openHeaderPopup();
    });
    $('.header__content_popup .popup').on('click', function() {
        closeHeaderPopup();
    });
  })





function openHeaderPopup() {
    $('.header__content_popup').addClass("active");
}
function closeHeaderPopup() {
    $('.header__content_popup').removeClass("active");
}






function checkNav() {
    let top = $(".navigation").innerHeight();
    if(($(".navigation__list").hasClass("active"))) {
        $(".navigation__list").css("top", top);
    } else {
        $(".navigation__list").css("top", "-500px");

    }
}
$(".navigation__list").on("click","a", function (event) {
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});
$('.feedbacks__list').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText: [`<img class="prev" src="./images/right-arrow.svg">`,`<img class="next" src="./images/right-arrow.svg">`],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1
      }
  }
});
$('#form2-tel').on("click", function() {
    $('#form2-tel').attr({"value":"+7"})
})

