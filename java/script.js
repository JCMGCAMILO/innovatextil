// Animación de aparición al hacer scroll (fade-up)
const elementosAnimados = document.querySelectorAll('.fade-up');

const mostrarElemento = (element) => {
  const top = element.getBoundingClientRect().top;
  const height = window.innerHeight;

  if (top < height - 100) {
    element.classList.add('activo');
  }
};

const revisarScroll = () => {
  elementosAnimados.forEach(mostrarElemento);
};

window.addEventListener('scroll', revisarScroll);
window.addEventListener('load', revisarScroll);

// Scroll suave para todos los enlaces
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
