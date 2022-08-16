//이미지 슬라이더
$(".slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false,
    }
  }]
});

// 메뉴 접기 / 펼치기
$(".btn").click(function (e) {
  e.preventDefault();
  $(".nav").slideToggle();
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    $(this).find("i").attr("class", "fa-solid fa-angle-up");
  } else {
    $(this).find("i").attr("class", "fa-solid fa-angle-down");
  }

});

$(window).resize(
  function () {
    const wWidth = $(window).width();
    if (wWidth < 600) {
      $(".nav").removeAttr("style");
      console.log("hello")
    }
  }
);

// 라이트 박스
lightGallery(document.querySelector(".lightbox"), {});