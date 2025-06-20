function mostrarImatgeGran(src) {
    if (document.querySelector(".imatge-overlay")) return;

    // Crear l'overlay
    const overlay = document.createElement("div");
    overlay.classList.add("imatge-overlay");
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

    // Crear la imatge gran
    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    Object.assign(imatgeGran.style, {
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
    });

    // Crear el botó de tancar (X)
    const tancarBtn = document.createElement("span");
    tancarBtn.textContent = "✖";
    Object.assign(tancarBtn.style, {
        position: "absolute",
        top: "20px",
        right: "30px",
        fontSize: "2.5rem",
        color: "#fff",
        cursor: "pointer",
        zIndex: "10000",
        fontFamily: "sans-serif"
    });

    // Acció de tancar (només amb la X)
    tancarBtn.onclick = () => {
        document.body.removeChild(overlay);
    };

    // Afegir elements
    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}
