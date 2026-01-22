const status = document.querySelector(".status-open");

if (status) {
  const hour = new Date().getHours();
  const isOpen = hour >= 5 && hour < 22;

  status.innerHTML = isOpen
    ? `<span class="dot"></span> Aberto agora`
    : `🔴 Fechado no momento`;

  if (!isOpen) {
    status.style.background = "rgba(231,76,60,.15)";
    status.style.color = "#c0392b";
  }
}
