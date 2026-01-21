/* ================= LOADER ================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 600);
});

/* ================= REVEAL ON SCROLL ================= */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ================= PARALLAX ================= */
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(el => {
    el.style.backgroundPositionY = window.scrollY * 0.4 + 'px';
  });
});

/* ================= MAGNETIC BUTTON ================= */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});
