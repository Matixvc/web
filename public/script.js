/* ==========================================================================
   LÓGICA INTERACTIVA GLOBAL - MATÍAS VILLALOBOS CAUTIVO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNavHighlight();
  initScrollReveal();
});

/**
  Resalta automáticamente el enlace de navegación correspondiente a la ruta actual
 */
function initActiveNavHighlight() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Normalizar la comparación de rutas
    if (href === currentPath || (currentPath === '/' && href === '/') || (currentPath.includes('/portafolio') && href.includes('/portafolio')) || (currentPath.includes('/cv') && href.includes('/cv'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
  Efecto visual de revelado suave de elementos al hacer scroll
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => revealObserver.observe(el));
}

/**
  Utilidad opcional para copiar texto al portapapeles con confirmación visual
 */
function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonElement.innerText;
    buttonElement.innerText = '¡Copiado!';
    buttonElement.style.borderColor = 'var(--accent-color)';
    
    setTimeout(() => {
      buttonElement.innerText = originalText;
      buttonElement.style.borderColor = '';
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });
}