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
})

$(".navigation__list").on("click","a", function (event) {
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});