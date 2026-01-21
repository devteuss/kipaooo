/* =========================
   STATUS ABERTO AGORA
========================= */
(function () {
  const status = document.getElementById("open-status");
  if (!status) return;

  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 22) {
    status.textContent = "🟢 Aberto agora";
    status.style.color = "#7CFF7C";
  } else {
    status.textContent = "🔴 Fechado agora";
    status.style.color = "#FF8C8C";
  }
})();

/* =========================
   BUTTON PRESS FEEDBACK
========================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

/* =========================
   MAGNETIC BUTTON EFFECT
========================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});
window.addEventListener("load", () => {
  document.querySelectorAll(".skeleton").forEach(el => {
    el.classList.remove("skeleton");
  });
});
