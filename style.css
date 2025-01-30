// Particle System with Independent Revolving Particles (Spawned Far Away)
function initializeCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const body = document.body;

  // Central force or gravitational center (canvas center)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  class Particle {
    constructor(x, y) {
      // Initialize position and orbit parameters for each particle
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 2 + 2; // Random size
      this.angle = Math.random() * Math.PI * 2; // Random initial angle
      this.speed = 0.01 + Math.random() * 0.03; // Random orbital speed (angular velocity)
      this.distance = Math.random() * 1000 + 50; // Increased distance range (spawn particles farther)
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
      // Update the position based on circular motion (angular velocity)
      this.angle += this.speed; // Increase angle for rotation (orbital movement)

      // Calculate the new position using polar coordinates (radius and angle)
      this.x = centerX + this.distance * Math.cos(this.angle);
      this.y = centerY + this.distance * Math.sin(this.angle);

      // Optional: Add slight oscillation to make it feel more natural
      this.x += Math.sin(this.angle * 3) * 2; // Oscillation effect in X
      this.y += Math.cos(this.angle * 3) * 2; // Oscillation effect in Y
    }
  }

  let particles = [];
  function createParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
      // Randomly place each particle at different angles and larger distances from the center
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 500 + 100; // Increased range for distance (larger radius)
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    particles.forEach((particle) => {
      particle.update(); // Update position for each particle
      particle.draw(); // Draw each particle
    });
    requestAnimationFrame(animate); // Request next frame for animation
  }

  // Initialize particles and start animation
  createParticles();
  animate();

  // Handle window resize (resize canvas and particles)
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  });

  // Theme toggle button functionality (update particle colors)
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      body.classList.toggle("dark-mode");
      particles.forEach(particle => {
        particle.color = particle.getParticleColor(); // Update particle colors based on theme change
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

// Initialize canvas only on desktop
if (!isMobileDevice()) {
  initializeCanvas();
} else {
  const canvas = document.getElementById("hero-canvas");
  if (canvas) canvas.style.display = "none"; // Hide canvas on mobile
}
