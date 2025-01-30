function initializeCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const body = document.body;

  // Apply the saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    // Default theme is light-mode
    body.classList.add("light-mode");
  }

  // Central force or gravitational center (canvas center)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 2 + 2; // Random size
      this.angle = Math.random() * Math.PI * 2; // Random initial angle
      this.speed = 0.01 + Math.random() * 0.03; // Random orbital speed (angular velocity)
      this.distance = Math.random() * 1000 + 10; // Increased distance range (spawn particles farther)
      this.color = this.getParticleColor(); // Dynamically set color based on mode
    }

    getParticleColor() {
      return body.classList.contains("light-mode") ? "#000" : "#fff"; // Light mode/dark mode color
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.angle += this.speed;
      this.x = centerX + this.distance * Math.cos(this.angle);
      this.y = centerY + this.distance * Math.sin(this.angle);
      this.x += Math.sin(this.angle * 3) * 2;
      this.y += Math.cos(this.angle * 3) * 2;
    }
  }

  let particles = [];
  function createParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 300 + 200;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  });

  // Theme toggle button functionality (save theme to localStorage)
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode"); // Save dark mode to localStorage
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode"); // Save light mode to localStorage
      }

      // Update particle colors based on the new theme
      particles.forEach(particle => {
        particle.color = particle.getParticleColor(); // Update particle color on theme change
      });
    });
  }
}

// Mobile detection (hide canvas on mobile)
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)
  );
}

if (!isMobileDevice()) {
  initializeCanvas();
} else {
  const canvas = document.getElementById("hero-canvas");
  if (canvas) canvas.style.display = "none"; // Hide canvas on mobile
}
