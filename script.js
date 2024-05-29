const backToTopButton = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 100) {
    backToTopButton.style.opacity = 1;
  } else {
    backToTopButton.style.opacity = 0;
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Adding animations to skill bars
document.querySelectorAll('.skill-bar').forEach(bar => {
  const skillLevel = bar.dataset.skill;
  const progressBar = bar.querySelector('.progress-bar');

  progressBar.style.width = '0%';

  setTimeout(() => {
    progressBar.style.width = skillLevel + '%';
  }, 500);
});

// Night mode toggle
const nightModeToggle = document.createElement('button');
nightModeToggle.className = 'night-mode-toggle';
nightModeToggle.innerText = '🌙';
document.querySelector('header').appendChild(nightModeToggle);

nightModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  nightModeToggle.innerText = document.body.classList.contains('night-mode') ? '☀️' : '🌙';
});
