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

// Quan cliquis el botó, scroll suau cap a dalt
btnTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

