/* ===== SKELETON LOADER ===== */
window.addEventListener("load", () => {
  document.getElementById("skeleton").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("skeleton").remove();
  }, 600);
});

/* ===== MAGNETIC BUTTONS ===== */
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * .25}px, ${y * .25}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* ===== MODAL ===== */
document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modal-menu").classList.add("open");
  });
});

document.querySelector(".modal-close").onclick = () => {
  document.getElementById("modal-menu").classList.remove("open");
};

/* ===== STATUS ABERTO AGORA ===== */
const status = document.getElementById("status");
const hour = new Date().getHours();

if (hour < 5 || hour >= 22) {
  status.textContent = "🔴 Fechado agora";
  status.classList.remove("aberto");
}
