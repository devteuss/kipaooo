/* ===== PARALLAX ===== */
const parallax = document.querySelector("[data-parallax]");

window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.4 + "px";
});

/* ===== REVEAL ON SCROLL ===== */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
