document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // 1. FUNCIONALITAT GLOBAL
    // ----------------------------------------------------


    // ----------------------------------------------------
    // 2. FUNCIONALITAT DE FILTRES (VÍDEOS i PARTITURES)
    // ----------------------------------------------------

    function inicialitzarFiltres(selectorBotons, selectorCards, valorTots) {
        const filtres = document.querySelectorAll(selectorBotons);
        const cards = document.querySelectorAll(selectorCards);

        filtres.forEach(filtre => {
            filtre.addEventListener('click', function() {
                // Actualitzar botó actiu
                filtres.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const categoria = this.getAttribute('data-categoria');
                
                // Filtrar targetes
                cards.forEach(card => {
                    const cardCategories = card.getAttribute('data-categoria').split(' ');
                    if (categoria === valorTots || cardCategories.includes(categoria)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Inicialització dels filtres de vídeos
    inicialitzarFiltres('.filtres-videos .filtre-boto', '.video-card', 'tots');

    // Inicialització dels filtres de partitures
    inicialitzarFiltres('.filtres-partitures .filtre-boto', '.partitura-card', 'totes');


    // ----------------------------------------------------
    // 3. FUNCIONALITAT DE MODAL (PARTITURES)
    // ----------------------------------------------------

    const modal = document.getElementById('modal-partitura');
    const modalImatge = document.getElementById('modal-imatge');
    const modalTanca = document.querySelector('.modal-tanca');
    const botonsAmpliar = document.querySelectorAll('.boto-ampliar');

    function obrirModal(imatgeSrc, imatgeAlt, titol) {
        modalImatge.src = imatgeSrc;
        modalImatge.alt = imatgeAlt;
        document.getElementById('modal-titol').textContent = `Visualització ampliada: ${titol}`;
        
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function tancarModal() {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    botonsAmpliar.forEach(boto => {
        boto.addEventListener('click', function() {
            const partituraCard = this.closest('.partitura-card');
            const imatge = partituraCard.querySelector('img');
            const titol = partituraCard.querySelector('h3').textContent; // Canviat de h2 a h3 en l'HTML unificat
            
            obrirModal(imatge.src, imatge.alt, titol);
        });
    });

    // Tancar modal amb botó
    modalTanca.addEventListener('click', tancarModal);
    
    // Tancar modal clicant fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            tancarModal();
        }
    });

    // Tancar modal amb tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            tancarModal();
        }
    });


    // ----------------------------------------------------
    // 4. FUNCIONALITAT DE PAUSA DE VÍDEOS (Requereix API de YouTube per a un control real)
    // ----------------------------------------------------

    const iframes = document.querySelectorAll('#videos iframe');
    
    // Funció bàsica: només per propòsits de demostració/log
    function pausarAltresVideos(videoActual) {
        iframes.forEach(iframe => {
            if (iframe !== videoActual) {
                // Aquesta línia només loggeja el que passaria, NO pausa el vídeo sense l'API de YouTube
                console.log('Pausant altres vídeos (requereix YouTube API)...'); 
            }
        });
    }

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                pausarAltresVideos(mutation.target);
            }
        });
    });

    iframes.forEach(iframe => {
        observer.observe(iframe, { attributes: true });
    });
});
