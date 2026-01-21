/* =========================
   REVEAL ON SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => revealObserver.observe(el));

/* =========================
   PARALLAX HERO
========================= */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (!hero) return;
  const offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.4 + "px";
});
