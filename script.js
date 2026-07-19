// ==========================
// STARFIELD BACKGROUND
// ==========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
const STAR_COUNT = 350;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.radius = Math.random() * 1.8 + 0.2;

    this.speed = Math.random() * 0.25 + 0.05;

    this.alpha = Math.random();

    this.direction = Math.random() > 0.5 ? 1 : -1;
  }

  update() {
    this.y += this.speed;

    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }

    this.alpha += this.direction * 0.01;

    if (this.alpha >= 1) this.direction = -1;
    if (this.alpha <= 0.2) this.direction = 1;
  }

  draw() {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;

    ctx.fill();
  }
}

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,0.85)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "rgba(5,8,22,0.35)";
    navbar.style.boxShadow = "none";
  }
});

// ==========================
// HERO FADE IN
// ==========================

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");

  hero.animate(
    [
      {
        opacity: 0,
        transform: "translateY(40px)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1200,
      easing: "ease-out",
      fill: "forwards",
    },
  );
});
