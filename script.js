/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: #0f0f0f;
  color: #ffffff;
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: background 0.5s, color 0.5s;
}

body.light-mode {
  background: #f0f0f0;
  color: #000;
}

/* Custom Scrollbar */
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #1a1a1a;
}

body::-webkit-scrollbar-thumb {
  background: #00ffcb;
  border-radius: 5px;
}

body.light-mode::-webkit-scrollbar-track {
  background: #e0e0e0;
}

body.light-mode::-webkit-scrollbar-thumb {
  background: #00aa7f;
}

/* Navbar */
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  transition: background 0.5s;
  box-sizing: border-box;
}

body.light-mode .navbar {
  background: rgba(255, 255, 255, 0.8);
}

.navbar .logo {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.5s;
}

body.light-mode .navbar .logo {
  color: #000;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navbar ul li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s ease;
}

body.light-mode .navbar ul li a {
  color: #000;
}

.navbar ul li a:hover {
  color: #00ffcb;
}

#theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  transition: color 0.5s;
  padding: 0;
  margin: 0;
}

body.light-mode #theme-toggle {
  color: #000;
}

/* Hero Section */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;
  padding: 0 5%;
  z-index: 1;
  overflow: hidden;
}

#hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: filter 0.5s;
}


.hero-title {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: color 0.5s;
}

body.light-mode .hero-title {
  color: #000;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #cccccc;
  transition: color 0.5s;
}

body.light-mode .hero-subtitle {
  color: #555;
}

.cta-btn {
  padding: 15px 30px;
  background: linear-gradient(45deg, #00ffcb, #00ffaa);
  color: #000;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative;
  z-index: 10;
}

.cta-btn:hover {
  transform: scale(1.1);
}

/* Portfolio Sections */
.portfolio-section {
  padding: 100px 5%;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  transition: color 0.5s;
}

body.light-mode .section-title {
  color: #000;
}

.section-desc {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #aaaaaa;
  transition: color 0.5s;
}

body.light-mode .section-desc {
  color: #555;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

body.light-mode .skill-card {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.progress-bar {
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  display: block;
  height: 100%;
  background-color: #00ffcb;
  width: 0;
  transition: width 1s ease-in-out;
}

.skill-card[data-skill="100"] .progress-bar::after {
  width: 100%;
}

.skill-card[data-skill="80"] .progress-bar::after {
  width: 80%;
}

.skill-card[data-skill="60"] .progress-bar::after {
  width: 60%;
}

/* Work History Section */
.work-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

body.light-mode .work-card {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.work-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Projects Section */
.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

body.light-mode .project-card {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.project-button {
  padding: 10px 20px;
  background: linear-gradient(45deg, #00ffcb, #00ffaa);
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.project-button:hover {
  transform: scale(1.1);
}

.project-button.disabled {
  background: #555;
  cursor: not-allowed;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px 5%;
  background: #0f0f0f;
  color: #aaaaaa;
  font-size: 0.9rem;
  transition: background 0.5s, color 0.5s;
}

body.light-mode footer {
  background: #e0e0e0;
  color: #555;
}

footer a {
  text-decoration: none;
  color: #80ffe5;
  font-weight: 500;
  transition: color 0.5s;
}

body.light-mode footer a {
  color: #00aa7f;
}

footer a:hover {
  color: #00ffaa;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    padding: 12px 5%;
  }

  .navbar ul {
    gap: 12px;
  }

  .navbar .logo {
    font-size: 1.4rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-btn {
    padding: 12px 25px;
    font-size: 1rem;
  }

  .portfolio-section {
    padding: 60px 5%;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-desc {
    font-size: 1rem;
  }

  .skills-grid, .project-gallery {
    grid-template-columns: 1fr;
  }

  .progress-bar {
    height: 8px;
  }
}
