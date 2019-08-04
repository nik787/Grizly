$('.feedbacks__list').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText: [`<i class="prev">Prev</i>`,`<i class="next">next</i>`],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
$('.catalog__list').owlCarousel({
    loop:true,
    margin:50,
    autoWidth:true,
    nav:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
            nav:false,
            loop:true

        },
        1000:{
            items:5,
            loop:false
        }
    }
})
$(".navigation__list").on("click","a", function (event) {
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

$('#form2-tel').on("click", function() {
    $('#form2-tel').attr({"value":"+7"})
})

$(".navigation__burger").on("click", function() {
    $(".navigation__burger").toggleClass("is-active");
    $(".navigation__list").toggleClass("active");

})