function mostrarImatgeGran(src) {
    if (document.querySelector(".imatge-overlay")) return;

    const overlay = document.createElement("div");
    overlay.classList.add("imatge-overlay");
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0", left: "0",
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });

    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    Object.assign(imatgeGran.style, {
        maxWidth: "90%", maxHeight: "90%",
        borderRadius: "10px"
    });

    const tancarBtn = document.createElement("span");
    tancarBtn.textContent = "✖";
    Object.assign(tancarBtn.style, {
        position: "fixed", top: "20px", right: "30px",
        fontSize: "2rem", color: "#fff",
        cursor: "pointer", zIndex: "1001"
    });

    function tancarImatge() {
        document.body.removeChild(overlay);
    }

    // Només la "X" pot tancar l'overlay
    tancarBtn.onclick = tancarImatge;

    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}
