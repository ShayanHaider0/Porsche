$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slider .slide");
  slides.eq(currentSlide).addClass("active");

  function showSlide(index) {
    slides.eq(currentSlide).fadeOut(300).removeClass("active");
    currentSlide = (index + slides.length) % slides.length;
    slides.eq(currentSlide).fadeIn(300).addClass("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);

  setInterval(nextSlide, 3000); // 3 seconds interval
});
