function mostrarImatgeGran(src) {
    // Comprovem si ja hi ha un overlay
    if (document.querySelector(".imatge-overlay")) return;

    // Crear overlay
    const overlay = document.createElement("div");
    overlay.className = "imatge-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    // Crear imatge
    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    imatgeGran.alt = "Imatge gran";
    imatgeGran.style.maxWidth = "90%";
    imatgeGran.style.maxHeight = "90%";
    imatgeGran.style.borderRadius = "10px";
    imatgeGran.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

    // Botó tancar
    const tancarBtn = document.createElement("span");
    tancarBtn.innerText = "✖";
    tancarBtn.style.position = "absolute";
    tancarBtn.style.top = "20px";
    tancarBtn.style.right = "30px";
    tancarBtn.style.fontSize = "2.5rem";
    tancarBtn.style.color = "#fff";
    tancarBtn.style.cursor = "pointer";
    tancarBtn.style.zIndex = "10000";
    tancarBtn.style.fontFamily = "sans-serif";

    // Només la X tanca
    tancarBtn.onclick = () => {
        document.body.removeChild(overlay);
    };

    // Afegir al DOM
    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}
