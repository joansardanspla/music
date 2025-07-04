function mostrarImatgeGran(src) {
    // Elimina qualsevol overlay anterior
    if (document.querySelector(".imatge-overlay")) return;

    // Crear overlay
    const overlay = document.createElement("div");
    overlay.className = "imatge-overlay";
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });

    // Crear imatge gran
    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    Object.assign(imatgeGran.style, {
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
    });

    // Crear botó de tancar
    const tancarBtn = document.createElement("span");
    tancarBtn.textContent = "✖";
    Object.assign(tancarBtn.style, {
        position: "fixed",
        top: "20px",
        right: "30px",
        fontSize: "2.5rem",
        color: "#fff",
        cursor: "pointer",
        zIndex: "10000",
        fontFamily: "sans-serif"
    });

    // Només el botó "X" pot tancar l'overlay
    tancarBtn.onclick = () => {
        document.body.removeChild(overlay);
    };

    // Afegir al DOM
    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}

// Per fer aparèixer la pàgina suaument
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Opcional: tancar el menú quan fas clic a un enllaç
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

