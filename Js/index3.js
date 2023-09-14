const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

slideMove(slides);

btnNext.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 4) {
    currentSlide = 0;
    return;
  } else {
    currentSlide += 4;
  }

  slideMove(slides);
});

btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 4;
    return;
  } else {
    currentSlide -= 4;
  }

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 105}%)`;
  });
}

const points = document.querySelectorAll(".points");

points.forEach((element, index) => {
  element.addEventListener("click", () => {
    let remember = index;
    remember *= 4;
    currentSlide = remember;
    slideMove(slides);
  });
});
