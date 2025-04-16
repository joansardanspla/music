// Mostrar/ocultar informació de contacte
function mostrarContacte() {
    var contacte = document.getElementById("contacte");
    if (contacte.style.display === "none") {
        contacte.style.display = "block"; // Mostra el paràgraf
    } else {
        contacte.style.display = "none"; // Amaga el paràgraf
    }
}


// Mostrar una imatge gran en fer clic sobre una miniatura
function mostrarImatgeGran(src) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
    overlay.style.zIndex = "999";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    const imatgeGran = document.createElement("img");
    imatgeGran.src = src;
    imatgeGran.style.maxWidth = "90%";
    imatgeGran.style.maxHeight = "90%";
    imatgeGran.style.borderRadius = "10px";

    const tancarBtn = document.createElement("span");
    tancarBtn.textContent = "✖";
    tancarBtn.style.position = "fixed";
    tancarBtn.style.top = "20px";
    tancarBtn.style.right = "30px";
    tancarBtn.style.fontSize = "2rem";
    tancarBtn.style.color = "#fff";
    tancarBtn.style.cursor = "pointer";
    tancarBtn.style.zIndex = "1001";

    function tancarImatge() {
        document.body.removeChild(overlay);
        document.removeEventListener("keydown", escListener);
    }

    tancarBtn.onclick = tancarImatge;
    overlay.onclick = tancarImatge;

    function escListener(e) {
        if (e.key === "Escape") {
            tancarImatge();
        }
    }

    document.addEventListener("keydown", escListener);

    overlay.appendChild(imatgeGran);
    overlay.appendChild(tancarBtn);
    document.body.appendChild(overlay);
}
