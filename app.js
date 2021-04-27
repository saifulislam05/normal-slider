let slides = document.querySelectorAll('.slide');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');


let currentSlide = 0;

let changeSlide = () => {
  slides.forEach((slide, index) => currentSlide = slide.classList.contains('active') ? index : currentSlide)
  slides[currentSlide].classList.remove('active');
  currentSlide == (slides.length - 1) ? slides[0].classList.add('active') : slides[currentSlide + 1].classList.add('active');
}
changeSlide()
let customInterval = setInterval(changeSlide, 5000);

let nextslider = () => {
  clearInterval(customInterval)
  slides[currentSlide].classList.remove('active');


  if (currentSlide === (slides.length - 1)) {
    slides[0].classList.add('active')
    currentSlide = 0;
  }

  else {
    slides[currentSlide + 1].classList.add('active')
    currentSlide = currentSlide + 1
  }
  customInterval = setInterval(changeSlide, 5000);
}





let prevSlider = () => {
  clearInterval(customInterval)
  slides[currentSlide].classList.remove('active');


  if (currentSlide === 0) {
    slides[slides.length - 1].classList.add('active')
    currentSlide = slides.length - 1;
  }

  else {
    slides[currentSlide - 1].classList.add('active')
    currentSlide = currentSlide - 1
  }
  customInterval = setInterval(changeSlide, 5000);
}


next.addEventListener('click', nextslider);
previous.addEventListener('click', prevSlider);
