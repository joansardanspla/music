 const btnTop = document.getElementById('btn-top');

  // Mostrar o amagar el botó quan fas scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btnTop.classList.add('show');
      btnTop.style.display = 'block';
    } else {
      btnTop.classList.remove('show');
      btnTop.style.display = 'none';
    }
  });

  // Quan cliquis el botó, scroll suau cap a dalt de tot
  btnTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


document.querySelectorAll('.audio-player').forEach(player => {
  const audio = new Audio(player.dataset.audio);
  const playBtn = player.querySelector('.play-btn');
  const progress = player.querySelector('.progress');
  const progressContainer = player.querySelector('.progress-container');
  const time = player.querySelector('.time');

  // Play / pause
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      document.querySelectorAll('audio').forEach(a => a.pause()); // pausa altres pistes
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  // Actualitza progrés i temps
  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    time.textContent = formatTime(audio.currentTime);
  });

  // Saltar fent clic a la barra
  progressContainer.addEventListener('click', e => {
    const rect = progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  });

  // Quan acaba
  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    progress.style.width = '0%';
    time.textContent = '0:00';
  });

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // Obrir/tancar menú en fer clic al botó ☰
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      // Opcional: canviar icona ☰ ↔ ✖
      menuToggle.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
    });

    // Tancar menú automàticament quan es clica un enllaç
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuToggle.textContent = '☰';
      });
    });
  }
});


