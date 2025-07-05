// Mostrar imatge gran en fer clic
function mostrarImatgeGran(src) {
    if (document.querySelector(".imatge-overlay")) return;

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
        justifyContent: "center",
    });

    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    Object.assign(imatgeGran.style, {
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    });

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
        fontFamily: "sans-serif",
        userSelect: "none",
    });

    tancarBtn.onclick = () => {
        document.body.removeChild(overlay);
    };

    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}

// Per afegir animacions CSS o classes post-càrrega (opcional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
