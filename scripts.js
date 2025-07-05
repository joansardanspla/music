function mostrarImatgeGran(src) {
  if (document.querySelector(".imatge-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "imatge-overlay";

  const imatgeGran = document.createElement("img");
  imatgeGran.src = src;

  const tancarBtn = document.createElement("span");
  tancarBtn.className = "tancar-btn";
  tancarBtn.textContent = "✖";

  tancarBtn.onclick = () => {
    document.body.removeChild(overlay);
  };

  // Opcional: tancar clicant fora de la imatge
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  };

  // Opcional: tancar amb ESC
  function keyHandler(e) {
    if (e.key === "Escape") {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
        window.removeEventListener("keydown", keyHandler);
      }
    }
  }
  window.addEventListener("keydown", keyHandler);

  overlay.appendChild(imatgeGran);
  overlay.appendChild(tancarBtn);
  document.body.appendChild(overlay);
}
