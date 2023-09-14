const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

slideMove(slides);

btnNext.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 4) {
    currentSlide = 0;
  } else {
    currentSlide += 2;
  }

  slideMove(slides);
});

btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 4;
  } else {
    currentSlide -= 2;
  }

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
  });
}
