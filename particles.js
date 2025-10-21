// js/particles.js
window.addEventListener("load", () => {
  const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  // --- Ajustement du canvas ---
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // --- Création des particules ---
  const numParticles = 80;
  const particles = [];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.alpha = Math.random() * 0.6 + 0.4;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Rebond / reposition si sortie d’écran
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 139, 253, ${this.alpha})`; // bleu doux
      ctx.fill();
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  // --- Animation principale ---
  function animate() {
    ctx.fillStyle = "rgba(13, 17, 23, 0.15)"; // légère traînée
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    // Lignes de connexion entre particules proches
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 139, 253, ${0.15 - dist / 800})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
});
