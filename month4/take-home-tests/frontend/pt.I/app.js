const carouselSlide = document.querySelector('.carousel-container');
const carouselImages = document.querySelector('.carousel-slide');

const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].cleintWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
  carouselSlide.style.transition = 'tranform 0.4s ease-in-out'
});