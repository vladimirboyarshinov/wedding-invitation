document.addEventListener('DOMContentLoaded', () => {

  const slider = document.getElementById('gallerySlider');

  if (!slider) return;

  const slides = slider.querySelectorAll('.gallery__slide');
  const dots = document.querySelectorAll('.gallery__dot');

  function updateActiveDot() {

    let activeIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {

      const distance = Math.abs(
        slide.offsetLeft - slider.scrollLeft
      );

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }

    });

    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    dots[activeIndex]?.classList.add('active');

  }

  slider.addEventListener('scroll', updateActiveDot);

  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      slides[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });

    });

  });

  updateActiveDot();

});