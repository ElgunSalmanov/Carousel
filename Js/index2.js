const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

slideMove(slides);

btnNext.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 3) {
    currentSlide = 0;
  } else {
    currentSlide += 3;
  }

  slideMove(slides);
});

btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 3;
  } else {
    currentSlide -= 3;
  }

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      ((index - currentSlide + maxSlideCount) % maxSlideCount) * 105
    }%)`;
  });
}

const points = document.querySelectorAll(".points");
points.forEach((item, index) => {
  item.addEventListener("click", () => {
    let remember = index;
    remember *= 3;
    currentSlide = remember;
    slideMove(slides);
  });
});
