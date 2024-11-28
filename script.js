function scrollToPage2() {
    document.getElementById('page2').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const carousel = document.querySelector('.carousel');
const profiles = document.querySelectorAll('.profile');
const prev_button = document.querySelector('.carousel-btn.prev');
const next_button = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prev_button.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? profiles.length - 1 : currentIndex - 1;
    updateCarousel();
});
 next_button.addEventListener('click', () => {
    currentIndex = (currentIndex === profiles.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});
