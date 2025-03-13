document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        el.classList.add('animate__animated', 'animate__fadeIn');
    });
});
