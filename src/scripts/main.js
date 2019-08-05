$(".navigation__burger").on("click", function() {
    $(".navigation__burger").toggleClass("is-active");
    $(".navigation__list").toggleClass("active");
    checkNav();
});

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
// $('.catalog__list').owlCarousel({
//     loop:true,
//     margin:15,
//     autoWidth:true,
//     nav:false,
//     responsiveClass: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1,
//             nav:false,
//             loop:true

//         },
//         1000:{
//             items:2,
//             loop:false,
//             nav:true
//         },
//         1400:{
//             items:3,
//             loop:false,
//             nav:false,
//         }
//     }
// })
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

