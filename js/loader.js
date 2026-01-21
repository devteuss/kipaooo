window.addEventListener("load", () => {
  const skeleton = document.getElementById("skeleton");

  setTimeout(() => {
    skeleton.style.opacity = "0";
    skeleton.style.pointerEvents = "none";

    setTimeout(() => {
      skeleton.remove();
    }, 500);
  }, 1200);
});
