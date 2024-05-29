const thumbnails = document.querySelectorAll('.gallery-thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.lightbox-close');
const backToTopButton = document.querySelector('.back-to-top-button');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    lightboxImage.src = thumbnail.src;
    lightbox.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get current scroll position
  if (scrollY > 100) { // Show button when scrolled more than 100px
    backToTopButton.style.opacity = 1;
  } else {
    backToTopButton.style.opacity = 0;
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to top
  });
});
