const productsData = [
  {
    name: "Pão Francês",
    desc: "Crocante por fora, macio por dentro. Sai quentinho o dia todo.",
    img: "https://images.unsplash.com/photo-1608198093002-de0f53d94f6c"
  },
  {
    name: "Bolo Caseiro",
    desc: "Receita tradicional, feito diariamente.",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f"
  },
  {
    name: "Doces Artesanais",
    desc: "Doces frescos com ingredientes selecionados.",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  }
];

const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modal-img">
    <h3 id="modal-title"></h3>
    <p id="modal-desc"></p>
    <a class="btn" target="_blank"
      href="https://wa.me/5518996955697">
      Pedir no WhatsApp
    </a>
  </div>
`;
document.body.appendChild(modal);

document.querySelectorAll(".product").forEach((card, index) => {
  card.addEventListener("click", () => {
    document.getElementById("modal-img").src = productsData[index].img;
    document.getElementById("modal-title").textContent = productsData[index].name;
    document.getElementById("modal-desc").textContent = productsData[index].desc;
    modal.classList.add("open");
  });
});

modal.querySelector(".close").onclick = () => modal.classList.remove("open");
modal.onclick = e => {
  if (e.target === modal) modal.classList.remove("open");
};
